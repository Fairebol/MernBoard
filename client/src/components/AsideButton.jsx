import MoreIcon from "./icons/More";

export default function AsideButton({title}) {
    return(
        <div className="w-full flex transform hover:scale-105 duration-150 px-2 my-1">
            <a href="/" className="w-full px-2 text-center rounded-lg bg-transparent focus:bg-sky-800 hover:bg-white hover:bg-opacity-10 text-md items-center py-2"> 
                <MoreIcon />
                
                {title}
            </a>
        </div>
    )
}