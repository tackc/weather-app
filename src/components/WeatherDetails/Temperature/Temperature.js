import React from 'react';

import classes from './Temperature.module.css';

const temperature = (props) => {
    return(
        <div className={classes.TemperatureWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>º</span>
        </div>
    );
}

export default temperature;
