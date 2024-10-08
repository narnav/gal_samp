import React, { useState } from 'react'


const App = () => {
    const [x, setx] = useState(-7)

    return (
        <div>App
            <h1>{x * 7}</h1>
            <button onClick={()=>setx(9)} >clear <h1>{x}</h1></button>
            <button onClick={()=>setx(x-1)} >sub <h1>{x}</h1></button>
            <button onClick={()=>setx(x+1)} >add <h1>{x}</h1></button>
        </div>
    )
}

export default App