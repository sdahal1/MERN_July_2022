import React, { Component } from 'react';

class MenuItem extends Component{
    constructor(props) {
        super(props);
        //state is a special type of variable that we can change the value of and when the value of a state variable changes, the component reloads on the screen with the newly changed information
        this.state = {
            price: this.props.price //transferring my props variable into my state variable so that change the state variable (increment the price)
        };
    }
    render(){
        return(
            <div className="item">
                <h3>Name: {this.props.dishName}</h3>
                <p>Price: ${this.state.price}</p>
                {this.props.children}
                <button className='btn btn-success' onClick={()=>this.setState({price: this.state.price+1})}>Click me for inflation for {this.props.dishName}</button>
            </div>
        )
    }
}

//when we click on a button something happens
//the thing that happens is the price of the menu item goes up by one

export default MenuItem;
