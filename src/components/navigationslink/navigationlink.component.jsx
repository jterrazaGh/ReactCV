import React from "react";
import { Link } from "react-router-dom";

import "../navigationslink/navigationlink.styles.scss";

const NavigationsLink = ({ name, color, urlOption}) => (

    <div className="ContainerOptions" style={{ backgroundColor: `${color}` }}>

        <Link to={urlOption}>
        <span>{name}</span>
        </Link>
    </div>
);

export default NavigationsLink;