# -*- encoding: utf-8 -*-

import csv
import os
from app import db
from sqlalchemy import ForeignKey


class Car(db.Model):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    maker = db.Column(db.String(50))
    model = db.Column(db.String(100))
    mileage = db.Column(db.Float)
    manufacture_year = db.Column(db.String(1000))
    engine_displacement = db.Column(db.String(1000))
    engine_power = db.Column(db.Float)
    color_slug = db.Column(db.String(50))
    transmission = db.Column(db.String(50))
    door_count = db.Column(db.Float)
    seat_count = db.Column(db.Float)
    fuel_type = db.Column(db.String(1000))
    price_eur = db.Column(db.Float)

    def __init__(self, maker, model, mileage, manufacture_year, engine_displacement,
                 engine_power, color_slug, transmission, door_count, seat_count, fuel_type, price_eur):
        self.maker = maker
        self.model = model
        self.mileage = mileage
        self.manufacture_year = manufacture_year
        self.engine_displacement = engine_displacement
        self.engine_power = engine_power
        self.color_slug = color_slug
        self.transmission = transmission
        self.door_count = door_count
        self.seat_count = seat_count
        self.fuel_type = fuel_type
        self.price_eur = price_eur

    def __repr__(self):
        return f'<id {self.id}: {self.maker} {self.model} {self.manufacture_year} {self.color_slug}>'

    @staticmethod
    def populate():
        print('len cars = ', len(Car.query.all()))
        if not len(Car.query.all()):
            path = os.getcwd()
            with open(path + '/Dataset-Hackathon.csv', newline='') as csvfile:
                print('yolooooo')
                reader = csv.reader(csvfile, delimiter=',')
                for row in reader:
                    if not row[0]:
                        continue
                    car = Car(
                        maker=row[1],
                        model=row[2],
                        mileage=float(row[3]),
                        manufacture_year=row[4],
                        engine_displacement=row[5],
                        engine_power=float(row[6]),
                        color_slug=row[7],
                        transmission=row[8],
                        door_count=float(row[9]),
                        seat_count=float(row[10]),
                        fuel_type=row[11],
                        price_eur=float(row[12])
                    )
                    db.session.add(car)
                db.session.commit()


class TinderAction(db.Model):
    __tablename__ = 'tinder_action'

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    car_id = db.Column(db.Integer, ForeignKey("cars.id"), nullable=False)
    value = db.Column(db.String(50))

    def __init__(self, customer_id, car_id, value):
        self.customer_id = customer_id
        self.car_id = car_id
        if value == 'right':
            self.value = 'like'
        if value == 'left':
            self.value = 'dislike'
        if value == 'up':
            self.value = 'love'
        if value == 'down':
            self.value = 'hate'

    def __repr__(self):
        return f'<id {self.id}: customer {self.customer_id} {self.value} {self.car_id}>'
