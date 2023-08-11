import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import './custom-btn-group.css'

const btnGroup1 = {
  // backgroundColor: '#fff',
  // border: '1px solid #707070',
  // width: '40px',
  // height: '38px',
  // borderRadius: '6px',
  // marginRight: '5px',
}

const btns = {
  //   width: '40px',
  //   height: '19px',
  //   backgroundColor: '#fff',
  //   border: 'none',
  //   padding: '0px',
}
const CustomButtonGroup = () => {
  return (
    <div class="btn-group-vertical btn-group-1  " style={btnGroup1}>
      <button type="button" class="btn btn-secondary btn-1" style={btns}>
        <BsChevronUp color="#707070" style={{ fontSize: '16px' }} />
      </button>
      <button type="button" class="btn btn-secondary btn-2" style={btns}>
        <BsChevronDown
          color="#707070"
          style={{ fontSize: '16px', marginBottom: '6px' }}
        />
      </button>
    </div>
  )
}

export default CustomButtonGroup
