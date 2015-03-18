'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var Select = require('react-select');
require('react-select/dist/default.css');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var SelectWrapper = React.createClass({
    getOptions(input, callback) {
        setTimeout(function () {
            var opts = [
                { label: 'Chocolate', value: 'chocolate' },
                { label: 'Vanilla', value: 'vanilla' },
                { label: 'Strawberry', value: 'strawberry' },
                { label: 'Caramel', value: 'caramel' },
                { label: 'Cookies and Cream', value: 'cookiescream' },
                { label: 'Peppermint', value: 'peppermint' }
            ];

            var rtn = {
                options: opts,
                complete: true
            };

            callback(null, rtn);
        }, 1000);
    },

    render() {
        return <Select multi={true} asyncOptions={this.getOptions} onChange={this.props.onChange} />;
    }
});

var ReactSelectBugApp = React.createClass({
    getInitialState() {
        return {
            selected: []
        };
    },

    updateValue(newVal) {
        this.setState({
            selected: newVal
        });
    },

    render: function() {
        return (
            <div className='main'>
                <pre>selected: {this.state.selected}</pre>
                <SelectWrapper onChange={this.updateValue} />
            </div>
          );
      }
});
React.render(<ReactSelectBugApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactSelectBugApp;
