const DOTS = "...";

const getPagination = ({ size, current }) => {
    const pagination = new Array(size).fill(0).map((_, id) => id);

    if (size <= 7) return pagination;
    else if (current < 5) {
        return [...pagination.slice(0, 7), DOTS, pagination[size - 1]];
    } else if (current > size - 6) {
        return [pagination[0], DOTS, ...pagination.slice(size - 7)];
    } else {
        return [
            pagination[0],
            DOTS,
            ...pagination.slice(current - 2, current + 3),
            DOTS,
            pagination[size - 1],
        ];
    }
};

export default getPagination;
