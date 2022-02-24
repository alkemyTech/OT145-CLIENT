import { Skeleton } from "@mui/material";
import React from "react";

export default function SkeletonLayout({ children }) {

    console.log(children)

    // children.map((element) => { element.props })

    return (
        <Skeleton>
            {children}
        </Skeleton>
    );
}
