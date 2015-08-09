var DateUtil = require('../../src/js/services/dateUtil.js');
jest.dontMock('../../src/js/services/dateUtil.js');

describe('tests DateUtil class', function () {
  it('formats iso date 5.5.2015', function(){
    var dateObject = {$date: '2015-05-05T21:51:50.836Z'};
    console.log('nononoo:', DateUtil);
    var dateStr = DateUtil.formatISODate(dateObject);
    expect(dateStr).toBe('5.5.2015');



  });

});
