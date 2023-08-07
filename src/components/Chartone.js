import React, { useEffect } from 'react';
import '../pages/combined.css';
import Chart from 'chart.js/auto';

export default function Chartone() {
  useEffect(() => {
    const middleChart = document.getElementById('myChart');

    const chart = new Chart(middleChart, {
      type: 'line',
      data: {
        labels: ['0', '100', '80', '150', '125', '200', '120', '90', '150'],
        datasets: [{
          backgroundColor: "rgba(111, 79, 242, 0.3)",
          borderColor: 'blue',
          data: [0, 100, 80, 150, 125, 200, 120, 90, 150],
          borderWidth: 3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: false
          },
          y: {
            max: 350,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    
    return () => {
      // Clean up when the component unmounts
      chart.destroy();
    };
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="sec3-middle-content">
      <canvas id="myChart" />
    </div>
  );
};