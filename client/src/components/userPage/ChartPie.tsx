import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import { useQuery } from 'react-query';
import { getMatchesResults } from '@/utils/profile/fetchingProfileData'

export default function ChartPie({userId}: {userId: string}) {

    console.log(`ChartLine userId: ${userId}`);
    
	const { 
        data: chartData,
        error,
        isLoading
    } = useQuery("matchesresults", () => getMatchesResults(userId));


    if(isLoading){
        return(
            <h2>Matches Results loading ....</h2>
            );
        }
    if(error){
        return(
            <h2>Opps Matches Resultss error</h2>
        );
    }

    
    console.log(`before------Matches Results-----------:`);console.log(chartData);console.log(`:-----------------------after`);


    

    const {wins = 0, loses = 0, draws = 0} = chartData || {};
    const status: number[] = [loses, wins, draws];

    const data = {
      labels: ['Loses','Wins', 'Draws'],
      datasets: [
        {
          label: '# matches',
          data: status,
          backgroundColor: [
            '#E57070',
            '#60BA64',
            '#7D7D7D',
          ],
        },
      ],
    };

const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        autoPadding: true,
        padding: 10,
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
        rtl: true,
        labels: {
            boxWidth: 15,
            color: 'black',
            font: {
                family: '__Geo_c14c5e',
            }
        },
      },
      outlabels: {
        text: '%l %p',
        color: 'white',
        stretch: 35,
        font: {
          resizable: false,
          minSize: 12,
          maxSize: 18,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}
