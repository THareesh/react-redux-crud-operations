import React from 'react'

const ListItems = (props) => {
    return (
        <div className="container">
            <ul className="list-group mt-3" >
                <li className="list-group-item">
                    {props.index}
                    {props.value}
                    <button className="btn btn-primary mx-2" onClick={()=>props.deleteButton(props.index)}>delete</button>
                   <button className="btn btn-info " onClick={()=>props.editButton(props.value,props.index)}>edit</button>

                    
                </li>
            </ul>
        </div>
    )
}
export default ListItems