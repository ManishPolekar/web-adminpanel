import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        {/*<img src="/search.svg" alt="" className="icon"/>*/}
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="users">
          <img src="data:image/jpeg;base64,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" alt="" />
          <span>Jenny</span>
        </div>
        <img src="/setting.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar