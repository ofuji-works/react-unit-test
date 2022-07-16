import {RenderResult ,renderHook, act} from '@testing-library/react-hooks'
import {useCounter, UseCounterReturnType} from '../../src/hooks'

describe('useCounter test', () => {

    let result: RenderResult<UseCounterReturnType>
    beforeEach(() => {
        result = renderHook(() => useCounter()).result
    })

    it('countの初期値は0である', () => {
        expect(result.current.count).toBe(0)
    })

    it('increaseを1回実行すると、countは1になる', () => {
        act(result.current.increase)
        expect(result.current.count).toBe(1)
    })

    it('decreaseを1回実行すると、countが-1される', () => {
        act(result.current.decrease)
        expect(result.current.count).toBe(-1)
    })
})