import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {website: '', username: '', password: '', details: []}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const a = username.length === 0
    const b = password.length === 0
    const c = website.length === 0

    if (a) {
      alert('Enter Username')
    } else if (b) {
      alert('Enter Password')
    } else if (c) {
      alert('Enter Username')
    } else {
      const details = {
        website,
        username,
        password,
      }
      this.setState(prevState => ({
        details: [...prevState.details, details],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  render() {
    const {username, password, website, details} = this.state
    console.log(details)
    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="form-con">
            <form className="form" onSubmit={this.onSubmitForm}>
              <h1 className="add-new-passwd">Add New Password</h1>
              <div className="input-con">
                <div className="logo-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-logo"
                  />
                </div>
                <input
                  placeholder="Enter Website"
                  type="text"
                  className="website-txt"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="input-con">
                <div className="logo-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="website"
                    className="website-logo"
                  />
                </div>
                <input
                  placeholder="Enter Username"
                  type="text"
                  className="website-txt"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-con">
                <div className="logo-img-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="website"
                    className="website-logo"
                  />
                </div>
                <input
                  placeholder="Enter Password"
                  type="text"
                  className="website-txt"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <div className="btn-con">
                <button className="add-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="passwd-manager"
            />
          </div>
          <div className="passwd-con">
            <div className="pass-heading-search-con">
              <div className="pass-heading-con">
                <h1 className="pass-heading">Your Passwords</h1>
                <p className="pass-num">0</p>
              </div>
              <div className="search-con">
                <div className="search-img-con">
                  <img
                    className="search-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="checkbox-pass-con">
              <div className="checkbox-con">
                <input className="chk" id="chkBox" type="checkbox" />
                <label className="show-passwd-heading" htmlFor="chkBox">
                  Show Passwords
                </label>
              </div>
            </div>
            <div className="no-passwd-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwd-img"
              />
              <h1 className="no-passwds">No Passwords</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
