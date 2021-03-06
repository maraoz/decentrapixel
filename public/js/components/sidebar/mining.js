'use strict';

var React = require('react');

var Mining = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Status</h2>
        <ul>
          <li><strong>Mining Target</strong>: {this.props.mining.target.x}, {this.props.mining.target.y}</li>
          <li><strong>Current Difficulty</strong>: {this.props.mining.difficulty}</li>
          <li><strong>Target Color</strong>: {this.props.mining.color}</li>
          <li><strong>Public Key</strong>: {this.props.mining.publicKey.toString()}</li> 
        </ul>
      </div>
    );
  }
});

module.exports = Mining;
