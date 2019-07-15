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
        <TeamButtons home={true} onTouchdown={() => setHomeScore(homeScore + touchdown)} onFieldGoal={() => setHomeScore(homeScore + fieldGoal)}/>
        <TeamButtons onTouchdown={() => setAwayScore(awayScore + touchdown)} onFieldGoal={() => setAwayScore(awayScore + fieldGoal)}/>
      </section>
    </div>
  );
}

function TeamButtons(props) {
  const prefix = props.home ? "homeButtons" : "awayButtons";
  const label = props.home ? "Home" : "Away";
  return (
    <div className={prefix}>
      <button className={prefix + "__touchdown"} onClick={props.onTouchdown}>{label} Touchdown</button>
      <button className={prefix + "__fieldGoal"} onClick={props.onFieldGoal}>{label} Field Goal</button>
    </div>
  );
}

function TeamScore(props) {
  const prefix = props.home ? "home" : "away";
  return (
    <div className={prefix}>
      <h2 className={prefix + "__name"}>{props.teamName}</h2>
      <div className={prefix + "__score"}>{props.score}</div>
    </div>
  );
}

export default App;
