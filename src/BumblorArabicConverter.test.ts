import {describe, expect, it} from 'vitest';
import {bumblor2arabic, arabic2bumblor} from './BumblorArabicConverter';

describe('BumblorArabicConverter', () => {
    it('should throw Error("Malformed Number") for violating rules', () => {
        expect(() => bumblor2arabic('MMMMM')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('DD')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('LL')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('VV')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('OO')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('IXC')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('MXC')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('DCD')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('DM')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('DM')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('M M M')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('MMCM')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('O C')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic(' M ')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic(' mmmmdiiii ')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('LLV')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('D M')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic(' MM ')).toThrowError("Malformed Number");
        expect(() => bumblor2arabic('iV')).toThrowError("Malformed Number");
    });

    it('should throw Error("Out of Range") for Arabic numbers out of range', () => {
        expect(() => arabic2bumblor(5000)).toThrowError("Out of Range");
        expect(() => arabic2bumblor(-5000)).toThrowError("Out of Range");
    });

    it('should handle negative Bumblor numbers', () => {
        expect(bumblor2arabic('-MMCL')).toEqual(-2150);
        expect(bumblor2arabic('-MMCLXVI')).toEqual(-2166);
    });

    it('should handle Bumblor numbers with correct order', () => {
        expect(bumblor2arabic('MMMMDCCCC')).toEqual(4900);
        expect(bumblor2arabic('MMCXI')).toEqual(2111);
        expect(bumblor2arabic('MD')).toEqual(1500);
    });

    it('should convert Bumblor to Arabic number correctly', () => {
        expect(bumblor2arabic('MMM')).toEqual(3000);
        expect(bumblor2arabic('O')).toEqual(0);
    });

    it('should convert Arabic number to Bumblor correctly', () => {
        expect(arabic2bumblor(123)).toEqual("CXXIII");
        expect(arabic2bumblor(456)).toEqual("CCCCLVI");
    });

    it('should handle Bumblor numbers with repeated characters', () => {
        expect(bumblor2arabic('MMMMC')).toEqual(4100);
        expect(bumblor2arabic('CCC')).toEqual(300);
        expect(bumblor2arabic('XXX')).toEqual(30);
        expect(bumblor2arabic('III')).toEqual(3);
    });

    it('should convert Arabic number to Bumblor with multiple characters correctly', () => {
        expect(arabic2bumblor(3456)).toEqual("MMMCCCCLVI");
    });
});