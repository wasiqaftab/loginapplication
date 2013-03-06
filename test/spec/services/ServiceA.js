'use strict';

describe('Service: ServiceA', function () {

  // load the service's module
  beforeEach(module('loginapplicationApp'));

  // instantiate service
  var ServiceA;
  beforeEach(inject(function (_ServiceA_) {
    ServiceA = _ServiceA_;
  }));

  it('should do something', function () {
    expect(!!ServiceA).toBe(true);
  });

});
