// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import MatchCard from '../MatchCard'

import './index.css'

class LatestMatch extends Component {
  state = {matchDetails: {}, recentMatches: [], bannerUrl: '', isLoading: true}

  componentDidMount() {
    this.getLatestMatches()
  }

  getLatestMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // const {latest_match_details, recent_matches, team_banner_url} = data
    const updated = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updated

    const updatedMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatchs = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    this.setState({
      matchDetails: updatedMatchDetails,
      recentMatches: updatedRecentMatchs,
      bannerUrl: teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {matchDetails, recentMatches, bannerUrl, isLoading} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = matchDetails
    return (
      <div className="jjj">
        {isLoading ? (
          <div className="jj" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="team-container">
            <div>
              <img className="banner" src={bannerUrl} alt="team banner" />
            </div>
            <h1>Latest Matches</h1>
            <div className="connn">
              <div className="right">
                <p>{competingTeam}</p>
                <p>{date}</p>
                <p>{venue}</p>
                <p>{result}</p>
              </div>
              <div>
                <img
                  className="comlogo"
                  src={competingTeamLogo}
                  alt={`latest match ${competingTeam}`}
                />
              </div>
              <div className="left">
                <h1>First Innings</h1>
                <p>{firstInnings}</p>
                <h1>Second Innings</h1>
                <p>{secondInnings}</p>
                <h1>Man Of The Match</h1>
                <p>{manOfTheMatch}</p>
                <h1>Umpires</h1>
                <p>{umpires}</p>
              </div>
            </div>
            <div>
              <ul className="unlist">
                {recentMatches.map(eachMatch => (
                  <MatchCard key={eachMatch.id} matchDetals={eachMatch} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default LatestMatch
