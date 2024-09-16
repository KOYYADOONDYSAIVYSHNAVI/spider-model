from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Database Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(50))
    industry = db.Column(db.String(100))
    comp_name = db.Column(db.String(100))
    comp_address = db.Column(db.String(200))
    number = db.Column(db.String(20))
    goals = db.Column(db.String(500))
    file_path = db.Column(db.String(200), nullable=True)

class ESGInitiative(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50))
    initiative_name = db.Column(db.String(100))
    desired_change = db.Column(db.String(500))
    start_date = db.Column(db.String(50))
    end_date = db.Column(db.String(50))
    budget = db.Column(db.String(50))
    concerns = db.Column(db.String(500))

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    contact_method = db.Column(db.String(100))
    website_url = db.Column(db.String(200))


@app.route('/')
def home():
    return "Test"

@app.route('/submit-user', methods=['POST'])
def submit_user():
    # Collect form data
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
    file_path = None
    if file:
        file_path = f"./uploads/{file.filename}"
        file.save(file_path)
        data['file_path'] = file_path

    # Create a new User object
    new_user = User(
        email=data['email'],
        role=data['role'],
        industry=data['industry'],
        comp_name=data['comp_name'],
        comp_address=data['comp_address'],
        number=data['number'],
        goals=data['goals'],
        file_path=file_path
    )

    # Add the user to the database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User submitted successfully', 'data': data}), 200

@app.route('/submit-esg', methods=['POST'])
def submit_esg():
    # Collect ESG form data
    data = {
        'type': request.form.get('type'),
        'initiative_name': request.form.get('initiative_name'),
        'desired_change': request.form.get('desired_change'),
        'start_date': request.form.get('start_date'),
        'end_date': request.form.get('end_date'),
        'budget': request.form.get('budget'),
        'concerns': request.form.get('concerns'),
    }

    # Create a new ESGInitiative object
    new_esg = ESGInitiative(
        type=data['type'],
        initiative_name=data['initiative_name'],
        desired_change=data['desired_change'],
        start_date=data['start_date'],
        end_date=data['end_date'],
        budget=data['budget'],
        concerns=data['concerns']
    )

    # Add the ESG initiative to the database
    db.session.add(new_esg)
    db.session.commit()

    return jsonify({'message': 'ESG Initiative submitted successfully', 'data': data}), 200

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    # Collect contact form data
    data = {
        'name': request.form.get('name'),
        'contact_method': request.form.get('contact_method'),
        'website_url': request.form.get('website_url'),
    }

    # Create a new Contact object
    new_contact = Contact(
        name=data['name'],
        contact_method=data['contact_method'],
        website_url=data['website_url']
    )

    # Add the contact to the database
    db.session.add(new_contact)
    db.session.commit()

    return jsonify({'message': 'Contact submitted successfully', 'data': data}), 200


if __name__ == '__main__':
    # Create the database tables (if they don't exist)
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=5000)
