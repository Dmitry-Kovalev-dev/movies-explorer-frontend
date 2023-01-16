
export const mainClassNavLink = 'navigation__link';
export const navClasses = {
  link: mainClassNavLink,
  active: `${mainClassNavLink}_active`,
  main: `${mainClassNavLink}_type_main`,
  profile: `${mainClassNavLink}_type_profile`,
};

export const baseUrl = 'http://localhost:3005';
export const movieUrl = 'https://api.nomoreparties.co/beatfilm-movies'
export const emailRegExp = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,5}$';

export const textValue = {
  signInBtnValue: 'Войти',
  singInBtnProcess: 'Входим...',
  signUpBtnValue: 'Зарегистрироваться',
  singUpBtnProcess: 'Регистрируем...',
  popupSignInSuccess: 'Вход выполнен',
  popupSignOutSucces: 'Вы вышли из системы',
  popupEditProfileSuccess: 'Данные обновлены!',
  greetSignIn: 'Рады видеть!',
  greetSignUp: 'Добро пожаловать!',
  greetProfile: 'Привет, ',
  placeholderNormal: 'Фильм',
  placeholderInvald: 'Нужно ввести ключевое слово',
};

export const pathValue = {
  movies: '/movies',
  saved: '/saved',
  profile: '/profile',
  main: '/',
  signIn: '/signin',
  signUp: '/signup',
  notFound: '/404',
};

export const LSItem = {
  allMovies: 'allFilms',
  filteredMovies: 'filteredMovie',
  savedMovies: 'savedMovie',
  checkbox: 'checked',
  input: 'input',
};
