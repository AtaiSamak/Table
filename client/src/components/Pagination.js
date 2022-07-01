import React from "react";
import getPagination from "../helpers/getPagination";
import "../styles/pagination.scss";

const Pagination = ({ pageControl }) => {
    const { next, prev, move, pages, currPage } = pageControl;
    const pagination = getPagination({ size: pages, current: currPage });

    const handleClick = (id) => {
        return () => move(id);
    };

    const items = pagination.map((pageID, id) => (
        <div
            key={id}
            className={pageID === currPage ? "active" : ""}
            onClick={handleClick(pageID)}
        >
            {typeof pageID !== "string" ? pageID + 1 : pageID}
        </div>
    ));

    return (
        <div className="pagination">
            <div onClick={() => prev()}>&laquo;</div>
            {items}
            <div onClick={() => next()}>&raquo;</div>
        </div>
    );
};

export default Pagination;
