import React from 'react'
import { ipcRenderer } from 'electron'
import { FadeIn, Zoom } from 'animate-components'

import AppWindowControls from './appWindowControls'

const HeaderName = {
  Overwatch: {
    text_enUS: 'Overwatch',
    text_kr: '초과 시청'
  },
  Stat: {
    text_enUS: 'Stat',
    text_kr: '합계'
  }
}

function openSettingsWindow () {
  console.log('Opening settings window')
  ipcRenderer.send('openSettingsWindowMessage')
}

export default class AppHeader extends React.Component {
  render () {
    return (
      <section className='appHeader'>
        <FadeIn as='div' duration='1.5s' className='appHeaderSettingsIcon' onClick={openSettingsWindow}>
          <img draggable='false' src='../static/svg/windowControl_Settings.svg' />
        </FadeIn>
        <Zoom as='h1' duration='1.5s'>
          {HeaderName.Overwatch.text_enUS} <span>{HeaderName.Stat.text_enUS}</span>
        </Zoom>
        <AppWindowControls />
      </section>
    )
  }
}
