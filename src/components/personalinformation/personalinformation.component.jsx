import React from "react";


import "../personalinformation/personalinformation.styles.scss";

const PersonalInformation = ({name, datebird, address, phone, mail}) => (

    <div className="contentDivPerInfo">
        <div className="divPerItem"><b>Nombre :</b><span>{name}</span></div>
        <div className="divPerItem"><b>Fecha Nacimiento :</b><span>{datebird}</span></div>
        <div className="divPerItem"><b>Dirección :</b><span>{address}</span></div>
        <div className="divPerItem"><b>Teléfono :</b><span>{phone}</span></div>
        <div className="divPerItem"><b>Correo :</b><span>{mail}</span></div>
        
        
        
    </div>
);

export default PersonalInformation;
