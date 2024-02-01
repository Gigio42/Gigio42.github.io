from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    message = "This message came from the Flask server!"
    return render_template('index.html', message=message)

@app.route('/another_page')
def another_page():
    return "This is another page!"

if __name__ == '__main__':
    app.run(debug=True)
