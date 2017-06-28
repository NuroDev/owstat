import React from 'react'
import { Zoom, SlideRight } from 'animate-components';

const statusOptions = {
    ONLINE: {
        text: "ONLINE",
        color: "onlineGreen",
        icon: <img id="statusOnlineSVG" className="iconStatus" src="../static/svg/status_online.svg"/>
    },
    OFFLINE: {
        text: "OFFLINE",
        color: "offlineRed",
        icon: <img id="statusOfflineSVG" className="iconStatus" src="../static/svg/status_offline.svg"/>
    },
    SCANNING: {
        text: "SCANNING",
        color: "scanningBlue",
        icon: <img id="statusScanningSVG" className="iconStatus iconStatusScanning" src="../static/svg/status_scanning.svg"/>
    },
    ERROR: {
        text: "ERROR",
        color: "errorYellow",
        icon: <img id="statusErrorSVG" className="iconStatus" src="../static/svg/status_error.svg"/>
    }
}

var currentStatus = statusOptions.ONLINE;

export default class AppStatus extends React.Component {
    render() {
        return (
            <div className="app appStatus">
                <div className="appStatusHeader">
                    <SlideRight as="h1" duration="1s">Status: <span className={currentStatus.color}>{currentStatus.text}</span></SlideRight>
                </div>
                <Zoom duration="1.5s">
                    {currentStatus.icon}
                </Zoom>
            </div>
        )
    }
}
