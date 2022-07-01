import React from "react";
import getFormattedDate from "../helpers/getFormattedDate";

const TbodyItem = ({ data }) => {
    const { date, name, amount, distance } = data;

    return (
        <tr>
            <td>{getFormattedDate(date)}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{distance}</td>
        </tr>
    );
};

export default TbodyItem;
