# -*- encoding: utf-8 -*-

import os
from flask_migrate import Migrate
from sys import exit
from decouple import config

from config import config_dict
from app import create_app, db


config_mode = config('APP_SETTINGS')

try:
    app_config = config_dict[config_mode]
except KeyError:
    exit('Error: Invalid <config_mode>. Expected values [Testing, Development, Staging, Production] ')

app = create_app(app_config)
Migrate(app, db)

if __name__ == "__main__":
    app.run(port=(os.getenv('PORT') if os.getenv('PORT') else 8000), debug=True)
