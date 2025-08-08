const Header = ({ clearToken, user }) => {
  return <>{user ? <button onClick={clearToken}>Log out</button> : null}</>
}
export default Header
