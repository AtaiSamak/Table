import { useReducer, useEffect } from "react";

const filterByMore = (data, column, searchValue) =>
    data &&
    data.filter((item) => parseInt(item[column]) > parseInt(searchValue));

const filterByLess = (data, column, searchValue) =>
    data &&
    data.filter((item) => parseInt(item[column]) < parseInt(searchValue));

const filterByEqual = (data, column, searchValue) =>
    data &&
    data.filter(
        (item) =>
            item[column].toString().toLowerCase() === searchValue.toLowerCase()
    );

const filterByContain = (data, column, searchValue) =>
    data &&
    data.filter(
        (item) =>
            item[column]
                .toString()
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) !== -1
    );

const reducer = (state, action) => {
    switch (action.type) {
        case "more": {
            return action.searchValue !== ""
                ? filterByMore(action.data, action.column, action.searchValue)
                : action.data;
        }
        case "less": {
            return action.searchValue !== ""
                ? filterByLess(action.data, action.column, action.searchValue)
                : action.data;
        }
        case "equal": {
            return action.searchValue !== ""
                ? filterByEqual(action.data, action.column, action.searchValue)
                : action.data;
        }
        case "contain": {
            return action.searchValue !== ""
                ? filterByContain(
                      action.data,
                      action.column,
                      action.searchValue
                  )
                : action.data;
        }
        case "reset": {
            return action.data;
        }
        default: {
            return state;
        }
    }
};

const useFilter = (data) => {
    const [filteredItems, filter] = useReducer(reducer, null);

    useEffect(() => {
        filter({ type: "reset", data: data });
    }, [data, filter]);

    return { filteredItems, filter };
};

export default useFilter;
