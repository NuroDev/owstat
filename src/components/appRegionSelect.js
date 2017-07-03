import React from 'react'
import { Zoom } from 'animate-components'

const regionNames = {
  America: {
    text_enUS: 'America',
    text_kr: '미국'
  },
  Europe: {
    text_enUS: 'Europe',
    text_kr: '유럽'
  },
  Asia: {
    text_enUS: 'Asia',
    text_kr: '아시아'
  },
  PTR: {
    text_enUS: 'PTR',
    text_kr: 'PTR'
  }
}

export default class AppRegionSelector extends React.Component {
  render () {
    return (
      <div className='app appRegionSelect'>
        <table>
          <tbody>
            <tr>
              <td>
                <Zoom as='div' duration='0.75s' className='regionButton'>
                  <img id='regionUS' className='iconRegion' src='../static/svg/region_us.svg' />
                  <br />
                  <span>{regionNames.America.text_enUS}</span>
                </Zoom>
              </td>
              <td>
                <Zoom as='div' duration='1.25s' className='regionButton'>
                  <img id='regionEU' className='iconRegion' src='../static/svg/region_eu.svg' />
                  <br />
                  <span>{regionNames.Europe.text_enUS}</span>
                </Zoom>
              </td>
            </tr>
            <tr>
              <td>
                <Zoom as='div' duration='1.75s' className='regionButton'>
                  <img id='regionAsia' className='iconRegion' src='../static/svg/region_asia.svg' />
                  <br />
                  <span>{regionNames.Asia.text_enUS}</span>
                </Zoom>
              </td>
              <td>
                <Zoom as='div' duration='2s' className='regionButton'>
                  <img id='regionPTR' className='iconRegion' src='../static/svg/region_ptr.svg' />
                  <br />
                  <span>{regionNames.PTR.text_enUS}</span>
                </Zoom>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
