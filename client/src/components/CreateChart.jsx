import { useEffect, useRef, useState } from 'react';
import dbFetch from '../api/dbFetch'
import Chart from 'chart.js/auto';

export default function CreateChart({ datashown,
  canvasid, 
  typechart, 
  labels, 
  bgColor,
  borderColor,
  display,
  tension,
  x_axis,
  y_axis,
  title}) 
{
  Chart.defaults.fontColor = 'white'

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {   
      const data = await dbFetch(datashown);

      const reducedData = data.reduce((acc, curr) => {
        const existingItem = acc.find(item => item[x_axis] === curr[x_axis]);
        if (existingItem) 
        {  
          existingItem[y_axis] += curr[y_axis];
        } 
        
        else 
        {
          acc.push(curr);
        }
        return acc
      }, [])

      const chartdata = {
        type: typechart,
        data: {
          labels: reducedData.filter(item => item[x_axis] !== "")
                  .map(data => data[x_axis]),
          datasets: [{
            label: labels,
            fill: true,
            borderWidth: 1,
            borderColor: borderColor,
            data: reducedData.filter(item => item[y_axis] !== "")
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
            title:{
              display: title ? true : false,
              text: title,
              color: 'white'
            },
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