export default function AsideButton({component: Component}) {
    return(
        <div className="w-full flex transform hover:scale-105 duration-150 px-2 my-1">
            <a href="/" className="w-full px-2 text-center rounded-lg bg-transparent focus:bg-sky-800 hover:bg-white hover:bg-opacity-10 text-md items-center py-2"> 
                <svg 
                className="size-6 absolute top-2 icon icon-tabler icon-tabler-dots-circle-horizontal" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M8 12l0 .01" />
                    <path d="M12 12l0 .01" />
                    <path d="M16 12l0 .01" />
                </svg>
                Lorem
            </a>
        </div>
    )
}