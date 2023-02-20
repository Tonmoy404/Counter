import React, { Component } from 'react';

class Button extends Component {

    render() { 
        return (
                <button
                    type = "button"
                    onClick={ this.props.event }
                    className = { this.props.className }
                    disabled = { this.props.disabled }
                >
                    
                { this.props.text}

                </button>
        );
    }
}
 
export default Button;