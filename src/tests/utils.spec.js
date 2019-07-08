/* eslint-disable no-undef */
let { describe } = require('riteway');
let canSwapTiles = require('../utils/canSwapTiles');

describe('sum()', async assert => {
    assert({
        given: 'no arguments',
        should: 'return true',
        actual: canSwapTiles(3, 1, 0),
        expected: true,
    });
});
