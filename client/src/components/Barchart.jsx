import { useEffect, useRef, useState } from 'react';
import dbFetch from '../api/dbFetch'
import Chart from 'chart.js/auto';

export default function Barchart({ datashown,
   canvasid = "canvas", 
   typechart, 
   labels, 
   bgColor,
  borderColor,
  display,
  tension,
  x_axis,
  y_axis}) 
{
  Chart.defaults.fontColor = 'white'

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {   
      const data = await dbFetch(datashown);

      const chartdata = {
        type: typechart,
        data: {
          labels: data.filter(item => item[x_axis] !== "")
                  .map(data => data[x_axis]),
          datasets: [{
            label: labels,
            fill: true,
            borderWidth: 1,
            borderColor: borderColor,
            data: data.filter(item => item[y_axis] !== "")
                  .map(data => data[y_axis]), 
            backgroundColor: bgColor,
            tension: tension
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              },
              display: false
            },
            x: {
              ticks: {
                stepSize: 1,
              },
              display: false
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'Lightgray', 
                font: {
                    weight: 'bold'  
                },
                position: 'right'
              },
              display: display
            }
          }
        }
      };

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById(canvasid).getContext("2d");
      chartRef.current = new Chart(ctx, chartdata);
    };

    fetchData();
  }, [canvasid, typechart, labels, bgColor]);

  return (
    <canvas 
    className='max-w-64 max-h-64' 
    id={canvasid}></canvas>
  );
}