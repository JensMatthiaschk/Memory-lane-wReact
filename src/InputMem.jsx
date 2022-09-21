import React from 'react'
import { useState } from 'react';

export default function InputMem() {
    const [mem, setMem] = useState({
        name: '',
        who: '',
        place: '',
        time: '',
        memory: ''
    });


    return (
        <>
            <form>
                <label for="name">Give your Memory a Name</label>
                <input type="text" id="name" />
                <hr />
                <label for="who">Who expirienced it?</label>
                <input type="text" id="who" />

                <hr />
                <label for="place">Where did it happen?</label>
                <input type="text" id="place" /> {/*  maybe later maps */}
                <label for="time">When?</label>
                <input type="date" id="time" />
                <hr />
                <h4>Describe the memory</h4>
                <textarea name="text" id="memory" rows="10" cols="80"></textarea>
                <hr />
                <button onClick={() => {
                    setTitle('');
                    onAddTodo(title);
                }}>Add Memory</button>

            </form>


        </>
    )
}






