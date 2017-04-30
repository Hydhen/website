"""
Flask app
"""

from flask import (Flask, render_template)

app = Flask(__name__)

@app.route("/projects")
def projects_route():
    """
    Projects
    :return: Projects template
    """
    return render_template("projects.html", name="projects")

@app.route("/profile")
def profile_route():
    """
    Profile
    :return: Profile template
    """
    return render_template("profile.html", name="profile")

@app.route("/")
def index_route():
    """
    Index
    :return: Index template
    """
    return render_template("index.html", name="index")

if __name__ == "__main__":
    app.run()
