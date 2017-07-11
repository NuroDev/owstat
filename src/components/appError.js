import React from 'react'
import * as appLog from 'electron-log'
import { Zoom } from 'animate-components'

import AppWindowControls from './appWindowControls'

const isOnline = require('is-online')

const errorText = {
  header: {
    prefix: {
      text_enUS: 'Error:',
      text_kr: '오류:'
    },
    postfix: {
      no_internet: {
        text_enUS: 'Offline',
        text_kr: '오프라인'
      },
      unknown: {
        text_enUS: 'Unkown error',
        text_kr: '알수없는 오류'
      }
    }
  },
  sub_header: {
    no_internet: {
      text_enUS: 'No Internet Connection',
      text_kr: '인터넷에 연결되어 있지 않습니다'
    },
    unknown: {
      text_enUS: 'Please restart the app',
      text_kr: '알수없는 오류'
    }
  }
}

var connectionStatus = false

function CheckOnline () {
  isOnline().then(online => {
    if (online === true) {
      connectionStatus = true
    } else {
      connectionStatus = false
    }
  })
}

CheckOnline()

export default class AppErrorOnLoad extends React.Component {
  componentDidMount () {
    appLog.info('| RENDER | Online: ' + connectionStatus)
  }

  render () {
    if (connectionStatus === true) {
      return null
    } else if (connectionStatus === false) {
      return (
        <section className='appErrorOnload'>
          <AppWindowControls />
          <div className='appErrorContent'>
            <Zoom duration='2.5s' as='img' id='errorOnLoadIcon' draggable='false' src='../static/svg/status_offline.svg' />
            <Zoom duration='1.5s'>
              <h1>{errorText.header.prefix.text_enUS} <span>{errorText.header.postfix.no_internet.text_enUS}</span></h1>
              <p>{errorText.sub_header.no_internet.text_enUS}</p>
            </Zoom>
          </div>
        </section>
      )
    }
  }
}
