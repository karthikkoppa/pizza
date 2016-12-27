/**
 * Created by karthik.kn on 12/23/2016.
 */
import React, {Component} from 'react';
import pizzaList from './pizza/pizza-svc';
import {LoadingIndicator} from './component/loading-indicator';
import {Header} from './component/header';
import SearchPizza from './pizza/search-pizza';
import Pizza from './pizza/pizza';
let sortList = require('./pizza/pizza-svc').sortList;
let filterList = require('./pizza/pizza-svc').filterList;

export class Filter extends Component {

    constructor(){
        super();
        this.state = {pizzas: [], pizzasList: [], isLoading:true};
    }

    searchPizza (event) {
        let filteredList = filterList(event.target.value,this.state.pizzas);
        this.setState({pizzasList:  filteredList})
    }

    sortPizza (event) {
        let sortedList = sortList(this.state.pizzasList);
        this.setState({pizzasList: sortedList});
    }

    content () {
        return (
            <div className="container">
                <Header text="PIZZA SHOP !!!"/>

                <div className="row col-lg-6 input-group">
                    <SearchPizza
                        onTextEntered={this.searchPizza.bind(this)}
                        placeHolder='Search here...'
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"
                                onClick={this.sortPizza.bind(this)}>
                                SORT
                        </button>
                    </span>
                </div>

                <Pizza
                    list={this.state.pizzasList}
                />
            </div>
        )
    };

    componentDidMount() {
        pizzaList().then(data => {
            this.setState({pizzas: data.pizzas});
            this.setState({pizzasList: data.pizzas});
            this.setState({isLoading: false});
        }).catch(error => {
            console.log(`request failed ${error}`);
        });
    }

    render() {
        return (
            !this.state.isLoading ? this.content() : <LoadingIndicator text="Loading..." />
        );
    }
}
