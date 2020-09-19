from flask import Flask, render_template, request

app = Flask(__name__)

comments_list = [
    {"name": "Jan", "surname": "Nowak", "content": "Jestem bardzo zadowolony!", "grade": 5}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/produkty')
def products():
    return render_template('produkty.html')

@app.route('/komentarze')
def comments():
    return render_template('komentarze.html', cl=comments_list)

@app.route('/nowy_komentarz', methods=["POST"])
def add_new_comment():
    new_comment = {
        "name": request.form['name'],
        "surname": request.form['surname'],
        "content": request.form['content'],
        "grade": request.form['grade']
    }
    comments_list.append(new_comment)
    return "OK"
