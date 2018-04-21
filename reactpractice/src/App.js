import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json";
import "./App.css";



class App extends Component {
    
    // Setting this.state.matches to the matches json array
    state = {
        matches,

    };

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
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
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;