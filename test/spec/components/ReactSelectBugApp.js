'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactSelectBugApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactSelectBugApp = require('components/ReactSelectBugApp.js');
    component = React.createElement(ReactSelectBugApp);
  });

  it('should create a new instance of ReactSelectBugApp', function () {
    expect(component).toBeDefined();
  });
});
