// import CSSModules from 'react-css-modules';
// import styles from './app.css';
import React from 'react';
import {Link} from 'react-router-dom'




export default class Root extends React.Component {
  constructor() {
    super()
  }


  purchaseHandler() {
    // this.props.history.push('/is-ecommerce/buy');
  }

  componentDidMount() {
    // console.info(cssLoader('../../src/app.css'));

  }


  render() {
    return (
      <div className="container">
        <h1 className="product-title">Ethereum Miner 50MH</h1>

        <div className="text-container">
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

        <Link to="/buy"  onClick={() => this.purchaseHandler() }
              className="song-drop-down-add-to-btn">click here to purchase the mining rig</Link>

      </div>
    )
  }
}
// export default CSSModules(Root, styles);