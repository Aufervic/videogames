import style from './Card.module.css'

const Card = ({id, name, image, genres}) => {

  return (
    <div className={style.Card}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{image}</p>
      <p>{genres}</p>
    </div>
  )
}

export default Card