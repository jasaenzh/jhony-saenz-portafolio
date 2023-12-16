const convertToSequelizeDate = (dateString: string) => {
  const day = dateString.split("/")[0];
  const month = dateString.split("/")[1];
  const year = dateString.split("/")[2];
  const formattedDate = `${year}-${month}-${day} 00:00:00`;
  const date = new Date(formattedDate);
  return date;
};

export { convertToSequelizeDate }