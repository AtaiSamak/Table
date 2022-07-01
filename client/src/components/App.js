import React, { createContext, useEffect, useState } from "react";
import Table from "./Table";
import "../styles/app.scss";
import "../styles/table.scss";
import Filter from "./Filter";
import Pagination from "./Pagination";
import useFilter from "../hooks/useFilter";
import usePagination from "../hooks/usePagination";
import getData from "../api/getData";
import Spinner from "./UI/Spinner";

const GlobalContext = createContext();

const MSG_MAP = {
    notFound: <h1>Not found</h1>,
    error: <h1 className="error">Something goes wrong</h1>,
    loading: <Spinner />,
};

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { filteredItems, filter } = useFilter(data);
    const { visibleData, ...pageControl } = usePagination({
        data: filteredItems,
    });

    useEffect(() => {
        (async () => {
            await getData({ setError, setData });
            setLoading(false);
        })();
    }, []);

    const message = MSG_MAP[loading ? "loading" : error ? "error" : "notFound"];
    const isHaveItems = filteredItems && filteredItems.length !== 0;
    const table = (
        <>
            <Table />
            <Pagination pageControl={pageControl} />
        </>
    );

    return (
        <div className="container">
            <GlobalContext.Provider value={{ data: visibleData }}>
                <Filter filter={filter} data={data} />
                {isHaveItems ? table : message}
            </GlobalContext.Provider>
        </div>
    );
};

export default App;
export { GlobalContext };
