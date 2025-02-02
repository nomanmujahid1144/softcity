import React, { useEffect } from 'react';
import './stepper.css';

const Stepper = ({ currentStep }) => {
  useEffect(() => {
    const stepButtons = document.querySelectorAll('.step-button');
    const progress = document.querySelector('#progress');

    Array.from(stepButtons).forEach((button, index) => {
      button.disabled = index + 1 > currentStep;

      button.addEventListener('click', () => {
        progress.setAttribute('value', (index * 100) / (stepButtons?.length - 1));

        stepButtons.forEach((item, secindex) => {
          if (index > secindex) {
            item.classList.add('done');
          }
          if (index < secindex) {
            item.classList.remove('done');
          }
        });
      });
    });
  }, [currentStep]);

  const numberOfSteps = 7; // Change this according to your total number of steps

  return (
    <>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="steps">
            <progress id="progress" value={(currentStep - 1) * 100 / (numberOfSteps - 1)} max={100}></progress>

            {Array.from({ length: numberOfSteps }, (_, index) => (
              <div className="step-item" key={index + 1}>
                <button
                  className={`step-button text-center ${index + 1 === currentStep ? 'active' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index + 1}`}
                  aria-expanded={index + 1 === currentStep ? 'true' : 'false'}
                  aria-controls={`collapse${index + 1}`}
                >
                  {index + 1}
                </button>
                <div className="step-title">User Group Name</div>
              </div>
            ))}
          </div>

          {/* Your collapse sections go here */}
          {Array.from({ length: numberOfSteps }, (_, index) => (
            <div
              key={index + 1}
              id={`collapse${index + 1}`}
              className={`collapse ${index + 1 === currentStep ? 'show' : ''}`}
              aria-labelledby={`heading${index + 1}`}
              data-bs-parent="#accordionExample"
            >
              {/* Your content for each collapse section goes here */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stepper;
