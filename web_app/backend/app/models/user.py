from flask import Flask, request, rendertemplate
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return rendertemplate('form.html')

@app.route('/submitregistration', methods=['POST'])
def submitregistration():

    return render_template('form.html')

@app.route('/submit_registration', methods=['POST'])
def submit_registration():

    email = request.form['email']
    role = request.form['role']
    industry = request.form['industry']
    company_name = request.form['companyName']
    company_address = request.form['companyAddress']
    num_employees = request.form['numEmployees']
    goals = request.form['goals']
    certificates = request.form['certificates']
    
    
    return 'Registration submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
 
