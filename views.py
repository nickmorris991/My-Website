from flask import render_template
from models.processProjects import getProjects
from app import app


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/projects')
def projects():
    return render_template('projects.html', project_data=getProjects())


@app.route('/about')
def about():
    return render_template('about.html')

