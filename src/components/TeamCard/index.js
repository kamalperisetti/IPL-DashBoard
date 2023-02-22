// Write your code here
/*
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    return <div>Hello</div>
  }
}
*/
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, teamImageUrl, id} = details

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="list">
          <img className="teamImage" src={teamImageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
