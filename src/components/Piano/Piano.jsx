import React, { useState } from "react";
import "./Piano.css";
import {PianoKey} from '../PianoKey/PianoKey';

export function Piano() {
    const notes = ["До", "Ре", "Мі", "Фа", "Соль", "Ля", "Сі"];
    const [activeNote, setActiveNote] = useState(null);
    const handleKeyPress = (note) => {
        setActiveNote(note);
    };
    return (
        <div className="piano">
            {notes.map((note) => (
                <PianoKey 
                key={note} 
                note={note} 
                isActive={activeNote === note} 
                onPress={handleKeyPress} />
            ))}
        </div>
    )
}