'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Function takes in any input value and returns input value unchanged.
 * 
 * @param {Any value}: takes any input value
 * @return {Any value}: returns the input value unchanged
 * 
 */

 function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: function takes in any input value and returns a string representing the what type the value is
 * 
 * @param {Any value}: takes any value
 * @return {string}: a string representing the type of value entered
 * 
 */

 function typeOf(value){
    // if the value is a string
    if (typeof value === 'string'){
        // return string
        return 'string';
    // if value is an array
    } else if (Array.isArray(value) === true){
        // return array
        return 'array';
    // if value is an object                 not an array              not null          and not a date
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null && value instanceof Date === false){
        // return object
        return 'object'; 
    // if value is undefined
    } else if (typeof value === 'undefined'){
        // return undefined
        return 'undefined';
    // if value is a number
    } else if (typeof value === 'number'){
        // return number
        return 'number';
    // if value is a boolean
    } else if (typeof value === 'boolean'){
        // return boolean
        return 'boolean';
    // if value is null
    } else if ( value === null){
        // return null
        return 'null';
    // if value is a function
    } else if (typeof value === 'function'){
        // return function
        return 'function';
    // if value is a date
    } else if (value instanceof Date === true){
        // return date
        return 'date';
    };

    
}
module.exports.typeOf = typeOf


/**
 * first: function takes an array to search through and a number representing the amount of items to return. 
 * function will return an array containg how ever many items num specifies starting from the beginning of 
 * the entered array
 * 
 * @param {array}: takes an array
 * @param {num}: takes a number signinfying the amount of item to return from the array
 * @return {array}: returns an array containing the specified amount of items starting from the beginning of the array
 * 
 */

 function first(array, num){
    // if the entered array is not an array or the enterd number is less than 0
    if (!Array.isArray(array) || num < 0){
        // return an empty array
        return [];
    // if the entered number is not a number or is undefined
    } else if (typeof num !== 'number' || num === undefined){
        // return the first item in the entered array
        return array[0];
    // if the entered number is greater than the entered arrays length
    } else if (num > array.length){
        // return the entered array unchanged
        return array;
    // otherwise
    } else {
        // return an array containing the first how ever many elements num is specifying
        return array.slice(0, num);
    }
}


/**
 * last: 
 * @param {array} 
 * @param {num} 
 * @returns {array}
 */


function last(array, num){
    if (!Array.isArray(array) || num < 0){
        return [];
    } else if (typeof num !== 'number' || num === undefined){
        return array[array.length - 1];
    } else if (num > array.length){
        return array;
    } else {
        return array.slice(array.length - num, array.length);
    }
}