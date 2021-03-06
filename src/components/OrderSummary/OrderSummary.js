import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {
    // This compoenent colud be a functional component, doesn't have to be a class componenent.

    // componentWillUpdate() { Old method.
    //     console.log("[OrderSummary] WillUpdate");
    // }

    // componentDidUpdate() {
    //     console.log("[OrderSummary] DidUpdate");
    // }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
                </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={this.props.purchaseContinue}>CONTINUE...</Button>
        </Aux>
    );
    };
    
}

export default OrderSummary;