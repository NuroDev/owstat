import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/appHeader';
import AppRegionSelector from './components/appRegionSelect';
import AppStatus from './components/appStatus';
import AppErrorOnLoad from './components/appErrorOnLoad';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <AppRegionSelector />
                <AppStatus />
            </div>
        )
    }
};