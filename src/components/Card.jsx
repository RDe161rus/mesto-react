export default function Card({card, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(card)
    
  };
  return(
  <div id="template-element" className="template-element">
    <article className="element">
      <img onClick={handleCardClick} className="element__img" src={card.link} alt={card.name}/>
      <h2 className="element__title">{card.name}</h2>
      <div className="like-counter">
        <button className="element__button" type="button"></button>
        <p className="like-counter__card">0</p>
      </div>
      <button className="element__button-del" type="button" ></button>
    </article>
  </div>     
  )
}