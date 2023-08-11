import React from 'react'
import './create-data-stepper.css'

const CreateDataStepper = ({
  func1,
  func2,
  func3,
  func4,
  func5,
  setStepperStep,
}) => {
  const stepButtons = document.querySelectorAll('.step-buttons')
  const progress = document.querySelector('#stepper-progress')

  Array.from(stepButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
      progress.setAttribute('value', (index * 100) / (stepButtons.length - 1)) //there are 3 buttons. 2 spaces.

      stepButtons.forEach((item, secindex) => {
        if (index > secindex) {
          item.classList.add('done')
        }
        if (index < secindex) {
          item.classList.remove('done')
        }
      })
    })
  })
  return (
    <div className="w-75">
      <div className="accordion" id="accordionExample">
        <div className=" d-flex justify-content-between stepper-steps ">
          <progress id="stepper-progress" value={0} max={100}></progress>
          <div className="step-items">
            <button
              onClick={(e) => setStepperStep(e.target.id)}
              id={1}
              className="step-buttons text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1
            </button>
            <div className="step-title-div">Select Data Points</div>
          </div>
          <div className="step-items">
            <button
              // onClick={func2}
              onClick={(e) => setStepperStep(e.target.id)}
              id={2}
              className="step-buttons text-center collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2
            </button>
            <div className="step-title-div">Label Data Columns</div>
          </div>
          <div className="step-items">
            <button
              // onClick={func3}
              onClick={(e) => setStepperStep(e.target.id)}
              id={3}
              className="step-buttons text-center collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3
            </button>
            <div className="step-title-div">Map Coordinates</div>
          </div>
          <div className="step-items">
            <button
              // onClick={func4}
              onClick={(e) => setStepperStep(e.target.id)}
              id={4}
              className="step-buttons text-center collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4
            </button>
            <div className="step-title-div">Choose Chart Type</div>
          </div>
          <div className="step-items">
            <button
              // onClick={func5}
              onClick={(e) => setStepperStep(e.target.id)}
              id={5}
              className="step-buttons text-center collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5
            </button>
            <div className="step-title-div">Deploy Charts</div>
          </div>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {/* hello1 */}
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          {/* hello2 */}
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        ></div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        ></div>
        <div
          id="collapseFive"
          className="collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        ></div>
      </div>
    </div>
  )
}

export default CreateDataStepper
