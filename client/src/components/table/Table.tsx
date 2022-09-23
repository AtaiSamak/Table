import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "../../styles/table/table.module.scss";

const Table = () => {
	return (
		<table className={styles.table}>
			<TableHead />
			<TableBody />
		</table>
	);
};

export default Table;
