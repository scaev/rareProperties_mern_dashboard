import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
<div>title</div>
    );
};
