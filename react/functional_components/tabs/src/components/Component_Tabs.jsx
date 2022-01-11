import React from 'react';
import styles from './Component_Tabs.module.css';

const Tabs = (props) => {

    const tabs = [
        {label:"Tab 1", content:"Content for tab 1"},
        {label:"Tab 2", content:"Content for tab 2"},
        {label:"Tab 3", content:"Content for tab 3"}
    ];

    const onClickHandler = (e, value, callback=null) => {
        e.preventDefault();
        if(callback){
            callback();
        }
        props.passMessage(value.content)
    }

    return(
        <ul className={styles.tab_list}>
            {tabs.map( (item, i) =>
            <li key={i}><button className={styles.tab} onClick={ (e) => onClickHandler(e, item) }>{item.label}</button></li>)}
        </ul>
    );
}

export default Tabs;