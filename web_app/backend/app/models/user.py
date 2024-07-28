from flask import Flask, request, rendertemplate

app = Flask(__name__)

@app.route('/')
def index():
    return rendertemplate('form.html')

@app.route('/submitregistration', methods=['POST'])
def submitregistration():
    email = request.form['email']
    role = request.form['role']
    industry = request.form['industry']
    company_name = request.form['companyName']
    company_address = request.form['companyAddress']
    num_employees = request.form['numEmployees']
    goals = request.form['goals']
    certificates = request.form['certificates']


    return 'Registration submitted successfully!'

if __name__ == '__main':
    app.run(debug=True)