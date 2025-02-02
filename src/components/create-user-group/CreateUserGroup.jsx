import React from 'react'
import DataPoint from '../data-point/DataPoint'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const CreateUserGroup = () => {
    return (
        <>
            <main className='container d-flex flex-column mt-5'>
                <div className=''>
                    <div className='d-flex justify-content-between flex-column flex-xl-row flex-lg-row flex-md-row gap-4'>
                        <h1>Create User Group</h1>
                        <Button size='lg' className='px-5 py-3 border-0 primary-btns ' variant='primary'>View All User Groups: 58</Button>
                    </div>
                    <div className='d-flex flex-column border rounded-3 p-5 mt-5 gap-5'>
                        <div className='d-flex flex-column flex-md-row flex-lg-row flex-xl-row gap-3 gap-md-5 gap-lg-5 gap-xl-5 align-items-center'>
                            <Form.Group className="mb-3 custom-form-control">
                                <Form.Label className='fs-5 fw-semibold mb-3'>User Group Name</Form.Label>
                                <Form.Control placeholder="Enter Collection Title" className='p-3 primary-inputs border-0' />
                            </Form.Group>
                            <Form.Group className="mb-3  custom-form-control">
                                <Form.Label className='fs-5 fw-semibold mb-3'>Make Sub Group</Form.Label>
                                <Form.Select className='p-3 primary-inputs border-0'>
                                    <option value="" disabled selected >Select User Group(s)</option>
                                    <option value="" >User Group 1</option>
                                    <option value="" >User Group 1</option>
                                    <option value="" >User Group 1</option>
                                    <option value="" >User Group 1</option>
                                    <option value="" >User Group 1</option>
                                </Form.Select>
                            </Form.Group>

                        </div>
                        <div className='d-flex flex-xl-row flex-lg-row flex-md-row flex-column gap-5 justify-content-between align-items-center'>
                            <Form className='d-flex gap-5 w-100 flex-column flex-xl-row flex-lg-row flex-md-row'>
                                <Form.Group>
                                    <Form.Label className='fs-5 fw-semibold mb-3'>User Group Role</Form.Label>
                                    <Form.Group className=''>
                                        <Form.Check inline label="Data Collection" type='radio' id="" className='fs-6' name="cycle" />
                                        <Form.Check inline label="Dashboard Viewers" type='radio' id="" className='fs-7 ' name="cycle" />
                                        <Form.Check inline label="Administrators" type='radio' id="" className='fs-7 ' name="cycle" />

                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="mb-3 custom-form-control">
                                    <Form.Label className='fs-7 fw-semibold mb-3'>Assign Approving Office</Form.Label>
                                    <Form.Control placeholder="Type to search a user" className='p-3 primary-inputs border-0' />
                                </Form.Group>
                            </Form>

                            <Form className='d-flex gap-4'>
                                <Button variant='primary' className='d-flex align-items-center gap-2 px-4 py-2 primary-btns border-0 fs-5'>Update
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 12H7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13 8L17 12L13 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                                <Button variant='dark fs-5 px-4 py-3 border-0'>Reset</Button>
                            </Form>
                        </div>
                    </div>

                </div>


                <div className='d-flex flex-column gap-5 border mt-5 p-5 rounded-3'>
                    <div className='d-flex w-100 align-items-center justify-content-between gap-4 flex-column flex-xl-row flex-lg-row flex-md-row'>
                        <h3 className='header-before'>Add Users</h3>
                        <Form.Group className="mb-3  custom-form-control">
                            <Form.Select className='p-3 primary-inputs border-0'>
                                <option value="" disabled selected >Filter by User Groups</option>
                                <option value="" >User Group 1</option>
                            </Form.Select>
                        </Form.Group>
                        <div className='d-flex align-items-baseline flex-column flex-xl-row flex-lg-row flex-md-row justify-content-end gap-4 w-50'>
                            <Button variant='primary' className='primary-btns fs-5 px-4 py-3 border-0'>Add All Users</Button>
                            <p className='fs-5'>Total:390</p>
                            <InputGroup.Text style={{background:"none"}} id="basic-addon1" className="p-3 primary-inputs border-0"><BiSearch /><Form.Control placeholder="Search" className='p-1 primary-inputs border-0' /></InputGroup.Text>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap gap-2 gap-xl-4 gap-lg-4 align-items-center'>
                        <DataPoint />
                        <DataPoint />
                    </div>

                </div>
            </main>
        </>

    )
}

export default CreateUserGroup