import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
    };

    styles = {
         fontSize: 10,
         fontWeight: 'bold'
     }

    //  constructor(){
    //      super();
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }
    // 4) we can use a constructor where we have access to 'this' and set value of 'this' for our function
     
    handleIncrement() {
         console.log('Increment Clicked',this)
     }

     // if we call 'this' with a object function 
     // 1) obj.method() ==> 'this' returns (obj)
     // if called from a standalone function 
     // 2) function(); ===> 'this' returns undefined if strict mode enabled or a window object 
     // 3) this from an arrow function inherets properties from nearby function 

    render() {
        return (
        <div>
            <span 
                style={this.styles} 
                className={this.getBadgeClasses()} > 
                {this.formatCount()}
            </span>
            <button 
                onClick={this.handleIncrement} 
                className='btn btn-secondary btn-sm'>
                Increment
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge text-light bg-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count; 
    }
}

export default Counter;