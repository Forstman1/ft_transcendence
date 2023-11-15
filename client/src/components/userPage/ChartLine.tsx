
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

import { useQuery } from 'react-query';
import { getChartLineData } from '@/utils/profile/fetchingProfileData'


export default function ChartLine({userId}: {userId: string}) {

    console.log(`ChartLine userId: ${userId}`);
    
	const { 
        data: chartData,
        error,
        isLoading
    } = useQuery("activitieshistory", () => getChartLineData(userId));


if(isLoading){
    return(
        <h2>User activities loading ....</h2>
        );
    }
if(error){
    return(
        <h2>Opps User activities error</h2>
    );
}

console.log(`before------User activities-----------:`);console.log(chartData);console.log(`:-----------------------after`);


    

    const options = {
    responsive: true,
    maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Activities in the last 7 months',
            },
        },
    };
    
    const labels = chartData.labels;
    
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: chartData.values,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

  return <Line options={options} data={data} />;
}
