import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Charttwo() {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const chartData = {
        labels: ['First Half', 'Second Half'],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ['#6F4FF2', 'rgba(111, 79, 242, 0.3)'],
          }
        ]
      };
  
      const chartOptions = {
        responsive: true,
        cutout: "80%",
        elements: {
          arc: {
            borderWidth: 2,
            borderColor: '#fff'
          }
        },
        tooltips: {
          enabled: false
        },
        plugins: {
          legend: {
            display: false
          }
        }
      };
  
      if (chartRef.current) {
        const myChart = new Chart(chartRef.current, {
          type: 'doughnut',
          data: chartData,
          options: chartOptions
        });
  
        // Cleanup the chart on component unmount
        return () => myChart.destroy();
      }
    }, []);
  
    return (

    <canvas id="myChart1" ref={chartRef} />
    
    );
  };
