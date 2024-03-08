import Chart from './Barchart'
import Graphbox from './Graphbox'

export default function Charts()
{
    return (
        <div className='flex flex-wrap justify-around items-start [&>*]:border-[1px] [&>*]:border-gray-600 [&>*]:rounded-md'>
            <Graphbox>
                <Chart 
                datashown={20} 
                canvasid="radar" 
                labels='likelihood' 
                typechart='radar'
                bgColor={['rgba(255, 60, 120, 0.5)', 'green', 'blue']}
                borderColor='lightgray'
                x_axis='source'
                y_axis='likelihood'/>
            </Graphbox> 
            <Graphbox>
                <Chart 
                datashown={10} 
                canvasid="Donut"
                typechart='polarArea'
                labels='Source'
                bgColor={['rgba(255, 99, 132, 0.5)', 'rgba(60, 255, 132, 0.5)', 'rgba(120, 99, 255, 0.5)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='source'
                y_axis='likelihood'
                display={false}/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={30} 
                canvasid="bars"
                typechart='bar'
                labels='Relevance per Country'
                bgColor={['rgba(255, 99, 132, 0.5)', 'rgba(60, 255, 132, 0.5)', 'rgba(120, 99, 255, 0.5)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='country'
                y_axis='relevance'
                display={true}/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={50} 
                canvasid="piechart"
                typechart='line'
                labels='likelihood per region'
                bgColor={['rgba(255, 99, 132, 0.5)', 'rgba(60, 255, 132, 0.5)', 'rgba(120, 99, 255, 0.5)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='region'
                y_axis='likelihood'
                tension={0.5}
                display={true}/>
            </Graphbox>
            <Graphbox>
                <Chart 
                datashown={20} 
                canvasid="barchart2"
                typechart='bar'
                labels='Intensity per PEST'
                bgColor={['rgba(255, 99, 132, 0.5)', 'rgba(60, 255, 132, 0.5)', 'rgba(120, 99, 255, 0.5)']}
                borderColor='rgba(255, 99, 132, 0.9)'
                x_axis='pestle'
                y_axis='intensity'
                display={true}/>
            </Graphbox> 
        </div>
                
            
    )
}