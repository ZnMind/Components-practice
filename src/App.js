import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [letters, setLetters] = useState('');
  const [tabs, setTabs] = useState([1, 2, 3]);

  useEffect(() => {
    document.getElementById("initial").className += " active";
    document.getElementById("One").style.display = "block";
  }, [])

  const handleChange = () => {
    setCount(count + 1);
  }

  const handleToggle = () => {
    setShow(!show)
  }

  const changeLetters = event => {
    setLetters(event.target.value)
  }

  const openTab = event => {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    document.getElementById("initial").className = "tablinks"
    for (let i = 0; i < tablinks.length; i++) {
      tabcontent[i].style.display = "none";
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(event.target.innerText).style.display = "block";
    event.currentTarget.className += " active";
  }

  /* const createNewTab = () => {
    setTabs(tabs + 1);
    console.log(tabs)
    return <div id={tabs} className="tabcontent">{`Tab ${tabs}`}</div>
  }

  const newTab = () => {
    
  } */

  const Sidebar = props => {
    return <aside>{props.children}</aside>
  }

  const Link = props => {
    return <a>{props.title}</a>
  }

  return (
    <div className="App">
      <div className='Tab-header'>
        <Sidebar>
          <Link title="First link" />
          <Link title="Second link" />
        </Sidebar>

      </div>
      <header id= "App-Header" className="App-header">
        <Tabs
          tab={tabs}
          onClick={openTab}
        />
        <div id="One" className='tabcontent'>
          <Header 
            style={{ color: "lightblue" }}
            text="Easy React Tabs"
          />
          <Welcome
            message="These are simple excercises to work on passing props down the components tree"
            style={{ color: "white" }}
          />
          <Welcome
            message="Click the tabs above to get started!"
            style={{ color: "white" }}
          />
          <Button 
            label="Create Tab"
            onClick={newTab}
          />
        </div>
        <div id="Two" className="tabcontent">
          <Header
            style={{ color: "green" }}
            text={count}
          />
          <Button
            label="Up"
            onClick={handleChange}
          />
          <Button
            label="Down"
            onClick={() => setCount(count - 1)}
          />
          <Welcome
            message="Welcome to the app"
          />
          <Welcome
            message="This simple counter uses the buttons above to handle useState"
          />
        </div>
        <div id="Three" className='tabcontent'>
          <Button
            label={`Toggle ${show ? "Off" : "On"}`}
            onClick={handleToggle}
          />
          <Input
            show={show}
            message={letters}
            onChange={changeLetters}
          />
          <Welcome 
            message="This tab comes with an input box that will display any messages typed inside, as well as a toggle to turn the message on/off"
          />
        </div>
        <div id="Four" className='tabcontent'>
          4
        </div>
      </header>
    </div>
  );
}

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
)

const Header = ({ style, text }) => (
  <h3 style={style}>{text}</h3>
)

const Welcome = ({ message, style }) => (
  <p style={style}>{message}</p>
)

const Input = ({ message, onChange, show }) => (
  <div>
    {show ? <p>{message}</p> : null}
    <input onChange={onChange} placeholder="Type Message Here"></input>
  </div>
)

const Tabs = props => (
    <ul className='tab'>
      <li><a href='#' id="initial" className='tablinks' onClick={props.onClick}>One</a></li>
      <li><a href='#' className='tablinks' onClick={onClick}>Two</a></li>
      <li><a href='#' className='tablinks' onClick={onClick}>Three</a></li>
      <li><a href='#' className='tablinks' onClick={onClick}>Four</a></li>
      {/* props.tab.map((tab, index) => (
        <li><a href='#' key={index} className='tablinks' onClick={props.onClick}>{tab}</a></li>
      )) */}
    </ul>
)

export default App;