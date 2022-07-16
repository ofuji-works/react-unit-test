import {useState, useCallback} from 'react'

export const useCounter = () => {
    const [count, setCount ] = useState(0)

    const increase = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)
    }, [count])

    const decrease = useCallback(() => {
        const newCount = count - 1
        setCount(newCount)
    }, [count])

    return {count, increase, decrease}
}