import React from 'react'
import { Bounce, SlideRight } from 'animate-components'
import * as appLog from 'electron-log'

// is-reachable import
// TODO: Convert to import
const isReachable = require('is-reachable');

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

// All test IP's provided by Blizzard Entertainment.
// Source: https://us.battle.net/support/en/article/performing-a-traceroute
const regionIPs = {
  US: {
    primary: '24.105.30.129',
    secondary: '24.105.62.129'
  },
  EU: {
    primary: '185.60.114.159',
    secondary: '185.60.112.157'
  },
  ASIA: {
    primary: '211.234.110.1',
    secondary: '203.66.81.98'
  }
}

// Current server status output
var currentStatus = statusOptions.ONLINE

// Default to US lang
var outputStatusText = currentStatus.text_enUS

function checkStatus (ip, region) {
  appLog.info('Pinging ' + region + '...')
  isReachable(ip).then(reachable => {
    if(reachable == true) {
      return true
    } else if(reachable == false) {
      return false
    }
  });
}

export function CheckServerStatus(region) {
  appLog.info('Checking ' + region + ' status...')
  if (region === 'US') {
    if (checkStatus(regionIPs.US.primary, region) === false || checkStatus(regionIPs.US.secondary, region) === false) {
      appLog.info(region + 'is offline...')
      currentStatus = statusOptions.OFFLINE
    } else if (checkStatus(regionIPs.US.primary, region) === true || checkStatus(regionIPs.US.secondary, region) === true) {
      appLog.info(region + 'is online')
      currentStatus = statusOptions.ONLINE
    }
  } else if (region === 'EU') {
    if (checkStatus(regionIPs.EU.primary, region) === false || checkStatus(regionIPs.EU.secondary, region) === false) {
      appLog.info(region + 'is offline...')
      currentStatus = statusOptions.OFFLINE
    } else if (checkStatus(regionIPs.ASIA.primary, region) === true || checkStatus(regionIPs.ASIA.secondary, region) === true) {
      appLog.info(region + 'is online')
      currentStatus = statusOptions.ONLINE
    }
  } else if (region === 'ASIA') {
    if (checkStatus(regionIPs.US.primary, region) === false || checkStatus(regionIPs.US.secondary, region) === false) {
      appLog.info(region + 'is offline...')
      currentStatus = statusOptions.OFFLINE
    } else if (checkStatus(regionIPs.US.primary, region) === true || checkStatus(regionIPs.US.secondary, region) === true) {
      appLog.info(region + 'is online')
      currentStatus = statusOptions.ONLINE
    }
  } else if (region === 'PTR') {
    
  }
}

class AppStatusText extends React.Component {
  render () {
    return (
      <div className='appStatusHeader'>
        <SlideRight as='h1' duration='1s'>Status: <span className={currentStatus.color}>{outputStatusText}</span></SlideRight>
      </div>
    )
  }
}

class AppIcon extends React.Component {
  render () {
    return (
      <Bounce duration='1.5s' className='appStatusIcon'>
        <img id='statusSVG' src={currentStatus.icon} />
      </Bounce>
    )
  }
}

export default class AppStatus extends React.Component {
  render () {
    return (
      <section className='appStatus'>
        <AppStatusText />
        <AppIcon />
      </section>
    )
  }
}
