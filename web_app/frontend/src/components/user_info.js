import React, { useState, useEffect } from 'react';
import './user.css'; 
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [textField1, setTextField1] = useState('');
  const [textField2, setTextField2] = useState('');
  const [textField3, setTextField3] = useState('');
  const [textField4, setTextField4] = useState('');
  const [responseField1, setResponseField1] = useState('');
  const [numberField, setNumberField] = useState('');
  const [responseField2, setResponseField2] = useState('');
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (formSubmitted) {
      const formData = new FormData();
      formData.append('email', textField1);
      formData.append('role', textField2);
      formData.append('industry', textField3);
      formData.append('comp_name', textField4);
      formData.append('comp_address', responseField1);
      formData.append('number', numberField);
      formData.append('goals', responseField2);
      if (file) {
        formData.append('file', file);
      }

      const submitData = async () => {
        try {
          const response = await fetch('http://localhost:5000/submit-user', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            console.log('Form submitted successfully');
            setFormSubmitted(false);
          } else {
            console.error('Form submission failed');
            setFormSubmitted(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setFormSubmitted(false);
        }
      };

      submitData();
    }
  }, [formSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const handleNextLink = () => {
    if (
      textField1 &&
      textField2 &&
      textField3 &&
      textField4 &&
      responseField1 &&
      numberField &&
      responseField2
    ){
    navigate('/esg-initiative');
  }
  else{
    alert("Please fill in all required fields.");
  }
  };
  
  const handleBackLink = () => {
    navigate('/');
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-center">
          <h1 className="navbar-heading">User Information Page</h1>
        </div>
      </nav>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={textField1}
            onChange={(e) => setTextField1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            value={textField2}
            onChange={(e) => setTextField2(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Industry</label>
          <input
            type="text"
            value={textField3}
            onChange={(e) => setTextField3(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company name</label>
          <input
            type="text"
            value={textField4}
            onChange={(e) => setTextField4(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company address</label>
          <textarea
            value={responseField1}
            onChange={(e) => setResponseField1(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Number of Employees</label>
          <input
            type="number"
            step="1"
            value={numberField}
            onChange={(e) => setNumberField(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Goals from using this model</label>
          <textarea
            value={responseField2}
            onChange={(e) => setResponseField2(e.target.value)}
            required
          ></textarea>
        </div>
        
          <div className='input-file-wrapper'>
          <label>Upload relevant certificates/ company achievements (optional)</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit" onClick={handleNextLink}>Next</button>
        <button type="button" onClick={handleBackLink}>Go Back</button>
      </form>
      </div>
    </>
  );
};

export default UserPage;
