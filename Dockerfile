FROM python:alpine3.7 

RUN pip --no-cache install --upgrade pip

WORKDIR /app
COPY . /app

RUN  pip --no-cache install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "-c", "config.py", "wsgi:app"]