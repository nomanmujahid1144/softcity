import React, { useContext, useRef, useState, useEffect } from 'react'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Context from '../../Context/DashboardContext'
import HorizontalChart from './HorizontalChart'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
import SimpleBarChart from './SimpleBarChart'
import SteppedLineChart from './SteppedLineChart'
import StackedLineChart from './StackedLineChart'
import RoundedBarChart from './RoundedBarChart'
import BarLine from './BarLine'
import { useSearchParams } from 'react-router-dom'
import TableChart from './TableChart/TableChart'
import ImageChart from './ImageChart'
import CounterChart from './CounterChart'

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const charts = [
  'Simple Bar Chart',
  'Horizontal Chart',
  'Doughnut Chart',
  'Line Chart',
  'Bar Line',
  'Stepped Line Chart',
  'Stacked Line Chart',
  'Rounded Bar Chart',
  'Image Chart',
  'Counter Chart',
  'Table Chart',
]
function ChartDashboard() {
  const chart = useRef()
  const {
    setshowall,
    showall,
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    favArray,
    setFavArray,
    favMenuBtn,
    setFavMenuBtn,
  } = useContext(Context)

  const [width, setwidth] = useState(490)
  const [height, setHeight] = useState(420)
  const [className, setclassName] = useState(
    'rounded-3 shadow-sm px-2 pb-2 position-relative',
  )
  const [filterCharts, setFilterCharts] = useState(charts)
  const [search] = useSearchParams()
  function searchFilter() {
    const searchedTitle = search.get('query')?.toLowerCase() ?? null
    const searchedProducts = searchedTitle
      ? charts.filter((chart) => chart.toLowerCase().includes(searchedTitle))
      : charts
    setFilterCharts(searchedProducts)
  }
  useEffect(() => {
    searchFilter()
  }, [search])

  // useEffect(() => {
  //   console.log('favBtnclicked', favMenuBtn)
  // }, [favMenuBtn])

  // localStorage.getItem('fav', favArray).includes(7)

  console.log('fav menu', favMenuBtn)
  return (
    <>
      <main
        className={`layout-transition d-flex flex-wrap  gap-${
          (showFourColumn && 1) || (showThreeColumn && 2) || 4
        } flex-row justify-content-${
          (showThreeColumn && 'start') ||
          (showFourColumn && 'start') ||
          'center'
        } `}
      >
        {/* ==================================== */}

        {filterCharts.includes('Simple Bar Chart') ? (
          <SimpleBarChart width={width} className={className} height={height} />
        ) : filterCharts.includes('Horizontal Chart') ? (
          <HorizontalChart
            width={width}
            className={className}
            height={height}
          />
        ) : filterCharts.includes('Bar Line') ? (
          <BarLine width={width} className={className} height={height} />
        ) : filterCharts.includes('Stepped Line Chart') ? (
          <SteppedLineChart
            width={width}
            className={className}
            height={height}
          />
        ) : filterCharts.includes('Stacked Line Chart') ? (
          <StackedLineChart
            width={width}
            className={className}
            height={height}
          />
        ) : filterCharts.includes('Rounded Bar Chart') ? (
          <RoundedBarChart
            width={width}
            className={className}
            height={height}
          />
        ) : filterCharts.includes('Doughnut Chart') ? (
          <DoughnutChart width={width} className={className} height={height} />
        ) : filterCharts.includes('Line Chart') ? (
          <LineChart width={width} className={className} height={height} />
        ) : filterCharts.includes('Image Chart') ? (
          <ImageChart width={width} className={className} height={height} />
        ) : filterCharts.includes('Counter Chart') ? (
          <CounterChart width={width} className={className} height={height} />
        ) : filterCharts.includes('Table Chart') ? (
          <TableChart width={width} className={className} height={height} />
        ) : (
          <h2 className="text-primary">Nothing Found.</h2>
        )}

        {!favMenuBtn &&
          (filterCharts.length >= 4 ? (
            <>
              <HorizontalChart
                width={width}
                className={className}
                height={height}
              />
              <DoughnutChart
                width={width}
                className={className}
                height={height}
              />
              <LineChart width={width} className={className} height={height} />
              <BarLine width={width} className={className} height={height} />
              <SteppedLineChart
                width={width}
                className={className}
                height={height}
              />
              <StackedLineChart
                width={width}
                className={className}
                height={height}
              />
              <RoundedBarChart
                width={width}
                className={className}
                height={height}
              />
              <ImageChart width={width} className={className} height={height} />
              <CounterChart
                width={width}
                className={className}
                height={height}
              />
              <TableChart width={width} className={className} height={height} />
            </>
          ) : null)}

        {favMenuBtn && localStorage.getItem('fav', favArray).includes(2) && (
          <HorizontalChart
            width={width}
            className={className}
            height={height}
          />
        )}

        {favMenuBtn && localStorage.getItem('fav', favArray).includes(7) && (
          <DoughnutChart width={width} className={className} height={height} />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(8) && (
          <LineChart width={width} className={className} height={height} />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(3) && (
          <BarLine width={width} className={className} height={height} />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(4) && (
          <SteppedLineChart
            width={width}
            className={className}
            height={height}
          />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(5) && (
          <StackedLineChart
            width={width}
            className={className}
            height={height}
          />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(6) && (
          <RoundedBarChart
            width={width}
            className={className}
            height={height}
          />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(9) && (
          <ImageChart width={width} className={className} height={height} />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(10) && (
          <CounterChart width={width} className={className} height={height} />
        )}
        {favMenuBtn && localStorage.getItem('fav', favArray).includes(11) && (
          <TableChart width={width} className={className} height={height} />
        )}

        {/* <PieChart width={width} className={className} />
       
        <HBarChart width={width} className={className} />
        <StackedLineChart width={width} className={className} /> */}
      </main>
    </>
  )
}

export default ChartDashboard
