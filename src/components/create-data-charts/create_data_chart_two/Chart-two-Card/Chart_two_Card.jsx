import React, { useEffect, useState } from "react";
import "./chart-two-card.css";

const Chart_two_Card = (props) => {
  const {
    // hasFirstColumn = true,
    // hasSecondColumn = true,
    // hasThirdColumn = true,
    data,
  } = props;

  const { title1, title2, title3, num1, num2, num3, num4, num5, num6 } = data;

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const [hasFirstColumn, setHasFirstColumn] = useState(false);
  const [hasSecondColumn, setHasSecondColumn] = useState(false);
  const [hasThirdColumn, setHasThirdColumn] = useState(false);

  useEffect(() => {
    if (title1 && title2 && title3) {
      setHasFirstColumn(true);
    }
    if (num1 && num2 && num3) {
      setHasSecondColumn(true);
    }
    if (num4 && num5 && num6) {
      setHasThirdColumn(true);
    }
  }, []);

  return (
    <div
      className="main-card-div"
      style={{
        width:
          (hasFirstColumn && hasSecondColumn && hasThirdColumn && "524px") ||
          (hasFirstColumn && hasSecondColumn && "364px") ||
          (hasFirstColumn && hasThirdColumn && "364px") ||
          (hasSecondColumn && hasThirdColumn && "364px") ||
          "205px",
      }}
    >
      <div className="title-1">{props.data?.dataPointName}</div>

      <div>
        <table class="table card-table border-1">
          <tbody className="card-table-body">
            {hasFirstColumn && btn1 && (
              <div
                style={{
                  width: !hasSecondColumn && !hasThirdColumn && "172px",
                }}
                className="button-bg"
                onClick={() => setBtn1((curr) => !curr)}
              >
                <button
                  className="card-button"
                  style={{ backgroundColor: "#D7D7D7" }}
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
            <tr
              onClick={() => setBtn1((curr) => !curr)}
              className="card-table-row "
            >
              {data.labelColumns.map((label) => (
                <th
                  scope="row"
                  style={{
                    width:
                      (!hasSecondColumn && !hasThirdColumn && "165px") ||
                      "160px",
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>

            {data.dataColumns
              .reduce((rows, label, index) => {
                if (index % 2 === 0) {
                  // Start a new row
                  rows.push([label]);
                } else {
                  // Add the label to the current row
                  rows[rows.length - 1].push(label);
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => setBtn1((curr) => !curr)}
                  className="card-table-row"
                >
                  {row.map((label, colIndex) => (
                    <td
                      key={colIndex}
                      scope="row"
                      style={{
                        width:
                          (!hasSecondColumn && !hasThirdColumn && "165px") ||
                          "160px",
                      }}
                    >
                      {label}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chart_two_Card;
