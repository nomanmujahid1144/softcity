import React, { useEffect, useState } from 'react'
import './chart-two-card.css'

const Chart_two_Card = (props) => {
  const {
    // hasFirstColumn = true,
    // hasSecondColumn = true,
    // hasThirdColumn = true,
    data,
  } = props

  const { title1, title2, title3, num1, num2, num3, num4, num5, num6 } = data

  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)

  console.log({
    hasSecondColumn: btn1, 
    hasSecondColumn: btn2, 
    hasThirdColumn: btn3
  })

  const [hasFirstColumn, setHasFirstColumn] = useState(false)
  const [hasSecondColumn, setHasSecondColumn] = useState(false)
  const [hasThirdColumn, setHasThirdColumn] = useState(false)

  useEffect(() => {
    if (title1 && title2 && title3) {
      setHasFirstColumn(true)
    }
    if (num1 && num2 && num3) {
      setHasSecondColumn(true)
    }
    if (num4 && num5 && num6) {
      setHasThirdColumn(true)
    }
  }, [])

  return (
    <div
      className="main-card-div"
      style={{
        width:
          (hasFirstColumn && hasSecondColumn && hasThirdColumn && '524px') ||
          (hasFirstColumn && hasSecondColumn && '364px') ||
          (hasFirstColumn && hasThirdColumn && '364px') ||
          (hasSecondColumn && hasThirdColumn && '364px') ||
          '205px',
      }}
    >
      <div className="title-1">{props.data?.dataPointName}</div>

      <div>
        <table class="table card-table border-1">
          <tbody className="card-table-body">
            {hasFirstColumn && btn1 && (
              <div
                style={{
                  width: !hasSecondColumn && !hasThirdColumn && '172px',
                }}
                className="button-bg"
                onClick={() => setBtn1((curr) => !curr)}
              >
                <button
                  className="card-button"
                  style={{ backgroundColor: '#D7D7D7' }}
                >
                  <input
                    type="text"
                    name=""
                    id="custom-input"
                    // placeholder={customLabel}
                  />
                </button>
              </div>
            )}
            <tr onClick={() => setBtn1((curr) => !curr)}
              className="card-table-row "
            >
              {hasFirstColumn && (
                <td
                  scope="row"
                  style={{
                    width:
                      (!hasSecondColumn && !hasThirdColumn && '165px') ||
                      '160px',
                  }}
                >
                  Febuary
                </td>
              )}

              {hasSecondColumn && (
                <td
                  style={{
                    width:
                      (!hasFirstColumn && !hasThirdColumn && '205px') ||
                      '160px',
                  }}
                >
                  54
                </td>
              )}
              {hasThirdColumn && (
                <td
                  style={{
                    width:
                      (!hasFirstColumn && !hasSecondColumn && '205px') ||
                      '160px',
                  }}
                >
                  54
                </td>
              )}
            </tr>

            {hasSecondColumn && btn2 && (
              <div
                className="button-bg-2"
                style={{
                  left:
                    (hasFirstColumn &&
                      hasSecondColumn &&
                      hasThirdColumn &&
                      '33%') ||
                    (!hasFirstColumn && '0%') ||
                    (!hasThirdColumn && '49%') ||
                    (!hasSecondColumn && '10%'),

                  width:
                    (hasFirstColumn &&
                      hasSecondColumn &&
                      hasThirdColumn &&
                      '165px') ||
                    (!hasFirstColumn && '172px') ||
                    (!hasThirdColumn && '170px') ||
                    '160px',
                }}
                onClick={() => setBtn2((curr) => !curr)}
              >
                <button
                  className="card-button"
                  style={{ backgroundColor: '#D7D7D7' }}
                >
                  <input
                    type="text"
                    name=""
                    id="custom-input"
                    // placeholder={customLabel}
                  />
                </button>
              </div>
            )}
            <tr onClick={() => setBtn2((curr) => !curr)}>
              {hasFirstColumn && <td scope="row">March</td>}
              {hasSecondColumn && <td>62</td>}
              {hasThirdColumn && <td>62</td>}
            </tr>
            {hasThirdColumn && btn3 && (
              <div
                className="button-bg-3"
                style={{
                  left:
                    (hasFirstColumn &&
                      hasSecondColumn &&
                      hasThirdColumn &&
                      '66.5%') ||
                    (!hasFirstColumn && !hasSecondColumn && '0%') ||
                    (!hasFirstColumn && '52%') ||
                    (!hasThirdColumn && '52%') ||
                    (!hasSecondColumn && '49%'),

                  width:
                    (hasFirstColumn &&
                      hasSecondColumn &&
                      hasThirdColumn &&
                      '164px') ||
                    (!hasFirstColumn && !hasSecondColumn && '174px') ||
                    (!hasFirstColumn && '160px') ||
                    '169px',
                }}
                onClick={() => setBtn3((curr) => !curr)}
              >
                <button
                  className="card-button"
                  style={{
                    backgroundColor: '#D7D7D7',
                  }}
                >
                  <input
                    type="text"
                    name=""
                    id="custom-input"
                    // placeholder={customLabel}
                  />
                </button>
              </div>
            )}
            <tr onClick={() => setBtn3((curr) => !curr)}>
              {hasFirstColumn && <td scope="row">April</td>}
              {hasSecondColumn && <td>54</td>}
              {hasThirdColumn && <td>54</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Chart_two_Card
