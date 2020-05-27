import numpy as np
import pandas as pd
import flask
import pickle
from flask import Flask, request, render_template

app = Flask(__name__, static_url_path="/")
model = pickle.load(open("Machine_Learning/MLP_model.pkl", 'rb'))

locmap = eval(open("Resources/loc_dict.txt").read())
typemap = eval(open("Resources/type_dict.txt").read())

@app.route('/index.html')
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict.html', methods=['POST'])
def predict():
    output = ''
    if flask.request.method == 'POST':
        
        int_features = [int(x) for x in request.form.values()]
        final_features = [np.array(int_features)]
        prediction = model.predict(final_features)
        output = 'Arrest' if prediction == 1 else 'No Arrest' 
    
    return render_template('predict.html', typemap=typemap, locmap=locmap, output=output)

if __name__ == "__main__":
    app.run(debug=True)
