import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, area, flags } = props.country;
    return (
        <div className='country'>

            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>

        </div>
    );
};

export default Country;