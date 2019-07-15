//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const touchdown = 7;
const fieldGoal = 3;

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  useEffect(() => {
    let count = 0;
    const timerContainer = document.querySelector('.timer');
    const timer = setInterval(() => {
      count = count + 38;
      timerContainer.textContent = [Math.floor(count / 600), Math.floor((count % 600) / 60), ":", Math.floor((count % 60) / 10), count % 10].join('');
    }, 1000);
    return () => clearInterval(timer);
  });

  const createTeams = (homeTeam, awayTeam) => {
    return {
      home: {
        name: homeTeam,
        score: homeScore,
        scoreSetter: setHomeScore,
        isHome: true,
      },
      away: {
        name: awayTeam,
        score: awayScore,
        scoreSetter: setAwayScore,
        isHome: false,
      },
    }
  }

  const teams = createTeams('Lions', 'Tigers');
  const homeTeam = teams["home"];
  const awayTeam = teams["away"];

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamScore team={homeTeam}/>
          <div className="timer">00:00</div>
          <TeamScore team={awayTeam}/>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <TeamButtons team={homeTeam}/>
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => {
            const newQuarter = quarter < 4 ? quarter + 1 : 1;
            return setQuarter(newQuarter);
          }}>Next Quarter</button>
        </div>
        <TeamButtons team={awayTeam}/>
      </section>
    </div>
  );
}

function TeamButtons(props) {
  const team = props.team;
  const createScoreHandler = (scoreSetter, score, points) => {
    return () => scoreSetter(score + points);
  };
  const prefix = team.isHome ? "homeButtons" : "awayButtons";
  const label = team.isHome ? "Home" : "Away";

  return (
    <div className={prefix}>
      <button className={prefix + "__touchdown"} onClick={createScoreHandler(team.scoreSetter, team.score, touchdown)}>{label} Touchdown</button>
      <button className={prefix + "__fieldGoal"} onClick={createScoreHandler(team.scoreSetter, team.score, fieldGoal)}>{label} Field Goal</button>
    </div>
  );
}

function TeamScore(props) {
  const team = props.team;
  const prefix = team.isHome ? "home" : "away";
  return (
    <div className={prefix}>
      <h2 className={prefix + "__name"}>{team.name}</h2>
      <div className={prefix + "__score"}>{team.score}</div>
    </div>
  );
}

export default App;
