import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";

function shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

class App extends Component {
    
    // Setting this.state.matches to the matches json array
    state = {
        matches,
        shuffleData
    };



    render() {
        return (
            <Wrapper>
                <Title>This is me, MARIO!</Title>
                <br/>

                {this.state.matches.map(match => (
                    <MatchCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                        handleShuffle={this.handleShuffle}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;