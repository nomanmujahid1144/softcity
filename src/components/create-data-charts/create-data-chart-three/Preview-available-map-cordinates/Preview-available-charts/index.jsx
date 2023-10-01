import React, { useContext, useState } from 'react'
import Context from "../../../../../Context/DashboardContext";
import AdminLineChart from '../../../../admin-site-charts/AdminChart/AdminLineChart'
import AdminDoughnutChart from '../../../../admin-site-charts/AdminChart/AdminDougnutChart'
import AdminTableChart from '../../../../admin-site-charts/AdminChart/AdminTableChart'
import AdminSimpleBarChart from '../../../../admin-site-charts/AdminChart/AdminSimpleBarChart'
import AdminHBarChart from '../../../../admin-site-charts/AdminChart/AdminHBarChart'
import AdminSteppedLineChart from '../../../../admin-site-charts/AdminChart/AdminSteppedLineChart'
import AdminBarLineChart from '../../../../admin-site-charts/AdminChart/AdminBarLineChart'
import AdminStackedLineChart from '../../../../admin-site-charts/AdminChart/AdminStackedLineChart'
import AdminRoundedBarChart from '../../../../admin-site-charts/AdminChart/AdminRoundedBarChart'

const Preview_available_charts = () => {
  const {
    mode,
    StepperStep,
    setStepperStep,
    addfield,
    selectLabelData,
    setselectLabelData,
    Labels,
    setLabels,
    Data,
    setData
  } = useContext(Context);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminLineChart Labels={Labels} Data={Data} />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminDoughnutChart />
      </div>

      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminSimpleBarChart />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminHBarChart />
      </div>

      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminSteppedLineChart />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminBarLineChart />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminStackedLineChart />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminRoundedBarChart />
      </div>
      <div style={{ marginRight: '10px', marginBottom: '10px' }}>
        <AdminTableChart />
      </div>

      <div>{/* <TableChart hasChartButtons={false} /> */}</div>
    </div>
  )
}

export default Preview_available_charts
