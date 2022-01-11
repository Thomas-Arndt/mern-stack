import React from 'react';
import styles from './Component_Display.module.css'

const Display = (props) => {
    return(
        <p className={styles.displayBox}>{props.content}</p>
    )
}

export default Display;