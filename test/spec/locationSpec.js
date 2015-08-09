var LOCATION_PATH =  '../../src/js/components/location.jsx';
jest.dontMock(LOCATION_PATH);

describe('test location initialization', function () {

  var React = require('react/addons'),
    location = require(LOCATION_PATH);

  it('test 1 +1', function () {
    expect(1 + 1).toBe(2);

  });

});