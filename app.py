from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"

@app.route('/user/<username>')
def return_username(username):
    return username

@app.route('/number/<int:nr>')
def return_number(nr):
    return str(nr)
