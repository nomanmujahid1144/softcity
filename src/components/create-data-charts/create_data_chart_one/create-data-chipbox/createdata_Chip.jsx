import React from 'react'
import './create-data-chip.css'
import { BsQuestion } from 'react-icons/bs'

const Createdata_Chip = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="chip-bg-one">
        <div className="chip-title">{data.title}</div>
      </div>
      <div className="chip-bg-two">
        <div className="chip-title">
          <BsQuestion color="#ffffff" fontSize={26} />
        </div>
      </div>
    </div>
  )
}

export default Createdata_Chip
