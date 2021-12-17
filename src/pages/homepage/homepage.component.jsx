import React from 'react';

import PersonalInformation from '../../components/personalinformation/personalinformation.component';

import personalData from "../../components/personalinformation/personalinformation.data";

import "./homepage.styles.scss";

class HomePage extends React.Component {
    constructor() {

        super();

        this.state = {
            personData: personalData,
        }
    }

    render() {
        const { personData } = this.state;

        return (
            <div className="contentDivHome">

                <div className='contentPersonalInformation'>
                {personData
                    .filter((item, idx) => idx < 1)
                    .map(({ id, ...otherPersonProps }) => (
                        <PersonalInformation key={id} {...otherPersonProps} />
                    ))}
                </div>
                <div className='contentProfileInformation'>
                    <h1>Perfil Profesional</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos libero, minima aspernatur rem placeat. Quidem laudantium nemo rerum perspiciatis, esse deleniti quae a eligendi voluptas, placeat, minima aspernatur atque?</p>
                </div>
                
            </div>
        );
    }
}

export default HomePage;
