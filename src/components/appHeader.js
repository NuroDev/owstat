import React from 'react'
import { Zoom } from 'animate-components'

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

export default class AppHeader extends React.Component {
  render () {
    return (
      <section className='appHeader'>
        <Zoom as='h1' duration='1.5s'>
          {HeaderName.Overwatch.text_enUS} <span>{HeaderName.Stat.text_enUS}</span>
        </Zoom>
        <AppWindowControls />
      </section>
    )
  }
}
