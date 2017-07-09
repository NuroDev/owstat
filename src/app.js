import React from 'react'
import * as appLog from 'electron-log'

import AppHeader from './components/appHeader'
import AppRegionSelector from './components/appRegionSelect'
import AppStatus from './components/appStatus'
import AppError from './components/appError'

export default class App extends React.Component {
  componentDidMount () {
    appLog.info('| RENDER | App loaded |')
  }

  render () {
    return (
      <div>
        <AppError />
        <AppHeader />
        <AppRegionSelector />
        <AppStatus />
      </div>
    )
  }
};
