import React from 'react'

import AppHeader from './components/appHeader'
import AppRegionSelector from './components/appRegionSelect'
import AppStatus from './components/appStatus'

export default class App extends React.Component {
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
