import './index.css'

const PasswordItem = props => {
  const {each, checkBox, clickDelete} = props
  const {website, username, password, id, bgColor} = each
  const onClickDelete = () => {
    clickDelete(id)
  }
  const starImg = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const password1 = <p className="con2-password">{password}</p>
  const check = checkBox ? password1 : starImg
  return (
    <li className="con1" key={id}>
      <div className="con3">
        <p className={`con1-heading ${bgColor}`}>{username[0]}</p>
        <div className="con2">
          <p className="con2-website">{website}</p>
          <p className="con2-username">{username}</p>
          {check}
        </div>
      </div>
      <button
        data-testid="delete"
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
}

export default PasswordItem
