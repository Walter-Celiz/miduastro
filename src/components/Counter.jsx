import {useState} from 'preact/hooks'

 function Counter (){
    const [counter, setCounter] = useState(0)

    return (
        <>
        <span class="text-yellow-300 text-xl mr-2">{counter}</span>
        <button class="border px-4 py-2 text-xl" onClick={() => setCounter(counter + 1)}>Increment</button>
        <button class="border px-4 py-2 text-xl" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </>
    )
}

export default Counter