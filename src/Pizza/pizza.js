/**
 * Created by karthik.kn on 12/23/2016.
 */
import React, {PropTypes} from 'react';

const Pizza = props =>
{
    return (
        <ul className="col-md-6">
            {props.list.map(function(pizza, i){
                return <li className="col-sm-8" key={i}>{pizza}</li>
            })}
        </ul>
    )
};

Pizza.displayName = 'Pizza';

export default Pizza;
