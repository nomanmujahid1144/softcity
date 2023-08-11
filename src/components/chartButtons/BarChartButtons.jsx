// import React, { useCallback, useRef } from "react";
// import { Button } from "react-bootstrap";

// export default function BarChartButtons() {
//   let  ref = useRef(null);
//   const downlaodChartImage = useCallback(()=>{
//     const link = document.createElement("Bar");
//     link.download = "chart.png";
//     link.href= ref.current.toBase64Image();
//     link.click();
//   },[]);
//   return (
//     <div>
//       <div>
//         <Button
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0px #dee2e6",
//             margin: "3px",
//             borderRadius: "25px",
//             width: "auto",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-align-middle"
//             viewBox="0 0 16 16"
//           >
//             <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-usb-c-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-caret-left-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-caret-right-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-hdd-stack-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//           onClick={downlaodChartImage}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-cloud-arrow-down-fill"
//             viewBox="0 0 16 16"
//           >
//             <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
//           </svg>
//         </Button>
//         <Button
//           variant="secondry"
//           style={{
//             background: "#3D3D3D",
//             color: "white",
//             border: "solid 0.5px #dee2e6",
//             borderRadius: "25px",
//             margin: "3px",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-list"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fillRule="evenodd"
//               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//             />
//           </svg>
//         </Button>
//       </div>
//     </div>
//   );
// }


import React,  { useCallback, useRef, useContext } from 'react'
import { Button } from 'react-bootstrap'
import Context from './../../Context/DashboardContext';

export default function BarChartButtons({ setShowBarModal }) {

  const {
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
  } = useContext(Context)

  const buttonStyle = {
    background: '#ffffff',
    color: 'white',
    border: 'solid 0px #ffffff',
    margin: '3px',
    borderRadius: '4px',
    width: (showThreeColumn || showFourColumn) && '25px' || 'auto',
    height: (showThreeColumn || showFourColumn) && '25px' || 'auto',
    padding: (showThreeColumn || showFourColumn) && '0px' || 'auto',
  }


  let  ref = useRef(null);
    const downlaodChartImage = useCallback(()=>{
      const link = document.createElement("Bar");
      link.download = "chart.png";
      link.href= ref.current.toBase64Image();
      link.click();
    },[]);

  return (
    <div>
      <div>
        <div>
          <Button
          className='shadow-sm'
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-align-middle"
              viewBox="0 0 16 16"
            >
              <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" />
            </svg>
          </Button>
        </div>
        <div>
          <Button
          className='shadow-sm'
            variant="secondry"
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-usb-c-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Z" />
            </svg>
            
          </Button>
        </div>

        <div>
          <Button
          className='shadow-sm'
            variant="secondry"
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </Button>
        </div>

        <div>
          <Button
          className='shadow-sm'
            variant="secondry"
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </Button>
        </div>

        <div>
          <Button
          className='shadow-sm'
            variant="secondry"
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-hdd-stack-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
            </svg>
          </Button>
        </div>

        <div>
          <Button
          className='shadow-sm'
            variant="secondry"
            style={buttonStyle}
            onClick={downlaodChartImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-cloud-arrow-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
            </svg>
          </Button>
        </div>

        <div>
          <Button
          className='shadow-sm'
            onClick={() => setShowBarModal((current) => !current)}
            variant="secondry"
            style={buttonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width= {(showThreeColumn || showFourColumn) && '10px' || "16"}
              height={(showThreeColumn || showFourColumn) && '10px' || "16"}
              fill="#000000"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
