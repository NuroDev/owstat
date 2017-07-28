import React from 'react'
import { Bounce, SlideRight } from 'animate-components'
import * as appLog from 'electron-log'
import * as isAllReachable from 'is-all-reachable'

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

/**
 * All server test IP's provided by Blizzard Entertainment support.
 * Source: https://us.battle.net/support/en/article/performing-a-traceroute
 */
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

/**
 * Tests connection to host and returns either true, false or error.
 * @param {any} primaryIP
 * @param {any} secondaryIP
 * @param {any} region
 */
function TestConnection (primaryIP, secondaryIP, region) {
  appLog.info('| RENDER | Pinging ' + region + '...')

  isAllReachable([
    primaryIP,
    secondaryIP
  ], (err, reachable) => {
    if (reachable === true) {
      return true
    } else if (reachable === false) {
      return false
    } else if (err) {
      appLog.error('| RENDER | Error in status check: ' + err + ' |')
    }
  })
}

/**
 * Runs test connection from parameters and returns log info and
 * sets currentstatus variable accordingly.
 * @param {any} primaryIP
 * @param {any} secondaryIP
 * @param {any} inputRegion
 */
function CheckServer (primaryIP, secondaryIP, inputRegion) {
  if (TestConnection(primaryIP, secondaryIP, inputRegion) === false) {
    appLog.info('| RENDER | ' + inputRegion + ' is offline |')
    currentStatus = statusOptions.OFFLINE
  } else if (TestConnection(primaryIP, secondaryIP, inputRegion) === true) {
    appLog.info('| RENDER | ' + inputRegion + ' is online |')
    currentStatus = statusOptions.ONLINE
  }
}

/**
 * Sets current status to scanning.
 * Runs CheckServer function with paramater of @param region.
 * @export
 * @param {string} region
 */
export function CheckServerStatus (region) {
  currentStatus = statusOptions.SCANNING
  appLog.info('| RENDER | Checking ' + region + ' status...')

  switch (region) {
    case 'US':
      CheckServer(regionIPs.US.primary, regionIPs.US.secondary, region)
      break
    case 'EU':
      CheckServer(regionIPs.EU.primary, regionIPs.EU.secondary, region)
      break
    case 'ASIA':
      CheckServer(regionIPs.ASIA.primary, regionIPs.ASIA.secondary, region)
      break
  }
}

class StatusText extends React.Component {
  render () {
    return (
      <div className='appStatusHeader'>
        <SlideRight as='h1' duration='1s'>Status: <span className={currentStatus.color}>{outputStatusText}</span></SlideRight>
      </div>
    )
  }
}

class StatusIcon extends React.Component {
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
        <StatusText />
        <StatusIcon />
      </section>
    )
  }
}
