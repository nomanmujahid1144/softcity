import React from 'react'
import './create-data-chart-two.css'
import Createdata_chartTwo_header from './createdata_chartTwo_header/createdata_chartTwo_header'
import Chart_two_Card from './Chart-two-Card/Chart_two_Card'
import PaginationRounded from '../../pagination/PaginationMui'

const chartCardData = [
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
  },
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
    num4: 54,
    num5: 64,
    num6: 54,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
    num4: 54,
    num5: 64,
    num6: 54,
  },
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
    num4: 54,
    num4: 64,
    num5: 54,
  },
  {
    title1: 'Febuary',
    title2: 'March',
    title3: 'April',
    num1: 54,
    num2: 64,
    num3: 54,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
  {
    num1: 2345,
    num2: 2435,
    num3: 2435,
  },
]

const Create_data_chart_two = () => {
  return (
    <div>
      <div>
        <Createdata_chartTwo_header />
      </div>

      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap' }}>
        {chartCardData.map((item) => {
          return (
            <>
              <div style={{ marginRight: '20px', marginBottom: '20px' }}>
                <Chart_two_Card data={item} />
              </div>
            </>
          )
        })}
      </div>

      <div className="py-4 d-flex justify-content-end table-pagination">
        <PaginationRounded />
      </div>
    </div>
  )
}

export default Create_data_chart_two
