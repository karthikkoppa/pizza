/**
 * Created by karthik.kn on 12/23/2016.
 */
import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}
