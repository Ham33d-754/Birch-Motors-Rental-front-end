import { NavLink } from 'react-router-dom'

const Header = ({ clearToken, user }) => {
  let navRole
  if (user && user.role === 'admin') {
    navRole = (
      <div className="nav-role">
        <NavLink to="/register">create new account</NavLink>
        <button onClick={clearToken}>Log out</button>
      </div>
    )
  } else if (user && user.role === 'manager') {
    navRole = (
      <div className="nav-role">
        <NavLink to="/garage/*">Garages</NavLink>
        <button onClick={clearToken}>Log out</button>
      </div>
    )
  } else if (user && user.role === 'user') {
    navRole = (
      <div className="nav-role">
        <button onClick={clearToken}>Log out</button>
      </div>
    )
  } else {
    navRole = (
      <div className="nav-role">
        <NavLink to="/register"> register </NavLink>
        <NavLink to="/signIn"> Log In </NavLink>
      </div>
    )
  }
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {navRole}
      </nav>
    </>
  )
}
export default Header
