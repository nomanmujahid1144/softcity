import React, { useContext } from 'react'
import './preview-available-elements-map.css'
import Context from '../../../../Context/DashboardContext'
import Preview_available_charts from './Preview-available-charts'

const Preview_available_Elements = ({ SaveButton }) => {
  const { mode, StepperStep } = useContext(Context)
  return (
    <div>
      <div
        className={`create-data-points d-flex justify-content-between  flex-grow-1 ${
          mode === 'dark-mode' && 'text-white'
        }`}
        style={{ width: '100%' }}
      >
        <div
          className={`data-point-heading header-beforeAdmin fw-400 ${
            mode === 'dark-mode' && 'text-white'
          }`}
        >
          Preview Available Elements for Your Selection
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          backgroundColor: mode === 'dark-mode' && '#44444479',
        }}
        className="preview-main-div"
      >
        {StepperStep == 4 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="preview-save-button">Save</button>
          </div>
        )}
        <Preview_available_charts />
      </div>
    </div>
  )
}

export default Preview_available_Elements
