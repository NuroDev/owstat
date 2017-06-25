import React from 'react';
import { Zoom } from 'animate-components';

export default class AppRegionSelector extends React.Component {
    render() {
        return (
            <div className="app appRegionSelect">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Zoom as="div" duration="0.75s" className="regionButton">
                                    <img id="regionUS" className="iconRegion" src="../static/svg/region_us.svg"/>
                                    <br />
                                    <span>America</span>
                                </Zoom>
                            </td>
                            <td>
                                <Zoom as="div" duration="1.25s" className="regionButton">
                                    <img id="regionEU" className="iconRegion" src="../static/svg/region_eu.svg"/>
                                    <br />
                                    <span>Europe</span>
                                </Zoom>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Zoom as="div" duration="1.75s" className="regionButton">
                                    <img id="regionAsia" className="iconRegion" src="../static/svg/region_asia.svg"/>
                                    <br />
                                    <span>Asia</span>
                                </Zoom>
                            </td>
                            <td>
                                <Zoom as="div" duration="2s" className="regionButton">
                                    <img id="regionPTR" className="iconRegion" src="../static/svg/region_ptr.svg"/>
                                    <br />
                                    <span>PTR</span>
                                </Zoom>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
