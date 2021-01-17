import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";

import { usePrevious } from "../hooks";

describe('use previous hook test', () => {
    it('logic test', () => {
        const initial = 1;
        const { result } = renderHook(() => {
            const [value, setValue] = useState(initial);
            const previous = usePrevious(value);
            return { value, setValue, previous };
        });
        expect(result.current.previous).toBeUndefined();

        act(() => result.current.setValue(initial + 1));
        expect(result.current.previous).toBe(initial);
    });
});