import {PingFinder} from "../../../src/services/PingFinder";
import { expect } from "chai";

describe('PingFinder', () => {
    let service: PingFinder;
    beforeEach(() => {
        service = new PingFinder();
    });

    it('should find "ping" in the string', () => {
        expect(service.isPing("ping")).to.be.true
    })
});