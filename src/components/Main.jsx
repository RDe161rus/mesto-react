import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.error(err);
      });
    api
      .getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__profile-group">
          <div className="profile__overlay">
            <img
              onClick={onEditAvatar}
              className="profile__avatar"
              src={data.avatar}
              alt="аватар"
            />
          </div>

          <div className="profile__profile-info">
            <h1 className="profile__title">{data.name}</h1>
            <button
              onClick={onEditProfile}
              id="opened-popup-btn"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__text">{data.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          id="opened-add-button"
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="elements">
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
