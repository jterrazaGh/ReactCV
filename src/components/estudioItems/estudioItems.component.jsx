import React from "react";


import "../estudioItems/estudioItems.styles.scss";

const EstudioItems = ({tipo, grado}) => (

    <div className="divContentEstudioItem">
        <div className="itemTitulo"><b>Tipo :</b>{tipo}</div>
        <div className="itemDetalle"><b>Grado :</b>{grado}</div>
    </div>
);

export default EstudioItems;
