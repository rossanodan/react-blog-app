import React from 'react';

class Button extends React.Component {
	onClick = (e) => {
		console.log('Clicked', e.target);
		e.preventDefault();
	}
  render () {
    const { children } = this.props;
    if (!children) return null;
    return <button onClick={this.onClick}>{ children }</button>
  }
}

export default Button;