import React from "react";
import "./PianoKey.css";

export function PianoKey(props) { 
    return ( 
    <div className={`piano-key ${props.isActive ? "active" : ""}`} 
    onMouseDown={() => props.onPress(props.note)} 
    onMouseUp={() => props.onPress(null)}> 
    {props.isActive && <h1 className="note-label">{props.note}</h1>} 
    </div> 
    ); 
}
