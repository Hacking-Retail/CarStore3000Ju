from app.home import blueprint
from app.auth.routes import token_required
from flask import current_app, jsonify, request
from app.home.models import Car, TinderAction
from app import db


@blueprint.route('/')
def index():
    return current_app.send_static_file('index.html')


@blueprint.route('/api/public', methods=['GET'])
def get_public():
    return "PUBLIC CONTENT"


@blueprint.route('/api/user', methods=['GET'])
@token_required
def get_users(current_user):
    # users = User.query.all()
    return f"Hello {current_user.name}"


@blueprint.route('/api/cars', methods=['GET'])
@token_required
def get_cars(c_user):
    res = Car.query.limit(5)
    cars = []
    for car in res:
        values = {
            'id': car.id,
            'name': car.maker + ' ' + car.model,
            'price_eur': car.price_eur
        }
        cars.append(values)
    return jsonify(cars)


@blueprint.route('/api/cars/tinder_action', methods=['POST'])
@token_required
def tinder_action(c_user):
    params = request.get_json()
    print('recieved tinder action :')
    print(params)
    if not params or not params.get('car_id') or not params.get('value'):
        return jsonify({'message': 'Missing parameters.'}), 401
    action = TinderAction(c_user.id, params['car_id'], params['value'])
    db.session.add(action)
    db.session.commit()
    return jsonify({'message': 'Successfully saved tinder move.'}), 201
