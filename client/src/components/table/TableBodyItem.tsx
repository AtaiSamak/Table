import React, { FC } from "react";
import DateUtils from "../../helpers/date";
import { TableItem } from "../../types/table";

type Props = {
	data: TableItem;
};

const TableBodyItem: FC<Props> = ({ data }) => {
	const { date, name, amount, distance } = data;

	return (
		<tr>
			<td>{DateUtils.format(date)}</td>
			<td>{name}</td>
			<td>{amount}</td>
			<td>{distance}</td>
		</tr>
	);
};

export default TableBodyItem;
