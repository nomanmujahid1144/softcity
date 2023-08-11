import React from 'react'
import './notification-comp.css'
import { BsFillCircleFill } from 'react-icons/bs'

const notificationData = [
  {
    title:
      'Dear Approving officer, a new data collection cycle is now completed.',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear Approving officer, a new data point is now added by Admin to your collection. Click here to view and approve',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear Approving officer, a new data point is now added by Admin to your collection. Click here to view and approve',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear User, a new data collection cycle is now completed for your user group. Congratulations',
    duration: '8h',
  },
  {
    title:
      'Dear Approving officer, a data collection template  has been assigned to a  user group by an Admin in your user group. Click here to view and approve',
    duration: '1 day ago',
    hasClickBtn: true,
  },
  {
    title:
      'Dear Approving officer, a new data collection cycle is now completed.',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear Approving officer, a new data point is now added by Admin to your collection. Click here to view and approve',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear Approving officer, a new data point is now added by Admin to your collection. Click here to view and approve',
    accordionDesc:
      'Oderinde Ayobami added "Invoice Maker" data point to the collection "Admin Data", kindly respond',
    duration: '8h',
    hasClickBtn: true,
  },
  {
    title:
      'Dear User, a new data collection cycle is now completed for your user group. Congratulations',
    duration: '8h',
  },
  {
    title:
      'Dear Approving officer, a data collection template  has been assigned to a  user group by an Admin in your user group. Click here to view and approve',
    duration: '1 day ago',
    hasClickBtn: true,
  },
]

const NotificationComp = () => {
  return (
    <div>
      <div className="notification-main-headings">
        <div>Notifications</div>
        <div>Total Unread: 23</div>
      </div>

      <div className="bg-white px-3 py-4 rounded my-4">
        {notificationData?.map((item, index) => {
          return (
            <>
              <div className="d-flex">
                <div>
                  <BsFillCircleFill color="#2A85FF" fontSize="10px" />
                </div>
                <div
                  className="d-flex-inline"
                  style={{
                    marginLeft: '10px',
                    color: '#9A9FA5',
                    fontSize: '15px',
                  }}
                >
                  {item.title}
                  {item.hasClickBtn && (
                    <>
                      <span
                        clas
                        style={{
                          color: '#000000',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                        }}
                      >
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none p-0 text-dark "
                          data-bs-toggle="collapse"
                          // data-bs-target="#flush-collapseTwo"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${index}`}
                        >
                          Click here
                        </button>
                      </span>{' '}
                      to view data
                    </>
                  )}
                </div>
                <div
                  style={{
                    marginLeft: '3%',
                    color: '#9A9FA5',
                    fontSize: '13px',
                    marginRight: '2%',
                  }}
                >
                  {item.duration}
                </div>
              </div>

              <div
                style={{
                  borderBottom: '1px solid #EFEFEF',
                  width: '100%',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              ></div>
              <div
                class="accordion accordion-flush p-0"
                id="accordionFlushExample"
              >
                <div class="accordion-item p-0">
                  <div
                    id={`flush-collapse${index}`}
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      class="accordion-body p-2 d-flex flex-wrap align-items-center"
                      style={{
                        backgroundColor: '#F4F4F4',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '10px',
                          color: '#9A9FA5',
                          fontSize: '15px',
                          p: '0px',
                        }}
                      >
                        {item.accordionDesc}
                      </div>
                      <div>
                        <button
                          className="notification-buttons"
                          style={{ marginLeft: '10px' }}
                        >
                          Approve
                        </button>
                        <button
                          className="notification-buttons"
                          style={{ marginLeft: '10px' }}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default NotificationComp
