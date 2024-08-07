import React, { useState, useEffect } from 'react';
import './contact.css'

const ContactPage = () => {
    const [textField1, setTextField1] = useState('');
    const [dropdownValue, setDropdownValue, textField2, setTextField2] = useState('');
    const [textField3, setTextField3] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (formSubmitted) {
            const formData = new FormData();
            formData.append('name', textField1);
            formData.append('contact_method', dropdownValue, textField2);
            formData.append('website', textField3);

            const submitData = async () => {
                try {
                    const response = await fetch('http://localhost:5000/submit-contact', {
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

    return (
        <>
        <div class="navbar">
         <div class="navbar-center">
          <h1 class="navbar-heading">Contact Page</h1>
         </div>
        </div>
        <div className="container">
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input
                type="text"
                value={textField1}
                onChange={(e) => setTextField1(e.target.value)}
                required
            />
        </div>

        <div>
            <label>Contact Method</label>
            <select value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)} required>
                <option value="">Select an option</option>
                <option value="email">Email</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
            </select>
        </div>

        <div>
            <label>Contact</label>
            <input
                type="text"
                value={textField2}
                onChange={(e) => setTextField3(e.target.value)}
                required
            />
        </div>

        <div>
            <label>Website URL</label>
            <input
                type="text"
                value={textField2}
                onChange={(e) => setTextField2(e.target.value)}
                required
            />
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
        </div>
        </>
    );
};
export default ContactPage;