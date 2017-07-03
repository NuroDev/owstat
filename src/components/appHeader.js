import React from 'react';
import { Entrance, FadeIn } from 'animate-components';

import AppWindowControls from './appWindowControls';

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
        return (
            <div className="app appHeader">
                <Entrance as="h1" duration="2.5s">
                    {HeaderName.Overwatch.text_enUS} <span>{HeaderName.Stat.text_enUS}</span>
                </Entrance>
                <AppWindowControls />
            </div>
        )
    }
}
