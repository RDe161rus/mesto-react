import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [data, setData] = useState('')
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getUserInfo().then(data => {
      setData(data)  
    })
    api.getInitialCards().then((data) => {
    setCards(data)  
  })
  }, []) 
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__profile-group">
          <img
            onClick={onEditAvatar}
            className="profile__avatar"
            src={data.avatar}
            alt="аватар"
          />
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
      
      <Card cards={cards} onCardClick={onCardClick}/>
    </main>
  );
}
