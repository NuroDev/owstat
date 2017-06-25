import React from 'react';
import { Bounce, Entrance } from 'animate-components';

export default class AppHeader extends React.Component {
    render() {
        return (
            <div className="app appHeader">
                <Entrance as="h1" duration="2.5s">
                    Overwatch <span>Stat</span>
                </Entrance>
            </div>
        )
    }
}
