import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto';

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

    const createChartData = () => {
        if (!initiative) return {}; // return empty object if no initiative

        return {
            labels: ['Customer Needs', 'Feedback Integration', 'Customer Loyalty', 'Market Trends'],
            datasets: [
                {
                    label: initiative.initiative_name,
                    data: [initiative.mcq1, initiative.mcq2, initiative.mcq3, initiative.mcq4],
                    backgroundColor: 'rgba(34, 202, 236, 0.2)',
                    borderColor: 'rgba(34, 202, 236, 1)',
                    borderWidth: 2
                }
            ]
        };
    };

    return (
        <div>
            {initiative ? (
                <div key={initiative.id}>
                    <h3>{initiative.initiative_name}</h3>
                    <Radar data={createChartData()} />
                </div>
            ) : (
                <p>No initiatives available.</p>
            )}
        </div>
    );
};

export default ESGSpiderChart;
