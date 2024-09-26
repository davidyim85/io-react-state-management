import { useState } from "react"


const Cats = () => {
    const [cats, setCats] = useState([
        { name: 'Myshka', breed: 'Ragdoll' },
        { name: 'Malta', breed: 'Turkish Angora' },
        { name: 'Bread', breed: 'Bread Cat' },
    ]);
       
    return (
        <div>
            <p>start of Cats component</p>
            <button
                onClick={() => setCats([ ...cats, { name: 'Kira', breed: 'Ragamuffin' },])}
            >
                Add Cat
            </button>

            <ul>
                {cats.map((cat, idx) => (
                    <li key={idx}> {cat.name}:{cat.breed}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cats