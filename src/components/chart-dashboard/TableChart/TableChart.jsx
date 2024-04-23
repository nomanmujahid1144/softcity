import React, { useRef, useState, useContext, useEffect } from 'react'
import Context from '../../../Context/DashboardContext'

import { MdEditLocationAlt } from 'react-icons/md'
import '../container.css'
import ChartButtons from '../../chartButtons/ChartButtons'
import ChartFull from '../fullscreen/ChartFull'
import { useForm } from 'react-hook-form'
import CommentModal from '../../modal/CommentModal'
import WarningModal from '../../modal/WarningModal'
import { BsArrowRight } from 'react-icons/bs'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ChartTable from './ChartTable'

const TableChart = ({
  width,
  className,
  height,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  chartdark,
  chartId = 11,
}) => {
  //**for full screen */
  const [show, setShow] = useState(false)
  //**for commenting */
  const [comments, setComments] = useState([])

  // dark and light mode

  //**for commenting */

  const {
    showComment,
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    filter,
    startDate,
    endDate,
    mode,
    setmode,
    commentsOff,
    setcommentsOff,
  } = useContext(Context)

  // dark and light mode
  const { register, handleSubmit } = useForm()
  const [smShow, setSmShow] = useState(false)
  const [showfullchart, setshowfullchart] = useState(false)
  //** */
  const [handlemodal, sethandlemodal] = useState(false)
  //
  const [widthmodal, setwidthmodal] = useState({ comment: {}, arrow: {} })
  const [message, setmessage] = useState()
  const [indexcomment, setindexcomment] = useState(0)
  //**for going forward in time in graph */
  const chart = useRef()
  const chartref = useRef()
  const iconRef = useRef()

  const [length, setlength] = useState({ start: 0, end: 7 })
  //**for showing the table */
  const [showBarModal, setShowBarModal] = useState(false)
  //**for adding data logic */
  const [chartdata, setchartdata] = useState([
    {
      title: 'January',
      value: '62',
    },
    {
      title: 'February',
      value: '54',
    },
    {
      title: 'March',
      value: '62',
    },
    {
      title: 'April',
      value: '54',
    },
    {
      title: 'May',
      value: '62',
    },
    {
      title: 'June',
      value: '54',
    },
    {
      title: 'July',
      value: '62',
    },
    {
      title: 'August',
      value: '54',
    },
    {
      title: 'September',
      value: '62',
    },
    {
      title: 'October',
      value: '54',
    },
    {
      title: 'November',
      value: '62',
    },
    {
      title: 'December',
      value: '54',
    },
  ])

  let data = chartdata.slice(length.start, length.end)

  //

  //*!buttons logic start
  //**download image logic completed */
  const DownlaodChartImage = function () {
    const ctx = chartref.current
    // let res = ctx.toBase64Image();
  }

  //** forward and next logic */
  let index = chartdata.length
  //
  function forward(e) {
    const ctx = chart.current
    setmessage(
      'You are Currently Viewing the Latest data in the Database For This Year',
    )
    setlength({
      start: length.end * 2 > index ? index - 7 : length.end,
      end: length.end * 2 < index ? length.end * 2 : index,
    })

    if (length.end === index) {
      setSmShow(true)
      setlength({
        start: index - 7,
        end: index,
      })
    }
  }
  function backward(e) {
    const ctx = chartref.current

    setlength({
      start: length.start > 0 ? length.start - 7 > 0 && length.start - 7 : 0,
      end: length.start > 7 ? length.start : 7,
    })
    if (length.end <= 7) {
      setSmShow(true)
      setmessage(
        'No more previous data available for now. you can check future data anytime.',
      )
    }
    ctx.update()
  }

  //**working on add and remove data */
  const adddata = function () {
    if (index >= 7) {
      setlength({
        start: 0,
        end: (length.end + 1 <= index && length.end + 1) || index,
      })
    }
  }

  const removedata = function () {
    // const newlabels = chartdata.Labels;
    // const newdata = chartdata.Data;
    // newlabels.pop();
    // newdata.pop();
    // setchartdata({ Labels: newlabels, Data: newdata });
    if (index < 7) {
      setlength({
        start: 0,
        end: index,
      })
    }
    if (index >= 7) {
      setlength({
        start: length.start,
        end: (length.end - 1 > 7 && length.end - 1) || 7,
      })
    }
  }
  useEffect(() => {
    if (filter) {
      console.log(startDate.toLocaleString('default', { month: 'long' }))
      const newlabel = chartdata.findIndex((res, ind, arr) => {
        return (
          res.title === startDate.toLocaleString('default', { month: 'long' })
        )
      })
      const lastlabel = chartdata.findIndex((res, ind, arr) => {
        return (
          res.title === endDate.toLocaleString('default', { month: 'long' })
        )
      })
      const newlabels = chartdata.slice(newlabel, lastlabel)
      console.log(newlabel, lastlabel)
      // setlength({
      //   start: newlabel,
      //   end: lastlabel + 1,
      // });
      setchartdata(newlabels)
    }

    return () => {}
  }, [startDate, endDate])
  useEffect(() => {
    let { clickX, clickY } = handlemodal
    if (!showComment) {
      let rest = comments.map((res) => {
        return (res.commentbox = false)
      })
    }
  }, [showComment, handlemodal, comments])

  //*!ending
  const handleChartClick = (event) => {
    event.preventDefault()

    if (!showComment) return

    // $(`.commentmodal-${length - 1}`).hide();

    ///setting up comment placement
    const chartContainer = chart.current
    const chartRect = chartContainer.getBoundingClientRect()
    const parentRect = chartContainer.parentNode.getBoundingClientRect()
    //z-index
    // $(".fixed-top").css({ zIndex: 5 });
    //

    //
    const clickX = event.clientX - chartRect.left

    console.log(clickX)
    console.log(event.clientX - chartRect.left, event.clientY - parentRect.top)

    const containerX = chartContainer.offsetLeft
    const containerY = chartContainer.offsetTop
    //
    const clickY = event.clientY - chartRect.top + (containerY - 15)
    console.log('offsets', containerX, containerY)
    const leftPercentage = (clickX / parentRect.width) * 100
    let finalLeftPercentage
    if (clickX < 30) {
      finalLeftPercentage = ((clickX + 14) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100
      }
    } else if (clickX < 40) {
      finalLeftPercentage = ((clickX + 8) / chartRect.width) * 100
      if (showFourColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100
      }
    } else if (clickX > 40 && clickX < 77) {
      finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX + 1) / chartRect.width) * 100
      }
    } else if (clickX > 80 && clickX < 140) {
      finalLeftPercentage = ((clickX + 1) / chartRect.width) * 100
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 10) / chartRect.width) * 100
      }
    } else if (clickX >= 160 && clickX < 200) {
      finalLeftPercentage = ((clickX - 8) / chartRect.width) * 100
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100
      }
    } else if (clickX >= 200 && clickX < 270) {
      finalLeftPercentage = ((clickX - 13) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 25) / chartRect.width) * 100
      }
      if (showFourColumn && clickX > 240) {
        finalLeftPercentage = ((clickX - 30) / chartRect.width) * 100
      }
    } else if (clickX >= 270 && clickX < 330) {
      finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 27) / chartRect.width) * 100
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 30) / chartRect.width) * 100
      }
      if (showFourColumn && clickX > 290) {
        finalLeftPercentage = ((clickX - 40) / chartRect.width) * 100
      }
    } else if (clickX >= 330 && clickX < 390) {
      finalLeftPercentage = ((clickX - 29) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 34) / chartRect.width) * 100
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 44) / chartRect.width) * 100
      }
    } else if (clickX >= 390 && clickX < 420) {
      finalLeftPercentage = ((clickX - 35) / chartRect.width) * 100
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 40) / chartRect.width) * 100
      }
    } else if (clickX >= 420 && clickX < 500) {
      finalLeftPercentage = ((clickX - 46) / chartRect.width) * 100
    } else if (clickX >= 500 && clickX < 560) {
      finalLeftPercentage = ((clickX - 50) / chartRect.width) * 100
    } else if (clickX >= 560 && clickX < 600) {
      finalLeftPercentage = ((clickX - 60) / chartRect.width) * 100
    } else if (clickX >= 600) {
      finalLeftPercentage = ((clickX - 60) / chartRect.width) * 100
    } else {
      finalLeftPercentage = leftPercentage
    }
    sethandlemodal({ clickX, clickY })
    comments.map((res) => {
      return (res.commentbox = false), (res.show = false)
    })
    let placement = 'top'
    ///
    if (
      (showThreeColumn && clickX < 55 && clickY > 100) ||
      (showFourColumn && clickX > 40 && clickY > 60) ||
      (clickX < 100 && clickY > 150)
    ) {
      placement = 'top-start'
    }
    if (
      (showThreeColumn && clickX > 380 && clickY > 100) ||
      (showFourColumn && clickX > 260 && clickY > 60) ||
      (clickX > 540 && clickY > 150)
    ) {
      console.log('click x condition')
      placement = 'top-end'
      if (clickX > 540 && clickY > 150) {
        setwidthmodal({
          comment: {
            transform: 'translate(-80%,-100%)',
          },
          arrow: {
            transform: 'translate(130%, 47%)',
          },
        })
      }
      if (
        (showThreeColumn && clickX > 380 && clickY > 100) ||
        (showFourColumn && clickX > 260 && clickY > 60)
      ) {
        console.log('yoo')
        placement = 'top-end'
        setwidthmodal({
          comment: {
            transform: 'translate(-80%,-100%)',
          },
          arrow: {
            transform: 'translate(120%, 60%) ',
          },
        })
      }
    } else if (
      (showThreeColumn && clickX > 55 && clickX < 380 && clickY > 100) ||
      (showFourColumn && clickX > 40 && clickX < 260 && clickY > 65) ||
      (!showFourColumn &&
        !showThreeColumn &&
        clickX > 100 &&
        clickX < 540 &&
        clickY > 150)
    ) {
      console.log('click middle condition')
      placement = 'top'
      setwidthmodal({})
    }

    if (
      !showThreeColumn &&
      !showFourColumn &&
      clickY < 150 &&
      clickX > 100 &&
      clickX < 540
    ) {
      console.log('click Y for 2 column condition')
      placement = 'bottom'
      setwidthmodal({
        comment: {
          transform: 'translate(-80%,20%)',
        },
        arrow: {
          transform: 'translate(79%, -47%) rotate(180deg)',
          top: 0,
        },
      })
    }
    if (!showThreeColumn && !showFourColumn && clickY < 150 && clickX < 100) {
      console.log('click less greater column condition')
      placement = 'bottom-start'
      setwidthmodal({
        comment: {
          transform: 'translate(0%,20%)',
        },
        arrow: {
          transform: 'translate(-58%, 24%) rotate(135deg)',
          top: 0,
        },
      })
    }
    if (!showThreeColumn && !showFourColumn && clickY < 150 && clickX > 540) {
      console.log('click Y for 2 column condition')
      placement = 'bottom-end'
      setwidthmodal({
        comment: {
          transform: 'translate(-80%,20%)',
        },
        arrow: {
          transform: 'translate(79%, -47%) rotate(180deg)',
          top: 0,
        },
      })
    }
    if (
      (showThreeColumn && clickX < 55 && clickY < 100) ||
      (showFourColumn && clickX < 40 && clickY < 60)
    ) {
      console.log('for 2 3 column ')
      placement = 'bottom-start'
      setwidthmodal({
        comment: {
          transform: 'translate(-7%,20%)',
        },
        arrow: {
          transform: 'translate(-57%, -47%) rotate(180deg)',
          top: 0,
        },
      })
    }

    if (
      (showThreeColumn && clickX > 55 && clickX < 380 && clickY < 100) ||
      (showFourColumn && clickX > 40 && clickX < 260 && clickY < 60)
    ) {
      console.log('click layout condition')
      placement = 'bottom'
      setwidthmodal({
        comment: {
          transform: 'translate(-60%,25%)',
        },
        arrow: {
          transform: 'translate(35%, -47%) rotate(180deg)',
          top: 0,
        },
      })
    }
    ///
    const newComment = {
      placement: placement,
      next: false,
      show: false,
      modal: true,
      x: finalLeftPercentage,
      y: (clickY / parentRect.height) * 100,
      commentbox: true,
    }
    setTimeout(() => {
      return setComments([...comments, newComment])
    }, 300)
  }

  function commentclick(index) {
    const newitems = comments.map((e, ind) => {
      // *! Might be useful in future
      if (index === ind) {
        return { ...e, show: !e.show, commentbox: false }
      }
      if (e) {
        return { ...e, commentbox: false, show: false }
      }
      return e
    })

    setComments(newitems)
  }
  function fullscreen(e) {
    setShow(!show)
  }
  //to download csv file
  const csvData = [
    ['firstname', 'lastname', 'email'],
    [...chartdata.map((res) => res.title)],
    [...chartdata.map((res) => res.value)],
  ]
  function higherorder(data, index) {
    console.log(data)
    const newitems = comments.map((e, ind) => {
      if (index === ind) {
        return { ...e, mycomment: data.Comment, commentbox: false }
      }
      return e
    })
    setComments(newitems)
  }

  const commentbox = function (index) {
    const newitems = comments.map((e, ind) => {
      if (index === ind) {
        return { ...e, commentbox: false }
      }
      return e
    })
    setComments(newitems)
  }
  const onSubmit = (data) => {
    higherorder(data, indexcomment.index)
    if (data) {
    }
  }
  return (
    <>
      <div className={` mb-2 box-main ${mode || 'light-mode'}`}>
        <div
          className={`container d-flex justify-content-center position-relative`}
        >
          <div
            className={` layout-transition  ${className} box-main__inner main-div ${
              showThreeColumn && 'three-col-main-div'
            } ${showFourColumn && 'four-col-main-div'}`}
            style={{
              width: fullwidth,
              height: fullHeight,
            }}
          >
            {showtitle && (
              <div
                className="headingOfData "
                style={{
                  marginTop:
                    ((showFourColumn || showThreeColumn) && '12px') || '20px',

                  paddingBottom:
                    ((showFourColumn || showThreeColumn) && '0px') || '15px',
                }}
              >
                <span
                  style={{
                    color: (mode === 'light-mode' && 'black') || 'white',
                  }}
                  className={`header-before layout-transition text-div ${
                    (showFourColumn && 'four-col-text-div') ||
                    (showThreeColumn && 'three-col-text-div')
                  } `}
                >
                  Table Chart
                </span>
              </div>
            )}
            <div
              ref={chart}
              className={`d-flex flex-column align-items-center position-relative ${
                chartdark && mode === 'dark-mode' && 'bg-dark'
              }`}
              onMouseDown={handleChartClick}
              style={{
                width: '100%',
                height:
                  (fullHeight && '100%') ||
                  (showThreeColumn && '77%') ||
                  (showFourColumn && '77%') ||
                  '85%',
              }}
            >
              <ChartTable data={data} />
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginLeft: (showFourColumn && '5px') || '10px' }}
          >
            <ChartButtons
              setShowBarModal={setShowBarModal}
              func={DownlaodChartImage}
              func1={forward}
              func2={backward}
              func3={fullscreen}
              func4={removedata}
              func5={adddata}
              data={csvData}
              show={button}
              fullscreen={fullHeight}
              chartId={chartId}
            />
          </div>

          {showComment &&
            comments?.map((comment, index, array) => {
              return (
                <div
                  key={index}
                  className="position-absolute text-white text-container fs-8"
                  style={{
                    top: `${
                      showFourColumn ? `${comment.y + 1}` : `${comment.y}`
                    }%`,
                    left: `${comment.x - 1}%`,
                    zIndex: 7,
                  }}
                >
                  <div>
                    <OverlayTrigger
                      key={index}
                      trigger="click"
                      placement={comment.placement}
                      show={comment.show}
                      rootClose={true}
                      transition={false}
                      hasDoneInitialMeasure={true}
                      overlay={
                        <Popover
                          id={`popover-positioned-${indexcomment.placement}`}
                          className="container-comment editmodal rounded-0 border"
                        >
                          <div>
                            <Popover.Header
                              as="h5"
                              className="mt-2 mb-1 border-0 editmodal-heading comment-header comment-heading-view pb-0 bg-white d-flex justify-content-between"
                            >
                              <span className="header-beforeComment">
                                View/Update Comment
                              </span>

                              <button
                                type="button"
                                role="button"
                                onClick={() => commentbox(index)}
                                className="btn-close tooltip-close bg-gray text-center"
                              ></button>
                            </Popover.Header>
                            <Popover.Body>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-container d-flex flex-column gap-1">
                                  {show && (
                                    <input
                                      {...register('Comment')}
                                      type="text"
                                      className="comment-input mt-1 ps-0 border-bottom  pb-1 mb-2 text-primary "
                                      placeholder="Your Comment"
                                      autoFocus={true}
                                      defaultValue={comment.mycomment}
                                    />
                                  )}
                                  {!show && (
                                    <p className="comment-input comment-texted mt-1 pb-1 mb-1 border-bottom comment-para fs-7 text-muted">
                                      {comment.mycomment ?? 'No Comment'}
                                    </p>
                                  )}
                                  <button
                                    type="submit"
                                    onClick={() => {
                                      setShow(!show)
                                      setindexcomment({ index: index })
                                    }}
                                    className="btn text-white btn-color btn-sm align-self-end p-2 "
                                  >
                                    <span className="comment-button">
                                      Update
                                    </span>
                                    <BsArrowRight className="fw-semibold ms-1" />
                                  </button>
                                </div>
                              </form>
                            </Popover.Body>
                          </div>
                        </Popover>
                      }
                    >
                      <span
                        ref={iconRef}
                        className="icon-rotate position-relative"
                        onClick={(e) => {
                          commentclick(index)
                          // $(`.comment${index}`).toggle();
                        }}
                      >
                        <MdEditLocationAlt
                          className={`icon-comment ${
                            showFourColumn ? 'fs-6' : 'fs-5'
                          } `}
                        />
                      </span>
                    </OverlayTrigger>

                    {comment.commentbox && (
                      <div
                        style={widthmodal.comment}
                        className={`position-absolute container-comment comment-box commentmodal-${index}`}
                      >
                        <CommentModal
                          style={widthmodal.arrow}
                          index={index}
                          funcretrieve={higherorder}
                          close={commentbox}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
        {show && <ChartFull show={show} setShow={setShow} Chart={TableChart} />}
      </div>
      <WarningModal smShow={smShow} setSmShow={setSmShow} message={message} />
    </>
  )
}

export default TableChart
TableChart.defaultProps = {
  showtitle: true,
}
