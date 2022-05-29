#importamos la libreria Flask
from flask import Flask, render_template, request

app = Flask(__name__, template_folder='templates')

#---------------------------------------
#Ruta de pagina principal
#---------------------------------------

@app.route('/')
def index():
    return render_template('index.html')

#---------------------------------------
#---------------------------------------

#---------------------------------------
#iniciamos la aplicacion
if __name__ == '__main__':
    app.run(debug=True)