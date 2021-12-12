import React, {useState} from 'react'


const Test = () => {
    const [color, setColor] = useState('')

    changeColor = () {
        setColor('red')
    }
    return ( <>
        <button style={{backgroundColor=color}}>Red</button>
    </> );
}
 
export default Test;