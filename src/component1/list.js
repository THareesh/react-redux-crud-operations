import React from 'react'
import ListItems from './listItems'


const List = (props) => {
    return (
        <div>
            {
                props.todoList.map((val, i) => (
                    <ListItems
                        value={val} index={i} key={i} 
                        deleteButton={props.deleteButton}
                        editButton = {props.editButton}
                    />
                ))


            }

        </div>
    )
}

export default List
