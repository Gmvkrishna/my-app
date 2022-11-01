import React from 'react';
import "./App.css";

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      image: null,
      height: null,
      homeworld: null,
    }
  }
 
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88 )
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
    this.setState ({
      image: data.image,
      name: data.name,
      height: data.height,
      homeworld: data.homeworld,
      loadedCharacter: true,
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
        <div>
          <img src={this.state.image} alt="" id="img"/>
          <h1>{this.state.name}</h1>
          
          <p>Height: {this.state.height} cm</p>
          <p>HomeWorld: {this.state.homeworld}</p>
        </div>
        }   
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Generate character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
