import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import { useState } from 'react';
function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const closeAllPopups = () =>{
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        id="avatar-popup"
        title="Обновить аватар"
        buttonText="Сохранить"
        name="avatarForm"
      >
        <input
          id="avatar-input"
          type="url"
          className="input"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="form__input-error avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        id="edit-popup"
        title="Редактировать профиль"
        buttonText="Сохранить"
        name="editProfile"
      >
        <input
          id="name-input"
          type="text"
          className="input"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Ваше Имя"
          required
        />
        <span className="form__input-error name-input-error"></span>
        <input
          id="text-input"
          type="text"
          className="input"
          name="about"
          minLength="2"
          maxLength="200"
          placeholder="Ваша профессия"
          required
        />
        <span className="form__input-error text-input-error"></span>
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups }
        id="item-popup" 
        title="Новое место" 
        buttonText="Сохранить" 
        name="addCards">
        <input
          id="name-item-input"
          type="text"
          className="input"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error name-item-input-error"></span>
        <input
          id="text-item-input"
          type="url"
          className="input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__input-error text-item-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        id="confirm-popup"
        title="Вы уверены?"
        buttonText="Да"
        name="addCards"
      ></PopupWithForm>
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
