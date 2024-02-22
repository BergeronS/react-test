import React from 'react'
import './application.css';
import phone from '../../assets/Iphone template.png';
import app_store from '../../assets/app_store.png';
import google_play from '../../assets/Google_play.png';

const Application = () => {
  return (
    <div className="application__main">
      <div className="application__section">
        <img id="iphone1" className="iphone" src={phone} alt="Iphone" />
        <img id="iphone2" className="iphone" src={phone} alt="Iphone" />
      </div>
      <div className="application__section">
        <div className="application__sub-section">
          <p id="take_care">Take care of yourself.</p>
          <p id="recharge">Recharge your social battery.</p>
        </div>
        <div className="application__sub-section">
          <div>
          <a href="https://linktr.ee/theintrovertapp" target='_blank'><img src={app_store} id="app_store" alt="App Store"/></a>
          </div>
          <div>
          <a href="https://linktr.ee/theintrovertapp" target='_blank'><img src={google_play} id="google_play" alt="Google Play"/></a>
          </div>
        </div>
      </div>
      <div className="application__section">
        <img id="iphone3" className="iphone" src={phone} alt="Iphone" />
        <img id="iphone4" className="iphone" src={phone} alt="Iphone" />
      </div>
      
    </div>
  )
}

export default Application