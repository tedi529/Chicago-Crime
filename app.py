import numpy as np
import pandas as pd
import json
import ast
from flask import Flask, request, jsonify, render_template
import joblib

app = Flask(__name__)
model = joblib.load("Machine_Learning/RF_model.sav")

locmap = eval(open("Resources/loc_dict.txt").read())
typemap = eval(open("Resources/type_dict.txt").read())


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    
    for value in ______:
        return locmap.get(value)

    for value in     
        

@app.route('/results',methods=['POST'])    






if __name__ == "__main__":
    app.run(debug=True)