import React from "react";
import {Tile} from "./Tile";

export function FizzBuzz({data}: { data: any[] }) {
    return <>{data.map((value, index) => {
        return <Tile value={value} index={index} key={`tile-${index}`}/>;
    })}</>;
}
