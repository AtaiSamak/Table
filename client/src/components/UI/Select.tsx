import { EventType } from "@testing-library/react";
import React, { ChangeEvent, FC } from "react";
import "../../styles/select.scss";

type Props = {
	children: React.ReactNode;
	value: string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: FC<Props> = ({ children, ...props }) => {
	return (
		<span className="custom-dropdown">
			<select {...props}>{children}</select>
		</span>
	);
};

export default Select;
