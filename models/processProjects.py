import json
from os import path


def getProjects():
    with open(path.join("models", "projects.json"), "r") as projects_data:
        proj_data = json.load(projects_data)["projects"]

    return proj_data
