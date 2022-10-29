import React from "react"

export function Tile({value, index}: {value: string, index: number}){
    return <div className="item">
        <div className="index">{index+1}</div>
        <div className="value">{value}</div>
    </div>
}
