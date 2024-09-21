import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ESGSpiderChart.css';

const ESGSpiderChart = () => {
    const [initiative, setInitiative] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-esg');
                console.log(response.data);
                setInitiative(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Function to get labels and data based on the initiative type
    const getLabelsAndData = () => {
        if (!initiative) return { labels: [], data: [] }; 

        // Define labels and data based on initiative type
        switch (initiative.type) {
            case 'Customer Desirability':
                return {
                    labels: [
                        'Customer Needs', 
                        'Feedback Integration', 
                        'Customer Loyalty', 
                        'Market Trends'
                    ],
                    data: [
                        initiative.mcq1, 
                        initiative.mcq2, 
                        initiative.mcq3, 
                        initiative.mcq4
                    ]
                };

            case 'Economic Viability':
                return {
                    labels: [
                        'Economic Analysis', 
                        'Alignment with Long-term Goals', 
                        'Financial Models', 
                        'Innovation in Economic Models'
                    ],
                    data: [
                        initiative.mcq1, 
                        initiative.mcq2, 
                        initiative.mcq3, 
                        initiative.mcq4
                    ]
                };

            case 'Operational Viability':
                return {
                    labels: [
                        'Processes & Technology', 
                        'Execution', 
                        'Continuous Improvement', 
                        'Adaptability & Resilience'
                    ],
                    data: [
                        initiative.mcq1, 
                        initiative.mcq2, 
                        initiative.mcq3, 
                        initiative.mcq4
                    ]
                };

            case 'Social Impact':
                return {
                    labels: [
                        'Measurable Social Impact', 
                        'Integration into Strategy', 
                        'Positive Community Impact', 
                        'Leadership in Social Innovation'
                    ],
                    data: [
                        initiative.mcq1, 
                        initiative.mcq2, 
                        initiative.mcq3, 
                        initiative.mcq4
                    ]
                };

            case 'Environmental Impact':
                return {
                    labels: [
                        'Environmental Contribution', 
                        'Sustainability Goals', 
                        'Reducing Environmental Footprint', 
                        'Global Environmental Stewardship'
                    ],
                    data: [
                        initiative.mcq1, 
                        initiative.mcq2, 
                        initiative.mcq3, 
                        initiative.mcq4
                    ]
                };

            default:
                return { labels: [], data: [] };
        }
    };
    // Function to calculate the duration in months
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            console.error('Invalid date format:', { startDate, endDate });
            return null; // or return 0 to indicate no duration
        }
        const durationInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return durationInMonths;
    };
    // Use the getLabelsAndData to create chart data
    const createChartData = () => {
        const { labels, data } = getLabelsAndData();

        return {
            labels,
            datasets: [
                {
                    label: initiative.initiative_name,
                    data: data,
                    backgroundColor: 'rgba(0, 255, 0, 0.2)', 
                    borderColor: 'rgba(0, 0, 0, 1)', 
                    pointBackgroundColor: 'rgba(0, 0, 0, 1)', 
                    pointBorderColor: '#fff', 
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 0, 0, 1)', 
                    borderDash: [5, 5], 
                    borderWidth: 3
                    
                }
            ]
        };
    };

    const chartOptions = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: 'blue'
                },
                suggestedMin: 0,
                suggestedMax: 5, 
                ticks: {
                    stepSize: 1 
                }
            }
        }
    };

    return (
        <div className="chart-container">
            {initiative ? (
                <div key={initiative.id}>
                    <h3>{initiative.initiative_name} - {initiative.initiative_type}</h3>
                    <Radar data={createChartData()} options={chartOptions} />
                    {/* High-level summary of results */}
                    <div className='results-summary'>
    <h4>High-Level Summary of Results</h4>
    <p><strong>Initiative Name:</strong> {initiative.initiative_name}</p>
    <p><strong>Type:</strong> {initiative.type}</p>
    <p><strong>Duration:</strong> {calculateDuration(initiative.start_date, initiative.end_date)} months (from {initiative.start_date} to {initiative.end_date})</p>
    <p><strong>Budget:</strong> ${initiative.budget}</p>
    <p><strong>Key Scores:</strong></p>
    <ul>
        {getLabelsAndData().labels.map((label, index) => (
            <li key={index}>{label}: {getLabelsAndData().data[index]}/5</li>
        ))}
    </ul>
</div>
                </div>
            ) : (
                <p>No initiatives available.</p>
            )}
        </div>
    );
};

export default ESGSpiderChart;
