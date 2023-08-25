export default function ImagePopup({card, onClose}) {

  return(
    <div id="figure-popup" className={`popup popup_bg ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__container-figure">
        <button onClick={onClose} id="popup-close-btn-figure" className="popup__close-btn" type="button"></button>
        <figure className="figure">
          <img className="figure__img" src='asdasdas' alt='asdsad' />
          <figcaption className="figure__img-name"></figcaption>
        </figure>
      </div>
    </div>
  )
}