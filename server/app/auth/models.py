# -*- encoding: utf-8 -*-

import jwt
import datetime
from flask import current_app
from flask_login import UserMixin
from app import db, login_manager


class User(UserMixin, db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))

    def __init__(self, public_id, email, password, name):
        self.public_id = public_id
        self.email = email
        self.password = password
        self.name = name

    def __repr__(self):
        return f'<id {self.id}: {self.name} @ {self.email}>'

    @staticmethod
    def encode_auth_token(public_id):
        """
        Generates the Auth Token
        :return: string
        """
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=30),
            'iat': datetime.datetime.utcnow(),
            'sub': public_id
        }
        return jwt.encode(
            payload,
            current_app.config['SECRET_KEY'],
            algorithm='HS256'
        )

    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        payload = jwt.decode(auth_token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['sub']


@login_manager.user_loader
def user_loader(user_id):
    return User.query.filter_by(id=user_id).first()


@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    user = User.query.filter_by(email=email).first()
    return user if user else None
