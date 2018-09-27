function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:

readTextFile("./sumry.json", function(text){
    var data = JSON.parse(text);
    var tileImage=data.tileimage;
    var profilePic=data.personaldata.image;
    var name=data.personaldata.name;
    var position=data.personaldata.position;
    var shortbio=data.personaldata.shortbio;
    var location=data.personaldata.location;
    data.personaldata.socialmedia.forEach(createElement);  

function createElement(arrayItem, index, array) {
    debugger;
    if(arrayItem.icon==="twitter"){
         var spanObj = "<span>" + arrayItem.url + "</span>"
        //var spanObj = "<a href="+ arrayItem.url +"><i class="fa fa-twitter"></i></a></span>"
        document.getElementById('myList').innerHTML +=spanObj;
    }else if(arrayItem.icon==="linkedin"){
        var spanObj = "<span>" + arrayItem.url + "</span>"
        document.getElementById('myList').innerHTML +=spanObj;
    }else if(arrayItem.icon==="email"){

    }else if(arrayItem.icon==="xing"){

    }else if(arrayItem.icon==="github"){

    }else if(arrayItem.icon==="web"){
        
    }else if(arrayItem.icon==="instagram"){
        
    }else if(arrayItem.icon==="facebook"){
        
    }             
    
   //var list = document.getElementById("myList");
    //list.insertBefore(spanObj, list.childNodes[0]);

}


	document.getElementById('header').style.backgroundImage="url("+tileImage+")";
	document.getElementById('profile-pic').src=profilePic; 
 	document.getElementById('name').innerHTML=name; 
	document.getElementById('position').innerHTML=position; 
	document.getElementById('shortBio').innerHTML=shortbio; 
	document.getElementById('location').innerHTML=location; 
    document.getElementById('q').href += '?q='+ location;
});
