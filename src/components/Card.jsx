export default function Card({cards, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(cards)
  };
  return(
    <section className="elements">
      {cards.map((item) => (<div key={item._id} id="template-element" className="template-element">
          <article className="element">
            <img onClick={handleCardClick} className="element__img" src={item.link} alt={item.name}/>
            <h2 className="element__title">{item.name}</h2>
            <div className="like-counter">
              <button className="element__button" type="button"></button>
              <p className="like-counter__card">0</p>
            </div>
            <button className="element__button-del" type="button" ></button>
          </article>
        </div>))}
      </section>
  )
}