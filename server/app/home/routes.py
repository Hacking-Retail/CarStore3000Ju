from app.home import blueprint
from app.auth.routes import token_required
from flask import current_app


@blueprint.route('/')
def index():
    return current_app.send_static_file('index.html')


@blueprint.route('/api/user', methods=['GET'])
@token_required
def get_users(current_user):
    # users = User.query.all()
    return f"Hello {current_user.name}"


@blueprint.route('/api/public', methods=['GET'])
def get_public():
    return "PUBLIC CONTENT"
