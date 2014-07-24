'use strict';

describe('AppCtrl', function () {

  var scope, ctrl

  beforeEach(module('app'))

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new()
    ctrl = $controller('AppCtrl', {
      $scope: scope
    })
  }))

  it('should have AppCtrl', function () {
    expect(ctrl).toBeDefined()
  })

  it('should have nav links', function () {
    expect(scope.links.length).toBe(1)
  })
})