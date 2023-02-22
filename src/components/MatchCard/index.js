// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetals} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetals
  return (
    <div>
      <li className="list-style">
        <img
          className="looo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    </div>
  )
}

export default MatchCard
