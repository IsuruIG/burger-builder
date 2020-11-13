import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
         return nextProps.show !== this.props.show
    }
    componentDidUpdate() {
        console.log("[Modal] DidUpdate");
    }
    // componentWillUpdate() { Old method.
    //     console.log("[Modal] WillUpdate");
    // }
    
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
// export default React.memo(Modal); For keeping the function componentand return a class compoenent.