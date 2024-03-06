import { useEffect, useRef, useState } from 'react';
import dbFetch from '../api/dbFetch'
import Chart from 'chart.js/auto';

export default function Barchart({ datashown,
   canvasid = "canvas", 
   typechart, 
   labels, 
   bgColor,
  borderColor}) 
{
  Chart.defaults.fontColor = 'white'

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {   
      const data = await dbFetch(datashown);

      const chartdata = {
        type: typechart,
        data: {
          labels: data.map(e => e.source),
          datasets: [{
            label: labels,
            fill: true,
            borderWidth: 1,
            borderColor: borderColor,
            data: data.map(e => e.likelihood), // Aquí necesitas proporcionar un array de datos
            backgroundColor: bgColor
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            },
            x: {
              ticks: {
                stepSize: 1,
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'Lightgray', 
                    font: {
                        weight: 'bold'  
                    }
              }
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
    <canvas className='w-12 h-12 max-w-md' id={canvasid}></canvas>
  );
}