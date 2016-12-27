/**
 * Created by karthik.kn on 12/23/2016.
 */
import React, {PropTypes} from 'react';

const SearchPizza = (props) => {

    return (
        <input className="form-control"
            onChange={props.onTextEntered}
            placeholder={props.placeHolder}
            type='text'
        />
    );

};

SearchPizza.displayName = 'SearchPizzaInput';

export default SearchPizza;
