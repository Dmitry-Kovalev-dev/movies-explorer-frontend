export const formattingTime = (duration) => {
  const minutes = Number(duration);
  if (minutes > 59) {
    const hour = Math.trunc(minutes / 60);
    const minute = minutes - hour * 60;
    return `${hour} ч ${minute} мин`
  } else {
    return `${minutes} мин`
  }
};

export const filter = (movie, input, isShort) => {
  input.toLowerCase();
  if (isShort) {
    return (movie.nameRU.toLowerCase().includes(input) ||
      movie.nameEN.toLowerCase().includes(input)) && movie.duration <= 40
  } else {
    return (movie.nameRU.toLowerCase().includes(input) ||
      movie.nameEN.toLowerCase().includes(input))
  }
};

export const getCountOfRenderItems = () => {
  const parametrs = {};
  const windowWidth = window.innerWidth;
  if (windowWidth > 1279) {
    parametrs.count = 12;
    parametrs.add = 3;
  } else if (windowWidth > 767) {
    parametrs.count = 8;
    parametrs.add = 2;
  } else {
    parametrs.count = 5;
    parametrs.add = 2;
  }
  return parametrs;
};
