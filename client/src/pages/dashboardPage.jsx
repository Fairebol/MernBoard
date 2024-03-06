import Aside from '../components/Aside'
import Navbar from '../components/Navbar'
import Chart from '../components/Barchart'
import Graphbox from '../components/Graphbox'

export default function DashboardPage() {

    document.title = "Dashboard MERN"

    return (
        <div className="font-bold w-full h-full flex flex-row">
            <Aside  />

            <div className="flex flex-col w-full ">
                <div className="gap-x-4 gap-y-2 mx-2 my-4 [&>*]:border-2 [&>*]:border-teal-700 [&>*]:rounded-md">
                    <Navbar />
                </div>
                
                <div className='grid grid-flow-row [&>*]:border-2 [&>*]:border-teal-700 [&>*]:rounded-md'>
                <Graphbox>
                    <Chart 
                    datashown={10} 
                    canvasid="barchart" 
                    labels='likelihood' 
                    typechart='radar'
                    bgColor={['rgba(255, 99, 132, 0.2)', 'green', 'blue']}
                    borderColor='rgba(255, 99, 132, 0.9)'/>
                </Graphbox> 
                <Graphbox>
                    <Chart 
                    datashown={10} 
                    canvasid="Donut"
                    typechart='bar'
                    labels='Source'
                    bgColor={['red', 'green', 'blue']}/>
                </Graphbox> 
                </div>
                
            </div>
            
        </div>
        
    )
}