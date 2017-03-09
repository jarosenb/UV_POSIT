from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def default_view():
    return render_template('index.html')