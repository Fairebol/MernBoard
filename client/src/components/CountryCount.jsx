import useTopCountries from "./getTopCountries";

export default function CountryCount() {
    const [topCountries, isLoading] = useTopCountries()
    
    return (
    
        <section className="border-[1px] border-gray-600 rounded-md max-w-[15rem] p-1 text-center mx-4 w-full">
            <h1 className="m-1"> Top Countries</h1>
            {isLoading ? (  
                <div className="w-full bg-sky-700 rounded-md p-1 font-bold h-[10rem]">
                    <div className="absolute bg-slate-600 opacity-50 rounded-lg p-[0.10rem]">
                        Counter
                    </div>
                    Country...
                </div>
            ) : ( 
                topCountries.map(([country, count]) => {
                    if (country === "United States of America") country = "EEUU";
                    return (
                        <div key={country} className="w-full  bg-sky-600 rounded-md p-1 font-semibold">
                            <div className="absolute bg-sky-500 bg-opacity-50 rounded-lg p-[0.10rem] px-4">
                                <span >
                                    {count}
                                </span>  
                            </div>
                            {country}
                        </div>
                    )
                })
            )}
        </section>
    
    )

}