import AsideButton from "./AsideButton"

export default function Aside() {
    return (
        <section className="relative w-1/4 h-screen bg-slate-800 border-r-[1px] border-slate-700 overflow-y-auto overflow-x-hidden custom-scroll">
            <div className="sticky top-0 z-10 w-full bg-slate-800 text-start text-2xl flex flex-row items-center p-1 [&>h1]:text-green-400 py-2 px-4 mb-1">
                <svg className="size-8 icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" /></svg>
                <h1>MERN</h1><h2>Board</h2>
            </div>
            
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
            <AsideButton />
        </section>
    )
}