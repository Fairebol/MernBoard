import { useState } from "react";
import HomeIcon from "./icons/Home";
import CircleIcon from "./icons/Circledatted";
import ArrowIcon from "./icons/Arrow";


export default function Dropdown({options})
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <section className="w-full flex transform hover:scale-105 duration-150 px-2 my-1  ">
                <button className="w-full px-2 text-center rounded-lg bg-transparent focus:bg-sky-800 hover:bg-white hover:bg-opacity-10 text-md items-center py-2 " onClick={() => setIsOpen(!isOpen)}>
                    <HomeIcon />
                    <span className="text-center">
                        Dashboards
                    </span>
                    <ArrowIcon />
                </button>
            </section>

            {isOpen && (
                <div className="left-0 mt-2 w-full rounded-md shadow-lg">
                    {options.map((option, index) => {
                        return (
                        <section key={index} className="w-full flex transform hover:scale-105 duration-150 px-2 my-1 relative">
                            <CircleIcon />
                            <a className="w-full px-2 text-center rounded-lg bg-transparent focus:bg-sky-800 hover:bg-white hover:bg-opacity-10 text-md items-center py-2" key={index} href="/">{option}</a>
                        </section>
                        )
                    })}
                </div>
            )}
        </div>
    );
    }