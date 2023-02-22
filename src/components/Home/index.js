// Write your code here
// import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCard: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      teamImageUrl: eachCard.team_image_url,
    }))

    this.setState({teamCard: updatedData, isLoading: false})
  }

  render() {
    const {teamCard, isLoading} = this.state
    return (
      <div className="contain">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="container">
            <div className="logo">
              <img
                className="logoimg"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div>
              <ul className="card">
                {teamCard.map(eachI => (
                  <TeamCard key={eachI.id} details={eachI} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
