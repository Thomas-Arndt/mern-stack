import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabNav = () => {
    const [ tabs, setTabs ] = useState([
        {
            label: "Roster",
            link: "/players/list",
            active: true
        },
        {
            label: "Player Status",
            link: "/status/game/1",
            active: false  
        }]);
    
    const handleTabChange = (e) => {
        let tempTabs = [...tabs];
        tempTabs.map(tab=>tab.active=false);
        tempTabs[e.target.getAttribute('index')].active=true;
        setTabs(tempTabs);
    }

    return (
        <div className="col-8">
            <ul id="tabList" className="nav nav-tabs mt-3">
                {tabs.map((tab, i) =>
                    <li key={i} className="nav-item">
                    {tab.active ?
                    <Link index={i} to={tab.link} onClick={handleTabChange} className="nav-link text-dark active">{tab.label}</Link> :
                    <Link index={i} to={tab.link} onClick={handleTabChange} className="nav-link text-dark">{tab.label}</Link>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TabNav;