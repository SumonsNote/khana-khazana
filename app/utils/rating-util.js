export const ratingStar = (rating) => {
  const fullStar = "⭐️";
  return fullStar.repeat(Math.round(rating));
};
