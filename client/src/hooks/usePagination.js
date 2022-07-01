import { useEffect, useState } from "react";

const ROW_COUNT = 5;

const usePagination = ({ data }) => {
    const [pages, setPages] = useState(0);
    const [currPage, setCurrPage] = useState(0);
    const [visibleData, setVisibleData] = useState(null);

    useEffect(() => {
        setCurrPage(0);
        if (data) setPages(Math.ceil(data.length / ROW_COUNT));
    }, [data]);

    useEffect(() => {
        if (data) {
            setVisibleData(
                data.slice(
                    currPage * ROW_COUNT,
                    currPage * ROW_COUNT + ROW_COUNT
                )
            );
        }
    }, [data, currPage]);

    const next = () => {
        if (currPage < pages - 1) setCurrPage(currPage + 1);
    };

    const prev = () => {
        if (currPage > 0) setCurrPage(currPage - 1);
    };

    const move = (page) => {
        if (page >= 0 && page < pages && currPage !== page) setCurrPage(page);
    };

    return { pages, currPage, visibleData, next, prev, move };
};

export default usePagination;
