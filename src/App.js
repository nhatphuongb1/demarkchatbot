import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MessengerCustomerChat from 'react-messenger-customer-chat';


class App extends Component {
  render() {
    return (
      <div className="App">
     

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <MessengerCustomerChat
          pageId="1035675659976102"
          appId="625532594562400"
        />
{/* <div id="fb-root"></div>

   <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '1035675659976102',
        xfbml            : true,
        version          : 'v3.2'
      });
    };
  
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>
    <div
  className="fb-customerchat"
  attribution="setup_tool"
  page_id="625532594562400"
  theme_color="#67b868"
  ></div> */}
      </div>
    );
  }
  y;
}

export default App;
