import Github from "./icons/Github";

export default function SourceButton()
{
    return (
        <a href="https://github.com/Fairebol/mernboard" className="" target="_blank">
            <section className="fixed bottom-2 right-2">
                <div className="bg-black rounded-md transform hover:scale-125 duration-300 p-1">
                    <Github />
                </div>
            </section>

        </a>
    )
}