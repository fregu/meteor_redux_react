'use strict';

/**
 * Dependencies
 */
import React, { Component, PropTypes } from 'react';

/**
 * Declaration
 */
const Button = React.createClass({
  displayName: 'Button',

  propTypes: {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  },

  onClick(...args) {
    const { onClick, disabled } = this.props;

    if (typeof onClick === 'function' && !disabled) {
      onClick(...args);
    }
  },

  render() {
    return (
      <button className={'Button ' + this.props.className} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
});
export default Button;
