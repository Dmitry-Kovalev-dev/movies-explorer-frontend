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
  const inputLowerCase = input.toLowerCase();
  if (isShort) {
    return (movie.nameRU.toLowerCase().includes(inputLowerCase) ||
      movie.nameEN.toLowerCase().includes(inputLowerCase)) && movie.duration <= 40
  } else {
    console.log(inputLowerCase);
    return (movie.nameRU.toLowerCase().includes(inputLowerCase) ||
      movie.nameEN.toLowerCase().includes(inputLowerCase))
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
