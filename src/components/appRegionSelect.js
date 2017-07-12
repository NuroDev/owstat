import React from 'react'
import { Zoom } from 'animate-components'
import { CheckServerStatus } from './appStatus'

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
      <section className='appRegionSelect'>
        <table>
          <tbody>
            <tr>
              <td>
                <Zoom as='div' duration='0.75s' className='regionButton' onClick={() => CheckServerStatus('US')}>
                  <img id='regionUS' src='../static/svg/region_us.svg' />
                  <br />
                  <span>{regionNames.America.text_enUS}</span>
                </Zoom>
              </td>
            </tr>
            <tr>
              <td>
                <Zoom as='div' duration='1.25s' className='regionButton' onClick={() => CheckServerStatus('EU')}>
                  <img id='regionEU' src='../static/svg/region_eu.svg' />
                  <br />
                  <span>{regionNames.Europe.text_enUS}</span>
                </Zoom>
              </td>
            </tr>
            <tr>
              <td>
                <Zoom as='div' duration='1.75s' className='regionButton' onClick={() => CheckServerStatus('ASIA')}>
                  <img id='regionAsia' src='../static/svg/region_asia.svg' />
                  <br />
                  <span>{regionNames.Asia.text_enUS}</span>
                </Zoom>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}
