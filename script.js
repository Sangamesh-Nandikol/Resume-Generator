
function addNewWEField(){
   // console.log("new field")

//    let newNode=document.createElement("textarea");
//    newNode.classList.add("form-control");
//    newNode.classList.add("we-Field");
//    newNode.classList.add("mt-3");
//    newNode.setAttribute("placeholder","Enter here");
//    newNode.setAttribute("rows",3);

//    let weOb=document.getElementById("we");
//    let weId=document.getElementById("weAddButton");
   
//    weOb.insertBefore(newNode,weId);


// let newNode=document.createElement("textarea");
// newNode.classList.add("form-control");
// newNode.classList.add("we-Field");
// newNode.classList.add("mt-3");
// newNode.setAttribute("rows",3);


// let weOb=document.getElementById("we");
// let weAddButtonOb=document.getElementById("weAddButton");
// //console.log(weId,weAddButtonOb);
// weOb.insertBefore(newNode,weAddButtonOb);

// console.log(weOb);
// console.log(weId);


// Create a new textarea element
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "we-Field", "mt-2");
    newNode.setAttribute("placeholder", "Enter work experience");
    newNode.setAttribute("rows", 3);

    // Get the parent element (where the new textarea will be inserted)
    let weDiv = document.getElementById("we");

    // Insert the new textarea before the Add button (reference node)
    let weAddButton = document.getElementById("weAddButton");

    // Insert the new node before the "Add" button
    weDiv.insertBefore(newNode, weAddButton);

}

function addNewAQ(){

    let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aq-field");
newNode.classList.add("mt-3");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");


let weOb=document.getElementById("aq");
let weAddButtonOb=document.getElementById("aqAddButton");
//console.log(weId,weAddButtonOb);
weOb.insertBefore(newNode,weAddButtonOb);

}


//generating cv

function generateCv(){
   
    //setting first name
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML=nameField;

   //second name
   document.getElementById("nameT2").innerHTML=nameField;

   //setting contact
   let contactF=document.getElementById("contactField").value;
   let contactT=document.getElementById("contactT");
   contactT.innerHTML=contactF;

   //setting address
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   //setting linkes 
    //facebook
    document.getElementById("fbT").innerHTML=document.getElementById("FacebookField").value;
    document.getElementById("istaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value;

    //setting objective
    document.getElementById("ObjectiveT").innerHTML=document.getElementById("objectiveField").value;

    //setting work experience
    
    let weS=document.getElementsByClassName("we-Field");
    let str="";

    for(let e of weS){

        str=str+`<li> ${e.value} </li>`;
    }

        document.getElementById("weT").innerHTML=str;  
        
    //setting Academic Qualification
    
    let aqD=document.getElementsByClassName("aq-field");
    let strr="";

    for(let e of aqD){

        strr=strr+`<li> ${e.value} </li>`
    }

    document.getElementById("aqT").innerHTML=strr;

    //setting image

    let imgcv=document.getElementById("imgFild").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(imgcv);
    console.log(reader.result);

    reader.onload =function(){
        document.getElementById("imgT").src=reader.result;
    }


    document.getElementById("cv").style.display="none";
    document.getElementById("cv-template").style.display="block";



}


function printCV(){
    window.print();
}