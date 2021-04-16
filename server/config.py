from decouple import config


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = config('DATABASE_URL')
    SECRET_KEY = config('SECRET_KEY')


class ProductionConfig(Config):
    DEBUG = False
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_DURATION = 3600


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


config_dict = {
    'Development': DevelopmentConfig,
    'Production': ProductionConfig,
}
