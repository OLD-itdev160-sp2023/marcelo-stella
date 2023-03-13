/**
 * Wrap everything in an IIFE
 */
(function() {

/**
 * Package data and constructor objects
 */

//Package data array (simulated data source, such as JSON or database record)
    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 1663309,
            stars: 2546,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'The atom-beautify package will clean up your code.',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        },
        {
            name:'git-time-machine',
            description: 'Having a visual of all your past actions right in front of you can be of great help.',
            author: 'IDK2023',
            url: 'https://atom.io/packages/git-time-machine',
            downloads: 11444223,
            stars: 13445,
            price: 5.99,
            selector: 'p3'
        },
        {
            name:'language-liquid',
            description: 'Language Liquid can make use of language-liquid to highlight their syntax.',
            author: 'COPYPASTE1998',
            url: 'https://atom.io/packages/language-liquid',
            downloads: 1637418,
            stars: 1344,
            price: 10.99,
            selector: 'p4'
        }
    ];

    function Package(data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function(){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function(){
            return this.stars.toLocaleString();
        };
    }

    /*******************
     * UTILITY FUNCTIONS
     *******************/

    //Return today's date formatted
    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    //Returns DOM element by ID
    var getEl = function (id){
        return document.getElementById(id);
    };

    //Writes the package object's data
    //appropriate DOM elements utilizing the package selector property 
    var writePackageInfo = function(package){
        //Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        //Write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    //Write date 
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data one by one
    /*var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

    var gitTimeMachine = new Package(data[2]);
    writePackageInfo(gitTimeMachine);*/

    //FOR LOOP 
    for(var i = 0; i < data.length; i++){
        var package = new Package(data[i]);
        writePackageInfo(package);
    };
}());