import React, { useContext, useEffect, useState } from 'react'
import './create-data-charts.css'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import Create_data_chart_one from './create_data_chart_one'
import CreateDataStepper from './Create-data-stepper/CreateDataStepper'
import Create_data_chart_two from './create_data_chart_two/index'
import Create_data_chart_three from './create-data-chart-three/Create_data_chart_three'
import Context from '../../Context/DashboardContext'
import create_data_chart_five from './create-data-chart-five/index'
import Create_data_chart_five from './create-data-chart-five/index'

const CreateDataCharts = () => {
  const [deployButton, setDeployButton] = useState(true)
  const { StepperStep, setStepperStep } = useContext(Context)
  const indexData = useContext(Context)
  const {
    selectedDataPointsObj, 
  } = indexData

  const handleDeploy = (data) => {
    console.log(selectedDataPointsObj)
  }

  useEffect(() => {
    handleDeploy()
  }, [selectedDataPointsObj])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div className="data-charts-div">
          <div className="main-header-before"></div>
          <div className="data-charts-div2">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div className="title1" style={{ marginLeft: '10px' }}>
                Create Data Charts
              </div>
              <div width="100%">
                <button
                  className="btn btn-primary btn-darkblue previous-btn"
                  style={{
                    width: '110px',
                    fontSize: '15px',
                  }}
                >
                  <BsArrowLeft /> Previous
                </button>

                {StepperStep == 5 ? (
                  <button
                    className="btn btn-primary btn-danger "
                    style={{ width: '100px', fontSize: '15px' }}
                    onClick={(e) => handleDeploy()}
                  >
                    Deploy <BsArrowRight />
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-darkblue"
                    style={{ width: '80px', fontSize: '15px' }}
                  >
                    Next <BsArrowRight />
                  </button>
                )}
              </div>
            </div>
            <div width="50%">
              <CreateDataStepper setStepperStep={setStepperStep} />
            </div>
          </div>
        </div>
      </div>

      <div>{StepperStep == 1 && <Create_data_chart_one />}</div>
      <div>{StepperStep == 2 && <Create_data_chart_two />}</div>
      <div>{StepperStep == 3 && <Create_data_chart_three />}</div>
      <div>
        {StepperStep == 4 && (
          <Create_data_chart_three StepperStep={StepperStep} />
        )}
      </div>
      <div>{StepperStep == 5 && <Create_data_chart_five />}</div>
    </>
  )
}

export default CreateDataCharts
