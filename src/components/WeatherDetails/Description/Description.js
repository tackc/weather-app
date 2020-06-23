import React from 'react';

import classes from './Description.module.css';

const description = (props) => {
    return(
        <div className={classes.Description.module.css}>
            {props.type}
        </div>
    );
}

export default description;
