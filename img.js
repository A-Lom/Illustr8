var div = document.getElementById('Images');

var bCheckEnabled = true;
var bFinishCheck = false;

var img;
var imgArray = new Array();
var i = 1;

var fileName = document.title;


var myInterval = setInterval(loadImage, 1);


function loadImage() {

    if (bFinishCheck) {
        clearInterval(myInterval);
        return;
    }

    if (bCheckEnabled) {

        bCheckEnabled = false;
 
        img = new Image();
        img.onload = fExists;
        img.onerror = fDoesntExist;
        img.src = 'images/'+ fileName+'/renamed/img' + i + '.jpg';
    }

}

function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
 
 	if (document.title == 'Clients'){
		var code = '<a href="'+ img.src +'"><img src="'+ img.src +'"height="50" style="padding: 3px"></a>'
	}else{
		var code = '<a href="'+ img.src +'"><img src="'+ img.src +'"height="100" style="padding: 3px"></a>'
	}
	

	div.insertAdjacentHTML('beforeend', code) 
}

function fDoesntExist() {
    bFinishCheck = true;
}