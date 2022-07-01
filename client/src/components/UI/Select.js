import React from "react";
import "../../styles/select.scss";

const Select = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <span className="custom-dropdown" ref={ref} {...props}>
            <select>{children}</select>
        </span>
    );
});

export default Select;
