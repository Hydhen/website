'''
Flask app
'''

from flask import Flask

app = Flask(__name__)

@app.route("/")
def index_route():
    '''
    Index
    '''
    return "Hello World!"

if __name__ == "__main__":
    app.run()
