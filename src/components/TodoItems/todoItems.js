import React from 'react';
import './todoItems.css';

const TodoItems = (props) => {
    const { items , deleteItem} = props; // lw kan class based kont hktb this.props
    const length = items.length;

    const ListItems = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={() => deleteItem(item.id)}>X</span> 
                </div>
            )
        })
    ) : (
        <p>there is no item to show</p>
    )

    return (
        <div className='ListItems'>
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems;