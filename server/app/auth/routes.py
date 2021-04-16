# -*- encoding: utf-8 -*-
import jwt
import uuid
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

from app import db
from app.auth import blueprint
from app.auth.models import User


def token_required(f):
    """decorator for verifying the JWT

    Args:
        f (function): The function to wrap

    Returns:
        - function: the decorated function
        - 401: Missing or invalid token
    """

    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'][7:]
        if not token:
            return jsonify({'message': 'Token is missing.'}), 401
        try:
            public_id = User.decode_auth_token(token)
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token signature expired. Please log in again.'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token. Please log in again.'}), 401
        current_user = User.query.filter_by(public_id=public_id).first()
        return f(current_user, *args, **kwargs)

    return decorated


@blueprint.route('/api/auth/login', methods=['POST'])
def login():
    """Login route

    Returns:
        response: 
            - 201: Successfully logged in, returning JWT token
            - 401: User does not exist / Missing parameters
            - 403: Wrong password
    """
    auth = request.get_json()
    if not auth or not auth.get('username') or not auth.get('password'):
        return jsonify({'message': 'Missing parameters.'}), 401

    user = User.query.filter_by(name=auth['username']).first()

    if not user:
        return jsonify({'message': 'User does not exist.'}), 401

    if check_password_hash(user.password, auth['password']):
        token = user.encode_auth_token(user.public_id)
        return jsonify({'id': user.public_id, 'name': user.name, 'email': user.email, 'accessToken': token}), 200

    return jsonify({'message': 'Wrong password.'}), 403


@blueprint.route('/api/auth/signup', methods=['POST'])
def signup():
    """Signup route

    Returns:
        response:
            - 201 : Successfully registered, user created in database
            - 202 : User already exists
            - 401 : Missing parameters
    """
    auth = request.get_json()
    if not auth or not auth['username'] or not auth['password'] or not auth['email']:
        return jsonify({'message': 'Missing parameters.'}), 401

    user = User.query.filter_by(name=auth['username']).first()

    if not user:
        user = User(
            public_id=str(uuid.uuid4()),
            name=auth['username'],
            email=auth['email'],
            password=generate_password_hash(auth['password'])
        )
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'Successfully registered.'}), 201
    else:
        return jsonify({'message': 'User already exists. Please Log in.'}), 202
