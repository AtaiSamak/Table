const addZero = (num) => (num > 9 ? num : "0" + num);

const getFormattedDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    return `${addZero(day)}/${addZero(month)}/${year}`;
};

export default getFormattedDate;
