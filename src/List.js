import React from 'react';
import ActivityItem from './ActivityItem';
import ListItems from './ListItems';

const List = ({items}) => {
    console.log(items)
    return(
        <div className="card-content">
            <span className="card-title">Minhas Tarefas</span>
            <ListItems>
                {items.map(item => <ActivityItem task={item.name} />)}
            </ListItems>
        </div>)
}


export default List;