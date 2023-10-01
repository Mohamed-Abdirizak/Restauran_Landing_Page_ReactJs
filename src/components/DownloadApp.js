import React from 'react'
import './DownloadApp.css'
import iphoneLogo from '../assets/Icons/iphone.png'
import storeLogo from '../assets/Icons/play_store.png'
import device from '../assets/Icons/device.png'
const DownloadApp = ({myTheme}) => {
    return (
        <div className=' dmain' data-theme={myTheme}>
            {/* left side */}
            <div className='paddingss d-left'>
                <div className='d-topic'>
                    Download App
                </div>
                <div className='d-desc-main'>
                    <div className='line1'>
                        <h4 className='people'>People around you are ordering delicious</h4>
                    </div>
                    <div className='line2'>
                        <h4 className='meals'>meals using the</h4>
                        <h4 className='treact'>Treact App.</h4>
                    </div>
                </div>
                <div className='iphoneStore'>
                    <div className='iphone'>
                        <div className='ilogo'>
                            <img src={iphoneLogo} alt='iphone logo' />
                        </div>
                        <div className='itext'>
                            <h4>APP STORE</h4>
                        </div>
                    </div>
                    <div className='plays'>
                        <div className='playLogo'>
                            <img src={storeLogo} alt='play store logo' />
                        </div>
                        <div className='ptext'>
                            <h4>PLAY STORE</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='paddingss d-right'>
                <div className='imageDivClass'>
                <img src={device} alt='device image' />


                </div>
            </div>

        </div>
    )
}

export default DownloadApp