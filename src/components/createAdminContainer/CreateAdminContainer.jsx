import React, { useContext, useState } from 'react'
import './createAdminContainer.css'
import { BsArrowRight } from 'react-icons/bs'
import Context from '../../Context/DashboardContext'
import { useDispatch } from 'react-redux'
import { createUser } from './../../redux/slices/createUserSlice'
import InputField from '../fields/InputField'
import SelectionField from '../fields/SelectField'

export default function CreateAdminContainer() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [handle, setHandle] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setHandle({ ...handle, [name]: value })
    // dispatchEvent(signUpUser({ name, email, password }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handle', handle)
    dispatch(createUser(handle))
  }

  const { mode } = useContext(Context)
  return (
    <div
      className={`row text-white rounded-3 d-flex justify-content-center ${
        mode === 'dark-mode' ? 'text-white' : 'text-secondary'
      }`}
    >
      <div className="row mb-5 p-0 d-flex align-items-center style">
        <h5 className="col p-0 fs-4 header-before">Create New User</h5>
        <div className="col p-0 d-flex gap-2 justify-content-end">
          <button className="m-0 py-2 px-3 bg-blue text-white border-0 rounded-2 fw-lighter fs-7">
            View all Users <BsArrowRight />
          </button>
          <button className="py-2 px-3 border-0 position-relative bg-blue border-0 rounded-2 text-white fw-lighter fs-7">
            Upload CSV <BsArrowRight />
            <input
              role="button"
              type="file"
              className="m-0 p-0 position-absolute top-0 start-0 opacity-0"
            />
          </button>
          <button
            onClick={handleSubmit}
            className="me-3 py-2 px-3 border-0 bg-blue position-relative bg-blue border-0 rounded-2 text-white fw-lighter fs-7"
          >
            Create User <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="row col-10 mt-5 p-0 border-0 bg-white rounded-3 fw-bold text-sg container-bs">
        <div className=" mb-5 d-flex justify-content-center">
          <img
            width={140}
            height={140}
            className="object-fit-cover rounded-circle m-img"
            src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80"
            alt="Profile"
          />
        </div>

        <div className="row mt-5 px-6">
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="First Name"
              required={true}
              id="firstName"
              type="text"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Last Name"
              required={true}
              id="lastName"
              type="text"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          {/* //// */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Phone"
              required={true}
              id="phone"
              type="tel"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
           <InputField
              label="Email"
              required={true}
              id="email"
              type="email"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          {/* // */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
           <InputField
              label="Country"
              required={true}
              id="country"
              type="text"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
           <InputField
              label="Company"
              required={true}
              id="company"
              type="text"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
          {/* ///// */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <SelectionField
              label="Assign User Role"
              htmlFor="userRole"
              placeholder="Select a role"
              required={true}
              id="userRole"
              type="text"
              options={[]}
              // value={userGroup.subGroup}
              // onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
           <InputField
              label="Assign to User Group(s)"
              required={true}
              placeholder=" Select one or More User Groups "
              id="userGroups"
              type="text"
              // value={userGroup.GroupName}
              // onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
