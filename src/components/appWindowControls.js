import React from 'react'
import { ipcRenderer } from 'electron'
import * as appLog from 'electron-log'
import { FadeIn } from 'animate-components'

function minimizeApplication () {
  appLog.info('| RENDER | Minimizing app |')
  ipcRenderer.send('minimizeApplicationMessage')
}

function closeApplication (focusedWindow) {
  appLog.info('| RENDER | Closing app |')
  ipcRenderer.send('closeApplicationMessage')
}

export default class AppWindowControls extends React.Component {
  render () {
    if (process.platform === 'win32') {
      return (
        <FadeIn duration='1s' as='div' className='appHeaderWindowControls'>
          <img onClick={minimizeApplication} draggable='false' src='../static/svg/windowControl_Minimize.svg' />
          <img id='windowControlMaximize' draggable='false' src='../static/svg/windowControl_Maximize.svg' />
          <img onClick={closeApplication} draggable='false' src='../static/svg/windowControl_Close.svg' />
        </FadeIn>
      )
    } else {
      return null
    }
  }
}
