export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()}`;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`
}

export const formatToLocalDateTime = (dateString) => {
  const [year, month, day] = dateString.split('-');
  const date = new Date(year, month - 1, day);
  const formattedDate = date.toISOString();
  return formattedDate;
}

export const formatNameSearch = (name) => {
  const newName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
  return newName;
}