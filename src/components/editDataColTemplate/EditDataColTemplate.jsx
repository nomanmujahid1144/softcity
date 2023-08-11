import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsArrowRightShort} from "react-icons/bs";
import { InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import DataPoint from "../data-point/DataPoint";
import DataPointGrpName from "../data-point/DataPointGrpName";
// import { BiQuestionMark } from 'react-icons/bi'
function EditDataColTemplate() {
  return (
  <>
          <div className='row m-0 p-0' style={{ backgroundColor: "#F8F8F8",width:"100%",height:"20%" }}>
            <div className="row m-0 mt-4  px-4 " >
                <div className="col m-0 p-0 d-flex align-items-center mb-3" style={{ fontWeight: "400", fontSize: "25px" }}>Edit Data Collection Template</div>
            </div>
           </div>
           <div className="container m-0  px-4 pb-4 d-flex  gap-3">
              <Form.Group 
               className="mb-3 custom-form-control">
                    <Form.Label  className='fs-7 fw-semibold mb-3 p-3'>Template Name </Form.Label>
                        <Form.Control placeholder="template Name Type" className='p-3 primary-inputs border-0' />
                            </Form.Group>
                            <div className='mt-4 me-2 d-flex justify-content-end align-items-end gap-2'>
                            <button type="submit" className="btn  mx-3 btn-form">
                             Create <BsArrowRightShort className="btn-icon" />
                              </button>
                              <button type="submit" className="btn  btn-form">
                                 Reset
                               </button>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex flex-column gap-3 border mt-5 p-4 rounded-3'>
                    <div className='d-flex w-100 align-items-center justify-content-between gap-4 flex-column flex-xl-row flex-lg-row flex-md-row'>
                        <h3 className='header-before'>Data Collection Template</h3>
                        <div className='d-flex align-items-baseline justify-content-end gap-4 w-50'>
                            <p className='fs-5'>Total:390</p>
                            <InputGroup.Text style={{background:"none"}} id="basic-addon1" className="p-3 primary-inputs border-0"><BiSearch /><Form.Control placeholder="Search" className='p-1 primary-inputs border-0' /></InputGroup.Text>
                        </div>
                    </div>
                    {/* so DataPoint And DataPointGrpName is alredy made so we fetch these by juts calling it by Name  */}
                    <div  className='d-flex flex-wrap gap-3 gap-xl-4 gap-lg-2'>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPointGrpName/>
                        <DataPointGrpName/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                        <DataPoint/>
                </div>
                <hr/>
                <div className="buttonsandUsers">
            <span style={{ marginRight: "68%" }}>Total:390</span>
          <Button
            style={{
              background: "none",
              color: "black",
              border: "solid 0.5px #dee2e6",
              margin: "3px",
              borderRadius: "4px",
              width: "70px",
            }} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Button>
          <Button
            variant="secondry"
            style={{
              border: "solid 0.5px #dee2e6",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            1
          </Button>
          <Button
            variant="secondry"
            style={{
              border: "solid 0.5px #dee2e6",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            2
          </Button>
          <Button
            variant="secondry"
            style={{
              background: "rgb(10 48 90)",
              color: "white",
              border: "solid 0.5px grey",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            3
          </Button>
          <Button
            variant="secondry"
            style={{
              border: "solid 0.5px #dee2e6",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            4
          </Button>
          <Button
            variant="secondry"
            style={{
              border: "solid 0.5px #dee2e6",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            ...
          </Button>
          <Button
            variant="secondry"
            style={{
              border: "solid 0.5px #dee2e6",
              borderRadius: "4px",
              margin: "3px",
            }}
          >
            20
          </Button>
          <Button
            style={{
              background: "none",
              color: "black",
              border: "solid 0.5px #dee2e6",
              margin: "3px",
              borderRadius: "4px",
              width: "70px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="black"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Button>
            </div> 
            </div>                 
                
  </>
  );
}

export default EditDataColTemplate;
