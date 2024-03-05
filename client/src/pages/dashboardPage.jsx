import dbFetch from '../api/dbFetch.js'
import Aside from '../components/Aside.jsx';
import Navbar from "../components/Navbar.jsx";
import Barchart from '../components/Barchart.jsx'
import Graphbox from "../components/Graphbox.jsx";

export default function DashboardPage() {

    document.title = "Dashboard MERN"

    return (
        <div className="font-bold w-full h-full flex flex-row">
            <Aside  />

            <div className="flex flex-col [&>*]:border-2 [&>*]:border-teal-700 [&>*]:rounded-md">
                <div className="gap-x-4 gap-y-2 mx-2 my-4 ">
                    <Navbar />
                </div>
                <Graphbox>
                    <Barchart x_axis="relevance" y_axis="likelihood"/>
                </Graphbox> 
                
            </div>
            
        </div>
    )
}