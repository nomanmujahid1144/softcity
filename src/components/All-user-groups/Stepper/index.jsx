import React from 'react'
import './stepper.css'
const Stepper = () => {
  const stepButtons = document.querySelectorAll('.step-button')
  const progress = document.querySelector('#progress')

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
    <>
      <div className="container">
        <div class="accordion" id="accordionExample">
          <div class="steps ">
            <progress id="progress" value={0} max={100}></progress>
            <div class="step-item ">
              <button
                class="step-button text-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                5
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                6
              </button>
              <div class="step-title">User Group Name</div>
            </div>
            <div class="step-item">
              <button
                class="step-button text-center collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                7
              </button>
              <div class="step-title">User Group Name</div>
            </div>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseSix"
            class="collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          ></div>
          <div
            id="collapseSeven"
            class="collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          ></div>
        </div>
      </div>
    </>
  )
}

export default Stepper
