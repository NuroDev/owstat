import React from 'react'
import { Bounce, SlideRight } from 'animate-components'

// Icon file path prefix
const iconPathPrefix = '../static/svg/status_'

const statusOptions = {
  ONLINE: {
    text_enUS: 'ONLINE',
    text_kr: '온라인',
    color: 'onlineGreen',
    icon: iconPathPrefix + 'online.svg'
  },
  OFFLINE: {
    text_enUS: 'OFFLINE',
    text_kr: '오프라인',
    color: 'offlineRed',
    icon: iconPathPrefix + 'offline.svg'
  },
  SCANNING: {
    text_enUS: 'SCANNING',
    text_kr: '스캐닝',
    color: 'scanningBlue',
    icon: iconPathPrefix + 'scanning.svg'
  },
  ERROR: {
    text_enUS: 'ERROR',
    text_kr: '오류',
    color: 'errorYellow',
    icon: iconPathPrefix + 'error.svg'
  }
}

// Current server status output
var currentStatus = statusOptions.ONLINE

// Default to US lang
var outputStatusText = currentStatus.text_enUS

export default class AppStatus extends React.Component {
  render () {
    return (
      <section className='appStatus'>
        <div className='appStatusHeader'>
          <SlideRight as='h1' duration='1s'>Status: <span className={currentStatus.color}>{outputStatusText}</span></SlideRight>
        </div>
        <Bounce duration='1.5s' className='appStatusIcon'>
          <img id='statusSVG' src={currentStatus.icon} />
        </Bounce>
      </section>
    )
  }
}
