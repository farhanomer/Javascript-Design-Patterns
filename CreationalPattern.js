/**
 *   Thanks to  God who created  all humans
 *   Thanks to  God's  all creation especially programmers and developers
 *  'Patterns Of Enterprise Application Architecture' by Martin Fowler
 *  'JavaScript Patterns' by Stoyan Stefanov
 * ‘Pro JavaScript Design Patterns’ by Ross Harmes and Dustin Diaz.
 *
 *  Thanks to Essential JavaScript Design Patterns Author Addy Osmani
 *
 *  Created by Farhan Omer on 3/2/2017.
 */

// Three different way of creating object in Javascript
var newInstance = {}; // or
var newInstance = Object.create(null); // or
var newInstance = new Object();

// Four different way of assigning Properties to instance
//One
newInstance.userKey = 'Essential Javascript'; // Write properties
var key = newInstance.userKey; // Access properties
// Two. Square bracket syntax
newInstance['userKey'] = 'Essential  Javascriopt 2'; // Write properties
var key = newInstance['someKey'];

// Access properties
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// Three Object.defineProperty
Object.defineProperty(newInstance, "userKey", {
    value: "More controlling property behaviour",
    writable: true,
    enumerable: true,
    configurable: true
});
 // Another way

var defineProp = function ( obj, key, value ){
    config.value = value;
    Object.defineProperty(obj, key, config);
}

