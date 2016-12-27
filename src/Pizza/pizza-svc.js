/**
 * Created by karthik.kn on 12/23/2016.
 */
import fetch from 'isomorphic-fetch';

function checkStatus(response) {
    if(response.ok) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

export default function pizzaList() {
    return fetch('./pizza.json')
        .then(checkStatus)
        .then(parseJSON);
};

var filterList = function(filterValue, list){
    return filterValue !== '' ?
        list.filter(element => {
            return String(element).toLowerCase().includes(filterValue.toLowerCase());
        }) : list;
};

exports.filterList = filterList;

var sortList = function(list){
    return list.sort().reverse();
};

exports.sortList = sortList;
