import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation} from '@fortawesome/free-solid-svg-icons'


const UrgentPriorityIcon = () => {
    const iconStyle = {
        color: "red",
        border: "1px solid blue",
        borderRadius: "50%",
        padding: "2px",
        height: "20px",
        width: "20px"
      };
    return (
        <div style={iconStyle}>
            <FontAwesomeIcon icon={faExclamation} />
        </div>
    )
    
}

export default UrgentPriorityIcon