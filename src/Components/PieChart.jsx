
import React from 'react'
import '../Styles/chart.css'
import approvedTransparent from '../assets/approved-transparent.svg';
import RightArrow from '../assets/Right-arrow.svg'
import { Link } from 'react-router-dom';
import { Chart as ChartJs,ArcElement,Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);
const PieChart = ({ color, Anlytper,modeRange }) => {
  const defaultColor = ['#249c56', 'white'];
  const score = '720';
  const data = {
    label:[],
    datasets: [{
      label: 'credit score',
      data: [0 - 719, 720 - 1000],
      backgroundColor: color || defaultColor,
      borderColor: ['white', 'white'],
      borderWidth:4
    
    }]
  }
  const options = {

  }
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx} = chart;
       const xCoor=  (chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
       const yCoor = (chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y); 
      // const yCoor =chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = ' bolder 30px sans-serif';
      ctx.fillStyle = 'green';
      ctx.textAlign='center'
      ctx.textBaseLine= 'middle'
      ctx.fillText(Anlytper || score, xCoor, yCoor - 10);
  
  
      ctx.font = ' bolder 15px sans-serif';
      ctx.fillStyle = 'grey';
      ctx.fillText('credit Score ', xCoor,yCoor + 10);


    }
  }

  return (
    <div>
      <div className="container-pie">
    <div className='pie'>
      <p>Credit Score</p>
      <p>FICO Model</p>
      <hr />
      <div classname='doughnut'>
        <Doughnut

          data={data}
          options={options}
          plugins={[textCenter]}
        >

        </Doughnut>
        <p className='pie-p'>(720 - 850) 
          <button className="approved">
            {' '}
            <img src={approvedTransparent} alt="approved-icon" /> Excellent
          </button></p>
        <hr />
        <div className='Model'>
        <p>Change Model </p>
        <Link className='link'> More <img src={RightArrow} alt="right-arrow" /></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  
 );
 
 };
 
 export default PieChart;