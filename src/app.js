import React from 'react'

import AppHeader from './components/appHeader'
import AppRegionSelector from './components/appRegionSelect'
import AppStatus from './components/appStatus'

const appLog = require('electron-log')

export default class App extends React.Component {
  render () {
    appLog.info('| RENDER | Online: Loading app |')
    return (
      <div>
        <AppHeader />
        <AppRegionSelector />
        <AppStatus />
      </div>
    )
  }
};
