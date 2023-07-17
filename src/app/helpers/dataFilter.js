export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()}`;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`
}