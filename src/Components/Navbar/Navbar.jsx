import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/users" activeClassName={s.active} >Users</NavLink>
    </div>
  </nav>
}

export default Navbar