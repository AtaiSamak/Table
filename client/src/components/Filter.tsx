import React, { useState, FC, ChangeEvent, useEffect } from "react";
import Select from "./UI/Select";
import "../styles/filter.scss";
import { ComparisonTypes, FilterColumns } from "../types/table";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/table/tableSlice";
import { selectTableStatus } from "../store/table/tableSelectors";

const Filter = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectTableStatus);
	const [searchValue, setSearchValue] = useState("");
	const [column, setColumn] = useState<FilterColumns>("name");
	const [comparison, setComparison] = useState<ComparisonTypes>("equal");

	const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const handleSelectChange =
		(type: "column" | "comparison") =>
		({ target }: ChangeEvent<HTMLSelectElement>) => {
			switch (type) {
				case "column":
					setColumn(target.value as FilterColumns);
					break;
				case "comparison":
					setComparison(target.value as ComparisonTypes);
					break;
			}
		};

	useEffect(() => {
		if (status === "succeeded") {
			dispatch(
				tableActions.filterItems({
					column,
					comparison,
					searchValue,
				})
			);
		}
	}, [searchValue, column, comparison, status]);

	return (
		<div className="filter">
			<Select value={column} onChange={handleSelectChange("column")}>
				<option value="name">Название</option>
				<option value="amount">Количество</option>
				<option value="distance">Расстояние</option>
			</Select>
			<Select value={comparison} onChange={handleSelectChange("comparison")}>
				<option value="equal">Равно</option>
				<option value="contain">Содержит</option>
				<option value="more">Больше</option>
				<option value="less">Меньше</option>
			</Select>
			<input
				className="input"
				value={searchValue}
				onChange={handleSearchValueChange}
				placeholder="Поиск"
			/>
		</div>
	);
};

export default Filter;
