from flask import render_template, jsonify
from models.processProjects import getProjects
import os.path as path
from app import app
import json


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

