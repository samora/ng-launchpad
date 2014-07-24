'use strict'

describe('home', function() {
  browser.get('#!/home')

  it('should have a h1', function () {
    expect(element(by.css('h1')).getText()).toBe('Kickstart your Angular JS apps with a solid foundation.')
  })
})