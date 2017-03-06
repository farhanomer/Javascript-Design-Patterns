/**
 *   Thanks to  God who created  all humans
 *   Thanks to  God's  all creation especially programmers and developers
 *  'Patterns Of Enterprise Application Architecture' by Martin Fowler
 *
 *  'JavaScript Patterns' by Stoyan Stefanov
 * ‘Pro JavaScript Design Patterns’ by Ross Harmes and Dustin Diaz.
 *  Thanks to http://www.dofactory.com
 *  Thanks to Essential JavaScript Design Patterns Author Addy Osmani
 *
 *  Created by Farhan Omer on 3/2/2017.
 */

/**
 * Following code will illustrate Singleton Object in Javascript
 */

var Singleton=(function(){
    var instance;
    function createInstance(){
        var object=new Object("New Instance");
        return object;
    }
    return {
        // Lazy Loading
        getInstance:function(){
            if (!instance){
                instance=createInstance();
            }
            return instance;
        }

    };
})();



function ImplementSingletonObject() {

    var object1 = Singleton.getInstance();
    var object2 = Singleton.getInstance();
    console.log(" Is it same object? " + (object1 === object2));

}



