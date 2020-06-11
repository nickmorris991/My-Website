import json
import os.path as path


def getProjects():
    with open("models" + path.sep + "projects.json", "r") as projects_data:
        proj_data = json.load(projects_data)["projects"]

    return proj_data
