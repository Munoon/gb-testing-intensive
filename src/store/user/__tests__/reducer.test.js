import reducer from "../reducer";
import {setName} from "../actions";

describe('user reducer', () => {
    it('change type', () => {
        const result = reducer(undefined, setName('test'));
        expect(result).toEqual({ name: 'test' });
    });
});