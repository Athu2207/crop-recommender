from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Allow all origins by default

model = joblib.load("crop_model.pkl")

@app.route('/')
def home():
    return "🌾 Crop Recommendation API is running!"

@app.route('/recommend-crop', methods=['POST'])
def recommend_crop():
    data = request.get_json()
    N = float(data.get('N'))
    P = float(data.get('P'))
    K = float(data.get('K'))
    temperature = float(data.get('temperature'))
    humidity = float(data.get('humidity'))
    ph = float(data.get('ph'))
    rainfall = float(data.get('rainfall'))

    features = [[N, P, K, temperature, humidity, ph, rainfall]]
    prediction = model.predict(features)
    return jsonify({'recommended_crop': prediction[0]})


if __name__ == '__main__':
    app.run(debug=True)
