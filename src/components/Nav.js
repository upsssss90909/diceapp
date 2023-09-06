import './Nav.css'




function Nav() {
  return (
     <>
        <div id="nav">
        <div className="left">
    <img src="../images/logo.png" alt='logo'></img>
        </div>
        <div className="middle">
          <ul>
            <li><a href="">home</a></li>
            <li><a href="">gallery</a></li>
            <li><a href="">comment</a></li>
            <li><a href="">contact</a></li>
          </ul>

        </div>
        <div className="right">
            <a href="">login</a>
        </div>

        </div>
    </>
  )
}
export default Nav;
