from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return "Test"
def index():
    return render_template('index.html') 

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


@app.route('/submit-esg', methods=['POST'])
def submit_esg():
    data = {
        'type': request.form.get('type'),
        'initiative_name': request.form.get('initiative_name'),
        'desired_change': request.form.get('desired_change'),
        'start_date': request.form.get('start_date'),
        'end_date': request.form.get('end_date'),
        'budget': request.form.get('budget'),
        'concerns': request.form.get('concerns'),
    }
    return jsonify({'message': 'Form submitted successfully', 'data': data}), 200


@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = {
        'name': request.form.get('name'),
        'contact_method': request.form.get('contact_method'),
        'website_url': request.form.get('website_url'),
    }
    return jsonify({'message': 'Form submitted successfully', 'data': data}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
