'''
Flask app
'''

from flask import (Flask, render_template)

app = Flask(__name__)

@app.route("/")
def index_route():
    '''
    Index
    '''
    return render_template("index.html", name="index")

if __name__ == "__main__":
    app.run()
