import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from '../../../src/utils/generateCode.util.ts';

describe('generateSixDigitCode', () => {
    it('should return a non empty string', () => {
        const code = generateSixDigitCode();

        expect(typeof code).toBe('string');
        expect(code).toBeTruthy();
    });

    it('should return a code with exactly 6 digits', () => {
        const code = generateSixDigitCode();

        expect(code).toHaveLength(6);
        expect(code).toMatch(/^\d{6}$/);
    });

    it('should return a number between 100000 and 999999', () => {
        const code = Number(generateSixDigitCode());

        expect(code).toBeGreaterThanOrEqual(100000);
        expect(code).toBeLessThanOrEqual(999999);
    });
});
