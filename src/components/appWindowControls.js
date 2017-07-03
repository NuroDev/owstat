import React from 'react';
import { ipcRenderer as ipcRenderer } from 'electron';
import { FadeIn } from 'animate-components';

function minimizeApplication() {
    console.log('Minimizing App');
    ipcRenderer.send('asynchronous-message', 'minimizeApplicationMessage');
}

function closeApplication(focusedWindow) {
    console.log('Closing App');
    ipcRenderer.send('asynchronous-message', 'closeApplicationMessage');
}

export default class AppWindowControls extends React.Component {
    render() {
        if (process.platform === 'win32') {
            return (
                <FadeIn duration="1s" as="div" className="iconWindowControls appWin32WindowControls">
                    <img id="windowControlMinimize" onClick={minimizeApplication} draggable="false" src="../static/svg/windowControl_Minimize.svg"/>
                    <img id="windowControlMaximize" draggable="false" src="../static/svg/windowControl_Maximize.svg"/>
                    <img id="windowControlClose" onClick={closeApplication} draggable="false" src="../static/svg/windowControl_Close.svg"/>
                </FadeIn>
            )
        }
    }
}
