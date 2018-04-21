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


    render() {
        return (
            <Wrapper>
                <Title>This is me, MARIO!</Title>
     

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