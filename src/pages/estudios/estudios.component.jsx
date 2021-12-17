import React from 'react';

import EstudioItems from '../../components/estudioItems/estudioItems.component';

import estudioData from "../../components/estudioItems/estudioItems.data";

import "./estudios.styles.scss";

class Estudios extends React.Component {
    constructor() {

        super();

        this.state = {
            collection: estudioData,
        }
    }

    render() {
        const { collection } = this.state;

        return (
            <div className="contentDivEstudio">
                <div>
                {collection
                    .map(({ id, ...otherPersonProps }) => (
                        <EstudioItems key={id} {...otherPersonProps} />
                    ))}
                </div>
                
            </div>
        );
    }
}

export default Estudios;

