import { formatTimeStrings } from "../formatString";

describe("format time string test", () => {
    it('should return first and last strings', () => {
        const expected = '10:00 - 20:00';
        const actual = formatTimeStrings(['10:00', '15:00', '20:00']);
        expect(actual).toEqual(expected);
    });

    it('should return first with "till tomorrow" suffix', () => {
        const expected = '10:00 - Till tomorrow';
        const actual = formatTimeStrings(['10:00']);
        expect(actual).toEqual(expected);
    });

    it('should return None', () => {
        const expected = 'None';
        const actual = formatTimeStrings([]);
        expect(actual).toEqual(expected);
    });
});