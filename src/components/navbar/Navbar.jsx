import React from 'react';
import logo from '../../assets/theintrovertapp_logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="theintrovertapp__navbar">
        <div className="theintrovertapp__navbar-links">
            <div className="theintrovertapp__navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="theintrovertapp__navbar-links_name">
                <p>The Introvert App</p>
            </div>
            <div className="theintrovertapp__navbar-links_blog">
                <p><a href="https://linktr.ee/theintrovertapp" target='_blank'>Blog</a></p>
            </div>
            <div className="theintrovertapp__navbar-links_faq">
                <p><a href="https://linktr.ee/theintrovertapp" target='_blank'>FAQ</a></p>
            </div>
            <div className="theintrovertapp__navbar-links_button">
                <button><a href="https://linktr.ee/theintrovertapp" target='_blank'>Download</a></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar