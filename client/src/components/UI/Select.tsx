import { EventType } from "@testing-library/react";
import React, { ChangeEvent, FC } from "react";
import styles from "../../styles/UI/select.module.scss";

type Props = {
	children: React.ReactNode;
	value: string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: FC<Props> = ({ children, ...props }) => {
	return (
		<span className={styles.customDropdown}>
			<select {...props}>{children}</select>
		</span>
	);
};

export default Select;
