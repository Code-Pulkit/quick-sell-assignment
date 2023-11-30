import React from 'react';
import './card.css';
import ProfileComponent from './profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagComponent from './tag';
import NoPriorityIcon from '../../icons/no-priority';
import LowPriorityIcon from '../../icons/low-priority';
import MediumPriorityIcon from '../../icons/medium-priority';
import HighPriorityIcon from '../../icons/high-priority';
import UrgentPriorityIcon from '../../icons/urgent-priority';


const CardComponent = (todo) => {
    const priorityIcons = [<NoPriorityIcon/>, <LowPriorityIcon/>, <MediumPriorityIcon/>, <HighPriorityIcon/>, <UrgentPriorityIcon/>]

    return (
        <div className="card">
            <div className="card-title">
                <p>{todo.id}</p>
                <ProfileComponent available={todo.available}></ProfileComponent>
            </div>
            <div className="card-description">
                <div class="checkbox-container">
                    <input type="checkbox" id="roundedCheckbox"/>
                    <label for="roundedCheckbox">{todo.title}</label>
                </div>
            </div>    
            <div className="card-footer">
                {priorityIcons[todo.priority]}
                {todo.tags.map((content) => (
                    <TagComponent name={content} />
                ))}
            </div>
        </div>
    )
}

export default CardComponent