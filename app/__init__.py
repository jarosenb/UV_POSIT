from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route('/add')


@app.route("/")
def default_view():
    return render_template('index.html')