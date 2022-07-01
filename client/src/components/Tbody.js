import React, { useContext, useMemo } from "react";
import { GlobalContext } from "./App";
import TbodyItem from "./TbodyItem";

const Tbody = () => {
    const { data } = useContext(GlobalContext);

    const items = useMemo(() => {
        return (
            data &&
            data.map(({ id, ...data }) => <TbodyItem key={id} data={data} />)
        );
    }, [data]);

    return <tbody>{items}</tbody>;
};

export default Tbody;
