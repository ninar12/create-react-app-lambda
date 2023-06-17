import React, { Component } from "react"
import desi_icon from "./desi_team_cap.png"
import "./App.css"
import font from './font.png';
import spotify from './spotify.png';
import soundcloud from './soundcloud.png';
import apple from './apple.png';
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  

  render() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      }, 2000);
    }, []);

    return (
      
      <div className="App">
        {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
        <header className="App-header">
          <div>
          <h3>𝐿𝒾𝓈𝓉𝑒𝓃 𝓉𝑜 𝒮𝑜𝓈𝓎𝓇'𝓈 𝒩𝑒𝓌 𝒮𝒾𝓃𝑔𝓁𝑒 "𝒯𝑒𝒶𝓂 𝒞𝒶𝓅𝓉𝒶𝒾𝓃"</h3>
          <nav>
              <a href='https://open.spotify.com/album/7b5HXYGmzAbTwKM0X2qg9w?si=VAybSnT3SWe6EfWmab_bHw'>ʎɐld on: <img className='spotify' src={spotify}></img>◦</a>
              <a href="https://soundcloud.com/user-653121378/team-captain-wav?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"><img className='soundcloud' src={soundcloud}></img>◦</a>
              <a href='https://music.apple.com/us/album/team-captain-single/1688482348'>◦<img className='apple' src={apple}></img>◦</a>
          </nav>
            <img className='font' src={desi_icon}></img>
           
          </div>
          
        </header>)}
      </div>
    )
  }
}

export default App
