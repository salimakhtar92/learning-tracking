export const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
};

/**
 * Three days ago date
 */
export const getThreeDaysAgoDate = () => {
  const time = Date.now();
  const threeDaysAgo = time - 3*24*60*60*1000;
  const date = new Date(threeDaysAgo);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

/**
 * It will return number of days in a month of year
 * @param {number} year 
 * @param {number} month 
 */
export const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};