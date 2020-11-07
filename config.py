import multiprocessing
import gunicorn_color

# app config
daemon = False
workers = multiprocessing.cpu_count() * 2 + 1
threads = multiprocessing.cpu_count() * 2 + 1
bind = '0.0.0.0:5000'

# log config
accesslog = "-"
errorlog = "-"
logger_class=gunicorn_color.Logger
access_log_format="%(h)s %(l)s %(u)s %(t)s %(r)s %(s)s"
loglevel="INFO"
