import { useState, useEffect } from "react"
import PointFilled from "./icons/PointFilled";
import dbFetch from "../api/dbFetch";

export default function Analytics({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intensityAverage, setIntensityAverage] = useState(null);
    const [relevanceAverage, setRelevanceAverage] = useState(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, [images]);
  
    const selectImage = (index) => {
      setCurrentImageIndex(index);
    };

    useEffect(() => {
        const fetchData = async () => {   
          const data = await dbFetch();
    
            const relevanceSum = data.reduce((total, item) => total + item.relevance, 0);
            const newRelevanceAverage = relevanceSum / data.length;
    
            const intensitySum = data.reduce((total, item) => total + item.intensity, 0);
            const newIntensityAverage = intensitySum / data.length;
            
            setRelevanceAverage(newRelevanceAverage)
            setIntensityAverage(newIntensityAverage);          
        }
    
        fetchData()
    });
  
    return (
      <div className="relative bg-sky-700 w-full max-w-sm h-fit rounded-lg p-2 ">
        <h2 className="font-extrabold text-gray-100">Analytics</h2>
        <div>
          {images.map((image, index) => (
            <button
              className={`static right-0 top-2 ${currentImageIndex === index ? 'opacity-100' : 'opacity-50'}`}
              key={index}
              onClick={() => selectImage(index)}>

              <PointFilled />
            </button>
          ))}
        </div>

        <div className="p-2 bg-slate-950 bg-opacity-10 w-fit rounded-lg flex flex-col ">
            <div>
                <span>Intensity Avg:</span>
                <section>{intensityAverage}</section>
            </div>
            <div>
                <span>Relevance Avg: </span>
                <section>
                    {relevanceAverage}
                </section>
            </div>
        </div>

        <img className="flex w-36 absolute right-1 top-3" src={images[currentImageIndex]} alt="" />
      </div>
    );
  }
