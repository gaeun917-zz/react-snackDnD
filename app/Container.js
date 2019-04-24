import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ShoppingCart from './ShoppingCart';
import Snack from './Snack';

// Container: all drag and drop interaction happens
class Container extends Component {
    render() {
        const snacks = ['Chips','Cupcake', 'Donut', 'Doritos','Popcorn'];

        const snackArr = snacks.map((snack, i)=>{
          return <Snack key={i} name={snack}/>
        });

        return (
            <div>
                <div className='snack_section'>
                    {snackArr}
                </div>
                <ShoppingCart />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);