import Card from "../card/Card"
import style from './Cards.module.css'

const Cards = () => {
  const videogames = [
    {
      id: 1,
      name: 'FIFA',
      image: 'url',
      genres: ['accion', 'aventura']// ojazo
    },
    {
      id: 2,
      name: 'FEAR',
      image: 'url 2',
      genres: ['aventura', 'FPS']// ojazo
    },
  ]

  return (
    <div className={style.Cards}>
      {
        videogames.map( v => (
          <Card
            key={v.id}
            id={v.id}
            name={v.name}
            image={v.image}
            genres={v.genres}
          />
        ))
      }
    </div>
  )
}

export default Cards