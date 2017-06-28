import React from 'react';
import { Entrance, FadeIn } from 'animate-components';

const HeaderName = {
    Overwatch: {
        text_enUS: "Overwatch",
        text_kr: "초과 시청"
    },
    Stat: {
        text_enUS: "Stat",
        text_kr: "합계"
    }
}

export default class AppHeader extends React.Component {
    render() {
        var doRenderWindowControls = null;
        if (process.platform === 'win32') {
            doRenderWindowControls = (
                <FadeIn duration="1s" as="div" className="appWin32WindowControls">
                    <img id="windowControlMinimize" className="iconWindowControls" src="../static/svg/windowControl_Minimize.svg"/>
                    <img id="windowControlMaximize" className="iconWindowControls" src="../static/svg/windowControl_Maximize.svg"/>
                    <img id="windowControlClose" className="iconWindowControls" src="../static/svg/windowControl_Close.svg"/>
                </FadeIn>
            );
        }

        return (
            <div className="app appHeader">
                <Entrance as="h1" duration="2.5s">
                    {HeaderName.Overwatch.text_enUS} <span>{HeaderName.Stat.text_enUS}</span>
                </Entrance>
                {doRenderWindowControls}
            </div>
        )
    }
}
