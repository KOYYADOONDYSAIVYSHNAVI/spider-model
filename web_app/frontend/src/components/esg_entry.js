import React, { useState, useEffect } from 'react';
import './esg.css'
import { useNavigate } from 'react-router-dom';

const ESGPage = () => {
  const [dropdownValue, setDropdownValue] = useState('');
  const [textField, setTextField] = useState('');
  //const [responseField1, setResponseField1] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numberField, setNumberField] = useState('');
  //const [responseField2, setResponseField2] = useState('');
  //const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (formSubmitted) {
      const formData = new FormData();
      formData.append('type', dropdownValue);
      formData.append('initiative_name', textField);
      //formData.append('desired_change', responseField1);
      formData.append('start_date', startDate);
      formData.append('end_date', endDate);
      formData.append('budget', numberField);
      //formData.append('concerns', responseField2);
      //if (file) {
        //formData.append('file', file);
      //}

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
    const mcq1 = document.getElementById('mcq1');
    const mcq2 = document.getElementById('mcq2');
    const mcq3 = document.getElementById('mcq3');
    const mcq4 = document.getElementById('mcq4');
    if (
      dropdownValue &&
      textField &&
      //responseField1 &&
      startDate &&
      endDate &&
      numberField &&
      (!mcq1 || mcq1.value) &&
      (!mcq1 || mcq2.value) &&
      (!mcq3 || mcq3.value) &&
      (!mcq4 || mcq4.value)
      //responseField2
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
const renderMCQs = () => {
  if (dropdownValue === 'customer'){
    return (
      <>
      <div>
        <label>How well does the initiative address customer needs?
        </label>
        <select id="mcq1"required>
          <option value = "">Select an option</option>
          <option value = "1">The initiative is based on intuition, with no formal customer insights. (Initial - 1)
          </option>
          <option value = "2">Basic market research is conducted, but customer needs are not fully understood. (Repeatable - 2)

          </option>
          <option value = "3"> Structured processes for gathering and analyzing customer insights are established. (Defined - 3)
          </option>
          <option value = "4"> Advanced tools and techniques are used to predict and meet customer needs. (Managed - 4)
          </option>
          <option value = "5"> The company is highly proactive, with customers as co-creators in the innovation process. (Optimizing - 5)

          </option>

        </select>
      </div>
      <div>
        <label>
        How effectively is customer feedback integrated into the initiative?
        </label>
        <select id = "mcq2"required>
          <option value=""> Select an option</option>
          <option value = "1"> Customer feedback is not formally collected or used. (Initial - 1)
</option>
<option value = "2"> Feedback is collected but inconsistently applied. (Repeatable - 2)
</option>
<option value = "3"> Feedback drives the development of products/services. (Defined - 3)
</option>
<option value = "4"> Continuous feedback integration with advanced analytics tools. (Managed - 4)

</option>


<option value = "5">  Feedback is seamlessly integrated, with customers actively shaping the initiative. (Optimizing - 5)

</option>
        </select>
      </div>
      <div>
        <label>
        How does the initiative impact customer loyalty and brand reputation?

        </label>
        <select id ="mcq3"required>
          <option value=""> Select an option</option>
          <option value = "1"> No significant impact on customer loyalty or brand reputation. (Initial - 1)
</option>
<option value = "2">  Some positive impact, but not a key driver of loyalty or reputation. (Repeatable - 2)
</option>
<option value = "3">  Enhances customer loyalty and brand reputation. (Defined - 3)

</option>
<option value = "4">  Strongly boosts loyalty and positions the company as a market leader. (Managed - 4)


</option>


<option value = "5">  The initiative transforms the company’s market position, setting new industry standards. (Optimizing - 5)


</option>
        </select>
      </div>
      <div>
        <label>
        How proactive is the company in anticipating and shaping market trends?

        </label>
        <select id = "mcq4"required>
          <option value=""> Select an option</option>
          <option value = "1">  The company is reactive and follows existing trends. (Initial - 1)

</option>
<option value = "2"> The company makes basic efforts to anticipate trends. (Repeatable - 2)

</option>
<option value = "3"> The company actively shapes market trends based on customer insights. (Defined - 3)

</option>
<option value = "4">  The company is highly proactive in predicting and influencing trends. (Managed - 4)


</option>


<option value = "5">   The company leads in creating and defining new market trends, often ahead of competitors. (Optimizing - 5)
</option>
</select>
</div>

      </>
    );
  }else if (dropdownValue === 'economic'){
    return (
      <>
      <div>
        <label>How thorough is the economic analysis and forecasting for the initiative?
        </label>
        <select id = "mcq1"required>
          <option value="">Select an option</option>
          <option value = "1"> No consistent financial planning or analysis is conducted. (Initial - 1)
          </option>
          <option value = "2">Basic financial analysis is performed, but lacks depth. (Repeatable - 2)
          </option>
          <option value = "3"> Detailed financial planning and rigorous economic analysis are standard. (Defined - 3)
          </option>
          <option value = "4"> Comprehensive economic models with continuous monitoring are used. (Managed - 4)
          </option>
          <option value = "5"> Real-time financial insights are used to continuously adapt and optimize economic performance. (Optimizing - 5)
          </option>
        </select>
      </div>
      <div>
        <label>How well does the initiative align with the company’s long-term financial goals?

        </label>
        <select id ="mcq2"required>
          <option value="">Select an option</option>
          <option value = "1"> No alignment with long-term financial goals. (Initial - 1)

          </option>
          <option value = "2">Basic alignment with some consideration of long-term goals. (Repeatable - 2)

          </option>
          <option value = "3"> The initiative is closely aligned with long-term financial goals. (Defined - 3)

          </option>
          <option value = "4">The initiative is fully integrated into the company’s financial strategy. (Managed - 4)

          </option>
          <option value = "5">  The initiative optimizes financial performance, contributing to the company’s long-term leadership in the market. (Optimizing - 5)

          </option>
        </select>
      </div>
      <div>
        <label>How robust are the financial models and risk management practices supporting the initiative?
        </label>
        <select id="mcq3"required>
          <option value="">Select an option</option>
          <option value = "1"> Minimal or no financial modeling and risk management. (Initial - 1)

          </option>
          <option value = "2"> Basic financial models and risk management practices. (Repeatable - 2)
          </option>
          <option value = "3"> Advanced financial models with strong risk management. (Defined - 3)

          </option>
          <option value = "4"> Cutting-edge financial models and proactive risk management. (Managed - 4)


          </option>
          <option value = "5">  Financial models and risk management practices are industry-leading, with continuous innovation. (Optimizing - 5)

          </option>
        </select>
      </div>
      <div>
        <label>Does the initiative represent an innovative economic model?
        </label>
        <select id="mcq4"required>
          <option value="">Select an option</option>
          <option value = "1"> No innovation in the economic model. (Initial - 1)
          (Initial - 1)
          </option>
          <option value = "2">Some innovation, but not a key feature. (Repeatable - 2)

          </option>
          <option value = "3"> The initiative uses innovative economic models with clear benefits. (Defined - 3)

          </option>
          <option value = "4"> The initiative is considered a leading example of innovative economic models in the industry. (Managed - 4)

          </option>
          <option value = "5">  The initiative sets new standards for innovative economic models, influencing the broader market. (Optimizing - 5)

          </option>
        </select>
      </div>
      </>
    );
  }
  
  else if (dropdownValue === 'operational'){
    return (
      <>
      <div>
        <label>Are standardized processes and advanced technologies supporting the initiative?
        </label>
        <select id="mcq1"required>
          <option value="">Select an option</option>
          <option value = "1"> No standardized processes or advanced technologies are used. (Initial - 1)

          </option>
          <option value = "2"> Basic processes and limited technology support are in place. (Repeatable - 2)

          </option>
          <option value = "3">  Well-documented processes with advanced technology are in use. (Defined - 3)

          </option>
          <option value = "4"> High automation and cutting-edge technologies are fully integrated. (Managed - 4)

          </option>
          <option value = "5"> The company continuously adopts and innovates with cutting-edge technologies, setting industry standards. (Optimizing - 5)

          </option>
        </select>
      </div>
      <div>
        <label>How effectively does the company manage and execute the initiative?


        </label>
        <select id="mcq2"required>
          <option value="">Select an option</option>
          <option value = "1"> The initiative is managed reactively with minimal planning. (Initial - 1)

          </option>
          <option value = "2">Basic project management practices are used. (Repeatable - 2)


          </option>
          <option value = "3"> The initiative is managed with advanced project management practices. (Defined - 3)


          </option>
          <option value = "4">The initiative is executed with continuous process improvement. (Managed - 4)


          </option>
          <option value = "5">  The company excels in execution, with processes that are continuously optimized for efficiency and effectiveness. (Optimizing - 5)


          </option>
        </select>
      </div>
      <div>
        <label>Is there continuous improvement and innovation in the operational and technical aspects of the initiative?
        </label>
        <select id="mcq3"required>
          <option value="">Select an option</option>
          <option value = "1"> No continuous improvement or innovation efforts. (Initial - 1)


          </option>
          <option value = "2"> Initial steps towards continuous improvement are in place. (Repeatable - 2)

          </option>
          <option value = "3"> Continuous improvement practices are integrated into operations. (Defined - 3)


          </option>
          <option value = "4"> The company leads in operational and technical innovation. (Managed - 4)



          </option>
          <option value = "5"> The company continuously sets new benchmarks in operational and technical innovation. (Optimizing - 5)


          </option>
        </select>
      </div>
      <div>
        <label>How adaptive and resilient are the company’s operations in implementing the initiative?
        </label>
        <select id="mcq4"required>
          <option value="">Select an option</option>
          <option value = "1">Operations are not adaptive or resilient. (Initial - 1)

          
          </option>
          <option value = "2">Basic adaptability and resilience are in place. (Repeatable - 2)


          </option>
          <option value = "3">Operations are adaptive with advanced resilience strategies. (Defined - 3)


          </option>
          <option value = "4"> Operations are highly adaptive and resilient, able to respond effectively to changes. (Managed - 4)

          </option>
          <option value = "5">  Operations are continuously optimized for maximum adaptability and resilience, setting industry standards. (Optimizing - 5)


          </option>
        </select>
      </div>
      </>
    );
  }
  else if (dropdownValue === 'social'){
    return (
      <>
      <div>
        <label>Does the initiative have a defined and measurable social impact?

        </label>
        <select id="mcq1"required>
          <option value="">Select an option</option>
          <option value = "1">  Social impact is not considered or measured. (Initial - 1)

          </option>
          <option value = "2"> Initial efforts to define and measure social impact are made. (Repeatable - 2)

          </option>
          <option value = "3"> Social impact goals are defined and regularly evaluated. (Defined - 3)

          </option>
          <option value = "4"> The initiative leads in social impact measurement and maximization. (Managed - 4)

          </option>
          <option value = "5">The initiative sets new benchmarks for social impact, influencing industry practices. (Optimizing - 5)
          </option>
        </select>
      </div>
      <div>
        <label>How well is social impact integrated into the business strategy?


        </label>
        <select id="mcq2"required>
          <option value="">Select an option</option>
          <option value = "1">  Social impact is not part of the business strategy. (Initial - 1)


          </option>
          <option value = "2">Social impact is considered but not fully integrated. (Repeatable - 2)


          </option>
          <option value = "3"> Social impact is integrated into the company’s business strategy. (Defined - 3)


          </option>
          <option value = "4">Social impact is a core component of the company’s strategy. (Managed - 4)


          </option>
          <option value = "5">  The company leads in social innovation, with social impact fully embedded in all aspects of the business. (Optimizing - 5)


          </option>
        </select>
      </div>
      <div>
        <label>Does the initiative lead to significant positive changes in the community or society?

        </label>
        <select id="mcq3"required>
          <option value="">Select an option</option>
          <option value = "1"> No significant positive impact on the community or society. (Initial - 1)


          </option>
          <option value = "2"> Some positive impact, but limited in scope. (Repeatable - 2)
          </option>
          <option value = "3">The initiative leads to significant positive social changes. (Defined - 3)


          </option>
          <option value = "4"> The initiative sets industry benchmarks for social impact. (Managed - 4)



          </option>
          <option value = "5">  The initiative leads transformational social change and influences global practices. (Optimizing - 5)


          </option>
        </select>
      </div>
      <div>
        <label>Is the company leading in social innovation and setting industry standards?

        </label>
        <select id="mcq4"required>
          <option value="">Select an option</option>
          <option value = "1"> The company is not a leader in social innovation. (Initial - 1)

          (Initial - 1)
          </option>
          <option value = "2"> The company follows existing social innovation practices. (Repeatable - 2)


          </option>
          <option value = "3">  The company is recognized for social innovation. (Defined - 3)


          </option>
          <option value = "4"> The company is a leader in social innovation and influences industry standards. (Managed - 4)


          </option>
          <option value = "5">  The company is a global leader in social innovation, continuously setting new industry standards. (Optimizing - 5)


          </option>
        </select>
      </div>
      </>
    );
  }
  else if (dropdownValue === 'environmental'){
    return (
      <>
      <div>
        <label>How significant is the initiative’s contribution to environmental sustainability?


        </label>
        <select id="mcq1"required>
          <option value="">Select an option</option>
          <option value = "1"> No significant contribution to environmental sustainability. (Initial - 1)


          </option>
          <option value = "2"> Basic contributions to environmental sustainability. (Repeatable - 2)


          </option>
          <option value = "3"> Significant contributions with clear sustainability goals. (Defined - 3)


          </option>
          <option value = "4"> The initiative sets benchmarks for environmental sustainability. (Managed - 4)


          </option>
          <option value = "5">The initiative leads global efforts in environmental sustainability, setting new industry standards. (Optimizing - 5)

          </option>
        </select>
      </div>
      <div>
        <label>Are there clear sustainability goals, and how are they pursued and measured?



        </label>
        <select id="mcq2"required>
          <option value="">Select an option</option>
          <option value = "1">   No clear sustainability goals. (Initial - 1)



          </option>
          <option value = "2"> Basic sustainability goals are in place, with minimal measurement. (Repeatable - 2)


          </option>
          <option value = "3"> Clear sustainability goals are actively pursued and measured. (Defined - 3)


          </option>
          <option value = "4">Sustainability goals are industry-leading, with continuous innovation. (Managed - 4)


          </option>
          <option value = "5">  The company continuously sets new benchmarks in sustainability, influencing global practices. (Optimizing - 5)



          </option>
        </select>
      </div>
      <div>
        <label>Does the company continuously improve and innovate in reducing its environmental footprint?


        </label>
        <select id="mcq3"required>
          <option value="">Select an option</option>
          <option value = "1"> No efforts to reduce environmental footprint. (Initial - 1)



          </option>
          <option value = "2"> Initial steps are taken to reduce environmental impact. (Repeatable - 2)

          </option>
          <option value = "3">Continuous improvement practices are in place to reduce the footprint. (Defined - 3)



          </option>
          <option value = "4"> The company leads in innovation for reducing environmental impact. (Managed - 4)




          </option>
          <option value = "5"> The company continuously sets new global standards in environmental innovation and sustainability. (Optimizing - 5)



          </option>
        </select>
      </div>
      <div>
        <label>Is the company setting benchmarks and leading initiatives in global environmental stewardship?

        </label>
        <select id="mcq4"required>
          <option value="">Select an option</option>
          <option value = "1"> The company does not set benchmarks for environmental stewardship. (Initial - 1)

          </option>
          <option value = "2"> The company follows existing environmental practices. (Repeatable - 2)



          </option>
          <option value = "3">  The company sets benchmarks within its industry for environmental practices. (Defined - 3)



          </option>
          <option value = "4"> The company leads global initiatives in environmental stewardship. (Managed - 4)



          </option>
          <option value = "5">  The company is recognized as a global leader in environmental stewardship, continuously setting new standards. (Optimizing - 5)



          </option>
        </select>
      </div>
      </>
    );
  }
}
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
          <option value="customer">Customer Desirability</option>
          <option value="economic">Economic viablity</option>
          <option value="operational">Operational/Technical viablity</option>
          <option value="social">Social Impact</option>
          <option value="environmental">Environmental Impact</option>
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

      

      
      {renderMCQs()}
      <button type="submit" onClick={handleNextLink}>Next</button>
      <button type="button" onClick={handleBackLink}>Go Back</button>
    </form>
    </div>    </>
  );
};
export default ESGPage;
