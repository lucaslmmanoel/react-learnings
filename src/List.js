import React from 'react';
import ActivityItem from './ActivityItem';
import ListItem from './ListItems';

const List = ({ children }) => (
    <div className="card-content">
        <span className="card-title">Minhas Tarefas</span>
        <ListItem>
            <ActivityItem task="teste" />
        </ListItem>

    </div>

);


export default List;