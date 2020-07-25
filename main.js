console.log('working');

let themeLocalData = localStorage.getItem('theme'); //Read data from local storage

if (themeLocalData == null){
    setTheme('light');
} else {
    setTheme(themeLocalData);
}

let themeDots = document.getElementsByClassName('theme-dot');


for( var i=0; i<themeDots.length; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('option cliked', mode);
        setTheme(mode);
    });
};

function setTheme(mode){

    let themeCSS = '';

    switch (mode) {
        case 'light': 
            themeCSS = 'default.css';
            break;
        case 'blue':
            themeCSS = 'blue.css';
            break;
        case 'green':
            themeCSS = 'green.css';
            break;
        case 'purple':
            themeCSS = 'purple.css';
            break;
    };
    
    document.getElementById('theme-style').href = themeCSS;

    localStorage.setItem('theme', mode); //Save data to local storage
}


