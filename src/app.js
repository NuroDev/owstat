import React from 'react'
import * as appLog from 'electron-log'

import AppHeader from './components/appHeader'
import AppRegionSelector from './components/appRegionSelect'
import AppStatus from './components/appStatus'

export default class App extends React.Component {
  componentDidMount () {
    appLog.info('| RENDER | App loaded |')
  }

  render () {
    return (
      <div>
        <AppHeader />
        <AppRegionSelector />
        <AppStatus />
      </div>
    )
  }
};
