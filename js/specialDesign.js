
/*switcher*/

//add defaulat of switcher to locala storage 

document.getElementById('switcher').classList.add(localStorage.getItem('pageColor') || "red") ;

var el= document.querySelectorAll ('.color-switcher li') ,
    classesList = [] ,
    i = 0 ;

       // make loop 
    for (i ; i < el.length; i++) {

        //push data-color
        classesList.push(el[i].getAttribute('data-color'));
        el[i].addEventListener('click', function(){

            //remove all old classes
            document.getElementById('switcher').classList.remove(...classesList);
            //add current class from li data attribute
            document.getElementById('switcher').classList.add(this.getAttribute('data-color'));

            //add data to local storage 
            localStorage.setItem('pageColor' ,this.getAttribute('data-color'));

        },false);
    }




/*captalaize word function*/
function captalaizeLetters(string) {
    var oldArray = string.split(' ') ,
        newArray = [] ,
        i = 0 ;
    for ( i ; i < oldArray.length ; i++) {
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }

    return newArray.join(' ');
}
var string = 'Hello every one , i love you so much' ;

document.getElementById('testPragaraph').innerHTML = captalaizeLetters(string) ;


//claculate your letter 

var $count = document.getElementById('count'),
    $textarea = document.getElementById('text') ,
    $maxlength = $textarea.getAttribute('maxlength') ;

    $textarea.oninput = function () {
        $count.innerHTML= $maxlength - this.value.length;
    } ;

