import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    details: [],
    checkBox: false,
    search: '',
  }

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
        id: uuidv4(),
      }
      this.setState(prevState => ({
        details: [...prevState.details, details],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  clickDelete = id => {
    this.setState(prevState => ({
      details: [...prevState.details.filter(each => each.id !== id)],
    }))
  }

  onClickChkbox = () => {
    this.setState(prevState => ({checkBox: !prevState.checkBox}))
  }

  render() {
    const {username, password, website, details, checkBox, search} = this.state
    console.log(username, password, website)
    const res1 = details.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    const noPass = (
      <div className="no-passwd-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwd-img"
        />
        <h1 className="no-passwds">No Passwords</h1>
      </div>
    )

    const pass = (
      <ul className="ul-con">
        {res1.map(each => {
          const onClickDelete = () => {
            this.clickDelete(each.id)
          }
          const starImg = (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )
          const password1 = <p className="con2-password">{each.password}</p>
          const check = checkBox ? starImg : password1
          return (
            <li className="con1" key={each.id}>
              <div className="con3">
                <h1 className="con1-heading">{each.username[0]}</h1>
                <div className="con2">
                  <p className="con2-website">{each.website}</p>
                  <p className="con2-username">{each.username}</p>
                  {check}
                </div>
              </div>
              <button
                type="button"
                className="delete-btn"
                onClick={onClickDelete}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  className="delete"
                />
              </button>
            </li>
          )
        })}
      </ul>
    )
    console.log(details.length)
    const res = details.length === 0 || res1.length === 0 ? noPass : pass
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
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="checkbox-pass-con">
              <div className="checkbox-con">
                <input
                  className="chk"
                  onClick={this.onClickChkbox}
                  id="chkBox"
                  type="checkbox"
                />
                <label className="show-passwd-heading" htmlFor="chkBox">
                  Show Passwords
                </label>
              </div>
            </div>
            {res}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
