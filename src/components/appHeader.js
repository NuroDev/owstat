import React from 'react';
import { Entrance, SlideRight } from 'animate-components';

export default class AppHeader extends React.Component {
    render() {
        var doRenderWindowControls = null;
        if (process.platform === 'win32') {
            doRenderWindowControls = (
                <SlideRight duration="1s" as="div" className="appWin32WindowControls">
                    <img id="windowControlMinimize" className="iconWindowControls" src="../static/svg/windowControl_Minimize.svg"/>
                    <img id="windowControlMaximize" className="iconWindowControls" src="../static/svg/windowControl_Maximize.svg"/>
                    <img id="windowControlClose" className="iconWindowControls" src="../static/svg/windowControl_Close.svg"/>
                </SlideRight>
            );
        }

        return (
            <div className="app appHeader">
                <Entrance as="h1" duration="2.5s">
                    Overwatch <span>Stat</span>
                </Entrance>
                {doRenderWindowControls}
            </div>
        )
    }
}
