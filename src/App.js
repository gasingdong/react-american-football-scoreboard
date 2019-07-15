//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const touchdown = 7;
  const fieldGoal = 3;

  const homeTeam = 'Lions';
  const awayTeam = 'Tigers';

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamScore home={true} teamName="Lions" score={homeScore}/>  
          <div className="timer">00:03</div>
          <TeamScore teamName="Tigers" score={awayScore}/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + touchdown)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + fieldGoal)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + touchdown)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + fieldGoal)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

function TeamScore(prop) {
  const prefix = prop.home ? "home" : "away";
  return (
    <div className={prefix}>
      <h2 className={prefix + "__name"}>{prop.teamName}</h2>
      <div className={prefix + "__score"}>{prop.score}</div>
    </div>
  );
}

export default App;
