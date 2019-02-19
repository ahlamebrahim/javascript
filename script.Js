// var newwidth="200px";
// var welcome="welcome to DCI";
// var language="this is a language var";

// function welcome(){

//     document.getElementById('first').innerHTML=welcome;
// }

// function changestyle(){

//  document.getElementById('J').innerHTML=welcome;
// }

// function changelanguage(){
//     var wilkommen="wilkommen bei DCI";
//     document.getElementById=('first').innerHTML=wilkommen
   
//     document.getElementById('first').innerHTML=wilkommen;


// }
function changestyle2(){
    document.getElementById('MyDiv').style.transition='all 3s';
}
function changestyle3(){
   document.getElementById('MyDiv').style.transform='rotate(900deg)';
   console.log(document.getElementById('MyDiv').style.transform);
}
function changestyle4(){
  var newname= prompt('please enter your name','Ahlam Ibrahim');
//   document.getElementById('fullname').innerHTML='<h1>'+newname+'</h1>';
  document.getElementById('h1').innerHTML=newname;
 


}
    if(newname != ""){
    document.getElementById('h1').innerHTML=newname;
}