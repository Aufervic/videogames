import {NavLink} from 'react-router-dom'

const Landing = () => {

  return (
    <div>
      <h1>Bienvenido a mi proyecto de videojuegos</h1>
      <NavLink to='/home'>
        <button>INGRESAR</button>
      </NavLink>
    </div>
  )
}

export default Landing