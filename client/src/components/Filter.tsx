import React, { useState, FC, ChangeEvent, useEffect } from "react";
import Select from "./UI/Select";
import "../styles/filter.scss";
import { ComparisonTypes, FilterColumns } from "../types/table";
import { useDispatch } from "react-redux";
import { tableActions } from "../store/table/tableSlice";

type Props = {};

const Filter: FC<Props> = () => {
	const [searchValue, setSearchValue] = useState("");
	const [column, setColumn] = useState<FilterColumns>("name");
	const [comparison, setComparison] = useState<ComparisonTypes>("equal");
	const dispatch = useDispatch();

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
		dispatch(
			tableActions.changeFilterOptions({
				column,
				comparison,
				searchValue,
			})
		);
	}, [searchValue, column, comparison]);

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
