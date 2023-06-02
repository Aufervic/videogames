import {NavLink} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <NavLink to='/home'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/form'>
        <button>Form</button>
      </NavLink>
      <NavLink to='/detail'>
        <button>Detail</button>
      </NavLink>
      <NavLink to='/'>
        <button>Exit</button>
      </NavLink>
    </div>
  )
}

export default NavBar