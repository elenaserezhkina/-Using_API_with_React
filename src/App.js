import React from "react";
import QuotedCard from "./components/QuotedCard";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someQuote: null
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          someQuote: data[0]
        });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.someQuote && (
          <QuotedCard someQuote={this.state.someQuote} />
        )}
        <button type="button" onClick={this.getQuote}>
          Get quoted card
        </button>
      </div>
    );
  }
}

export default App;
