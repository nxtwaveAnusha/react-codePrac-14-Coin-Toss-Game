import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTosscoin = () => {
    const {total, heads, tails, imgUrl} = this.state

    this.setState(prevTotal => ({total: prevTotal.total + 1}))

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevTail => ({tails: prevTail.tails + 1}))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="descrip">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="img-size" />
          <button
            type="button"
            className="toss-btn"
            onClick={this.onClickTosscoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="value">Total: {total}</p>
            <p className="value">Heads: {heads}</p>
            <p className="value">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
