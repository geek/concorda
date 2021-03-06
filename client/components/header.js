'use strict'

import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    const handleEditUserProfile = this.props.handleEditUserProfile
    let profile = (
      <div className="col-xs-4 col-sm-6 txt-right">
        <ul className="list-unstyled list-inline">
          <li>
            <a onClick={() => { handleEditUserProfile() }} className="has-icon has-icon-profile">
              <span className="icon icon-profile"></span>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <Link to={'/logout'} className="has-icon has-icon-signout">
              <span className="icon icon-signout"></span>
              <span>Sign out</span>
            </Link>
          </li>
        </ul>
      </div>
    )

    if (!this.props.showProfile) {
      profile = null
    }

    return (
      <header className="header" role="banner">
        <div className="container-fluid">
          <div className="row middle-xs">
            <div className="has-icon col-xs-8 col-sm-6">
              <Link to={'/'} className='logo logo-concorda'></Link>
              <h2 className="m0">Concorda: Dashboard</h2>
            </div>

            {profile}
          </div>
        </div>
      </header>
    )
  }
})
