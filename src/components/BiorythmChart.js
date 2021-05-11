import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    ReferenceLine,
    CartesianGrid
    
} from 'recharts'
import {calculateBiorhythmsSeries} from '../calculation'
import dayjs from 'dayjs'

const formatDate =(isoString)=>{
   return dayjs(isoString).format('D MMM')
}
const BiorythmChart = ({dob,targetDate}) => {
    const startDate = dayjs(targetDate).subtract(15,'days').toISOString()

   const data = calculateBiorhythmsSeries(dob,startDate,31)
        .map((item)=>({...item,date:formatDate(item.date)}))
   
        
    return (
       
        <ResponsiveContainer width="100%" height={200}>
          
         
            <LineChart data={data}>
                <XAxis />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={parseInt(data.length/2)} />
                  <Line  type="natural" dataKey="emotional"  dot={false} stroke="green"/>
                  <Line type="natural" dataKey="physical" dot={false} stroke="red"/>
                  <Line type="natural" dataKey="intellectual" dot={false} stroke="blue"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default BiorythmChart;