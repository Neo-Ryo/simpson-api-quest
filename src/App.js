import React from "react";
import "./App.css";
import axios from "axios";
import DisplayQuote from "./component/Quotes";

const defaultQuote = {
  quote: "I'm sleeping in the bath tub.",
  character: "Marge Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  characterDirection: "Right",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: defaultQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote simpson={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          Get a new quote!
        </button>
      </div>
    );
  }
}

export default App;
