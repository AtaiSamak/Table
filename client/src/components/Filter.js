import React, { useEffect, useState } from "react";
import Select from "./UI/Select";
import "../styles/filter.scss";

const Filter = ({ filter, data }) => {
    const [input, setInput] = useState("");
    const [column, setColumn] = useState("name");
    const [comparison, setComparison] = useState("equal");

    useEffect(() => {
        filter({
            type: comparison,
            column: column,
            searchValue: input,
            data: data,
        });
    }, [input, column, comparison, filter, data]);

    const handleInputChange = ({ target }) => {
        setInput(target.value);
    };

    const handleColumnChange = ({ target }) => {
        setColumn(target.value);
    };

    const handleComparisonChange = ({ target }) => {
        setComparison(target.value);
    };

    return (
        <div className="filter">
            <Select value={column} onChange={handleColumnChange}>
                <option value="name">Название</option>
                <option value="amount">Количество</option>
                <option value="distance">Расстояние</option>
            </Select>
            <Select value={comparison} onChange={handleComparisonChange}>
                <option value="equal">Равно</option>
                <option value="contain">Содержит</option>
                <option value="more">Больше</option>
                <option value="less">Меньше</option>
            </Select>
            <input
                className="input"
                value={input}
                onChange={handleInputChange}
                placeholder="Поиск"
            />
        </div>
    );
};

export default Filter;
