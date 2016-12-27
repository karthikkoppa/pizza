/**
 * Created by karthik.kn on 12/23/2016.
 */
import React, {Component} from 'react';

export class LoadingIndicator extends Component {
    render() {
        return(
            <div className="loading-text">
                <p>{this.props.text}</p>
            </div>
        );
    }
};
