from flask import Flask
from make_celery import make_celery
import os

app = Flask(__name__)

app.secret_key = "secret"

app.config.update(
    CELERY_BROKER_URL=os.getenv('REDIS_URL', 'redis://localhost:6379'),
    CELERY_RESULT_BACKEND='db+' + os.getenv('DATABASE_URL', 'postgresql://localhost/testdb')
)

celery = make_celery(app)


from app.views import FragmentIntensity, ChargeState, Wildcard, HEM


