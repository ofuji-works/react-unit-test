import {useState, useCallback} from 'react'

export type UseCounterReturnType = {
    count: number;
    increase: () => void;
    decrease: () => void
}

export const useCounter = () => {
    const [count, setCount ] = useState(0)

    const increase = useCallback(() => {
        setCount(n => n + 1)
    }, [count])

    const decrease = useCallback(() => {
        setCount(n => n - 1)
    }, [count])

    return {count, increase, decrease}
}