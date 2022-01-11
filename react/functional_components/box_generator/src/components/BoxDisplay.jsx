import React from 'react';
import styles from './BoxDisplay.module.css';

const block = (color, sideLength, key) => {
    let style = {
        width: sideLength,
        height: sideLength,
        'backgroundColor': color
    }
    return <div key={key} style={style}></div>
};

const BoxDisplay = (props) => {
    console.log(props);
    return(
            <div className={styles.container}>
                {props.blocks && props.blocks.map( (item, i) =>
                    block(item.color, item.sideLength, i))}
            </div>
    )
}

export default BoxDisplay;