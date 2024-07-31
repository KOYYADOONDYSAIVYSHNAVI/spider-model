from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Test"

@app.route('/submit-user', methods=['POST'])
def submit_user():
    data = {
        'email': request.form.get('email'),
        'role': request.form.get('role'),
        'industry': request.form.get('industry'),
        'comp_name': request.form.get('comp_name'),
        'comp_address': request.form.get('comp_address'),
        'number': request.form.get('number'),
        'goals': request.form.get('goals'),
    }

    file = request.files.get('file')
    if file:
        file_path = f"./uploads/{file.filename}"
        file.save(file_path)
        data['file_path'] = file_path
    print("Data",data)
    return jsonify({'message': 'Form submitted successfully', 'data': data}), 200




if __name__ == '__main__':
    app.run(debug=True, port=5000)
