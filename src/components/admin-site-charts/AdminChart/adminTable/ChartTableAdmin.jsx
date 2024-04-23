import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import './chart-table-admin.css'

const ChartTableAdmin = ({ data, adminTableChart }) => {
  return (
    <div className="border border-white scroll1 z-1">
      <div style={{ padding: 12 }}>
        <Table bordered className="tabel-chart">
          <tbody>
            {data &&
              data.map((val, ind) => {
                return (
                  <>
                    <tr key={ind} style={{ color: 'secondary' }}>
                      <td
                        className={`fs-${
                          (adminTableChart && 9) || 7
                        } table-chart`}
                        width="50%"
                        style={{ fontSize: adminTableChart && '8px' }}
                      >
                        {val.title}
                      </td>
                      <td
                        className={`fs-${
                          (adminTableChart && 9) || 7
                        } table-chart text-center`}
                        style={{ fontSize: adminTableChart && '8px' }}
                      >
                        {val.value}
                      </td>
                    </tr>
                  </>
                )
              })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ChartTableAdmin
