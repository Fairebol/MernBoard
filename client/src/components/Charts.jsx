import Chart from './CreateChart'
import Graphbox from './Graphbox'

export default function Charts()
{
    return (
        <div className='flex flex-wrap mt-2 justify-around place-items-stretch [&>*]:border-[1px] [&>*]:border-gray-600 [&>*]:rounded-md'>
            <Graphbox>
                <Chart 
                datashown={10} 
                canvasid="radar" 
                labels='likelihood' 
                typechart='radar'
                bgColor={['rgba(255, 60, 120, 0.7)', 'green', 'blue']}
                borderColor='lightgray'
                x_axis='source'
                y_axis='likelihood'
                tension={1}
                title='radar chart fetching 10 documents'/>
            </Graphbox> 
            <Graphbox>
                <Chart 
                datashown={100} 
                canvasid="Donut"
                typechart='pie'
                labels='Source'
                bgColor={['rgba(255, 99, 132, 0.8)', 'rgba(60, 255, 132, 0.8)', 'rgba(120, 99, 255, 0.8)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='source'
                y_axis='likelihood'
                display={false}
                title='Piechart Fetching 100 documents'/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={30} 
                canvasid="bars"
                typechart='bar'
                labels='Relevance per Country'
                bgColor={['rgba(255, 99, 132, 0.8)', 'rgba(60, 255, 132, 0.8)', 'rgba(120, 99, 255, 0.8)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='country'
                y_axis='relevance'
                display={true}
                title='Barchart Fetching 30 documents'/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={150} 
                canvasid="piechart"
                typechart='line'
                labels='likelihood per region'
                bgColor={['rgba(255, 99, 132, 0.8)', 'rgba(60, 255, 132, 0.8)', 'rgba(120, 99, 255, 0.8)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='region'
                y_axis='likelihood'
                tension={0.8}
                display={true}
                title='Line chart Fetching 150 documents'/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={20} 
                canvasid="barchart2"
                typechart='bar'
                labels='Intensity per PEST'
                bgColor={['rgba(255, 99, 132, 0.8)', 'rgba(60, 255, 132, 0.8)', 'rgba(120, 99, 255, 0.8)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='pestle'
                y_axis='intensity'
                display={true}
                title='Barchart Fetching 20 documents'/>
            </Graphbox> 
            <Graphbox>
                <Chart 
                datashown={1500} 
                canvasid="barchart3"
                typechart='doughnut'
                labels='Relevance per Topic'
                bgColor={['rgba(255, 99, 132, 0.8)', 'rgba(60, 255, 132, 0.8)', 'rgba(120, 99, 255, 0.8)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='topic'
                y_axis='relevance'
                display={false}
                title='Donut Chart Fetching all Database'/>
            </Graphbox> 
        </div>
                
            
    )
}