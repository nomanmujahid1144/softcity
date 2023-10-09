import React, { useRef, useState, useContext, useEffect } from 'react'

import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar, Line } from 'react-chartjs-2'
import Context from '../../../Context/DashboardContext'
import { BsCheckCircleFill } from 'react-icons/bs'
import './adminchart.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
//** registring custom logic */
function AdminRoundedBarChart({
  width,
  className,
  height,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  chartdark,
  chartId = 8,
}) {
  const { filter, startDate, endDate, mode, Labels, Data } = useContext(Context)
  const [checkChart, setCheckChart] = useState(false)

  //**for going forward in time in graph */
  const chart = useRef()
  const chartref = useRef()
  const iconRef = useRef()

  const [length, setlength] = useState({ start: 0, end: 7 })
  //**for showing the table */
  //**for adding data logic */
  const [chartdata, setchartdata] = useState({
    Labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    Data: [-21, -37, -35, 48, 31, -22, 32, -33, 34, 55, 32, 67],
  })

  //** necesasry for add button */
  //
  let labels = chartdata.Labels.slice(length.start, length.end)
  const dataArray = chartdata.Labels.map(() =>
    faker.datatype.number({ min: -50, max: 50 }),
  ).slice(length.start, length.end)
  const dataArray2 = chartdata.Labels.map(() =>
    faker.datatype.number({ min: -50, max: 50 }),
  ).slice(length.start, length.end)
  const dataArray3 = chartdata.Labels.map(() =>
    faker.datatype.number({ min: -50, max: 50 }),
  ).slice(length.start, length.end)
  const data = {
    labels: Labels.length > 0 ? Labels :chartdata.Labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Data.length ? Data: chartdata.Data,
        borderColor: 'rgb(200,10,10,0.6)',
        backgroundColor: 'rgb(255,10,10,0.4)',
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      }
    ],
  }

  const options = {
    type: 'line',
    responsive: true,

    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        maxWidth: 5,
        maxHeight: 30,
        labels: {
          font: { size: 8 },
          boxWidth: 20,
          boxHeight: 8,
          textAlign: 'start',
        },
      },
      legend: {
        position: 'top',
        labels: {
          color: (mode === 'light-mode' && 'black') || 'white',
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: false,
        text: (ctx) =>
          'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked,
      },
      tooltip: {
        mode: 'index',
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          color: (mode === 'light-mode' && 'black') || 'white', // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: (mode === 'light-mode' && 'black') || 'white', // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
    },
  }
  useEffect(() => {
    if (filter) {
      const ctx = chartref.current

      const newlabel = chartdata.Labels.indexOf(
        startDate.toLocaleString('default', { month: 'long' }),
      )
      const lastlabel = chartdata.Labels.indexOf(
        endDate.toLocaleString('default', { month: 'long' }),
      )
      const newlabels = chartdata.Labels.slice(newlabel, lastlabel + 1)
      const newdata = chartdata.Data.slice(newlabel, lastlabel + 1)
      // setlength({
      //   start: newlabel,
      //   end: lastlabel + 1,
      // });
      ctx.data.labels = newlabels
      ctx.data.datasets.data = newdata
      ctx.update()
    }

    return () => {
      // window.removeEventListener("resize", resize);
    }
  }, [startDate, endDate])
  //*!buttons logic start

  //** forward and next logic */
  let index = chartdata.Labels.length
  //

  const handleCheck = () => {
    setCheckChart((curr) => !curr)
  }

  return (
    <>
      <div
        onClick={() => {
          handleCheck()
        }}
        className={` layout-transition  ${className}
             chart-main-div 
             `}
        style={{
          width: fullwidth,
          height: fullHeight,
          position: 'relative',
        }}
      >
        <>
          {checkChart && (
            <div className="after-clicked">
              <BsCheckCircleFill
                color="#fff"
                style={{ width: '20%', height: '20%', zIndex: 3 }}
              />
            </div>
          )}
        </>
        {showtitle && (
          <div
            className="headingOfData "
            style={{
              marginTop: '20px',

              paddingBottom: '30px',
            }}
          >
            <span
              style={{
                color: (mode === 'light-mode' && 'black') || 'white',
              }}
              className={`header-before layout-transition chart-text-div  `}
            >
              Rounded Bar Chart
            </span>
          </div>
        )}
        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative ${
            chartdark && mode === 'dark-mode' && 'bg-dark'
          }`}
          style={{
            width: '100%',
            height: (fullHeight && '100%') || '60%',
          }}
        >
          <Bar ref={chartref} options={options} data={data} />
        </div>
      </div>
    </>
  )
}
export default AdminRoundedBarChart
AdminRoundedBarChart.defaultProps = {
  showtitle: true,
}
