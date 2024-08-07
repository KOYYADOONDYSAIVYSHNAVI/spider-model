import React, { useState, useEffect } from 'react';
import './esg.css'
import { useNavigate } from 'react-router-dom';

const ESGPage = () => {
  const [dropdownValue, setDropdownValue] = useState('');
  const [textField, setTextField] = useState('');
  const [responseField1, setResponseField1] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberField, setNumberField] = useState('');
  const [responseField2, setResponseField2] = useState('');
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (formSubmitted) {
      const formData = new FormData();
      formData.append('type', dropdownValue);
      formData.append('initiative_name', textField);
      formData.append('desired_change', responseField1);
      formData.append('start_date', startDate);
      formData.append('end_date', endDate);
      formData.append('budget', numberField);
      formData.append('concerns', responseField2);
      if (file) {
        formData.append('file', file);
      }

      const submitData = async () => {
        try {
          const response = await fetch('http://localhost:5000/submit-esg', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            console.log('Form submitted successfully');
            setFormSubmitted(false);
            //navigate('/contact')
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
      dropdownValue &&
      textField &&
      responseField1 &&
      startDate &&
      endDate &&
      numberField &&
      responseField2
    ){
    navigate('/contact');
  }
  else{
    alert("Please fill in all required fields.");
  }
  };
  const handleBackLink = () => {
    navigate('/user-info');
  };
  
return (
    <>
      <nav className="navbar">
        <div className="navbar-center">
          <h1 className="navbar-heading">ESG initiative Page</h1>
        </div>
      </nav>
      <div className='container'>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Type</label>
        <select value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)} required>
          <option value="">Select an option</option>
          <option value="environmental">Environmental</option>
          <option value="social">Social</option>
          <option value="governance">Governance</option>
        </select>
      </div>

      <div>
        <label>Name of the initiative</label>
        <input
          type="text"
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Desired change/impact</label>
        <textarea
          value={responseField1}
          onChange={(e) => setResponseField1(e.target.value)}
          required
        ></textarea>
      </div>

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Budget</label>
        <input
          type="number"
          step="0.01"
          value={numberField}
          onChange={(e) => setNumberField(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Potential concerns/obstacles</label>
        <textarea
          value={responseField2}
          onChange={(e) => setResponseField2(e.target.value)}
          required
        ></textarea>
      </div>

      <div className='input-file-wrapper'>
        <label>Upload relevant documents (optional)</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>

      <button type="submit" onClick={handleNextLink}>Next</button>
      <button type="button" onClick={handleBackLink}>Go Back</button>
    </form>
    </div>    </>
  );
};
export default ESGPage;
