import { rgbToHexColor } from "./6. RGB to Hex.js";
import { expect } from "chai";

describe('Suite', function () {
    it('params are more or equal than 0', function () {
        expect(rgbToHexColor(-1, 100, 100)).to.be.undefined;
        expect(rgbToHexColor(100, -1, 100)).to.be.undefined;
        expect(rgbToHexColor(100, 100, -1)).to.be.undefined;
    })

    it('params are less or equal than 255', function () {
        expect(rgbToHexColor(100, 100, 256)).to.be.undefined;
        expect(rgbToHexColor(100, 256, 100)).to.be.undefined;
        expect(rgbToHexColor(256, 100, 100)).to.be.undefined;
    })

    it('returns undefined if with decimal', function () {
        expect(rgbToHexColor(1.2, 100, 256)).to.be.undefined;
        expect(rgbToHexColor(100, 1.2, 100)).to.be.undefined;
        expect(rgbToHexColor(256, 100, 1.2)).to.be.undefined;
    })

    it('returns undefined if str', function () {
        expect(rgbToHexColor(1.2, "0", 256)).to.be.undefined;
        expect(rgbToHexColor(100, 1.2, "100")).to.be.undefined;
        expect(rgbToHexColor("255", 100, 1.2)).to.be.undefined;
    })

    it('should convert RGB values to hexadecimal color string', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    })
})