function addWbutton(){
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('wfield');
    node.classList.add('mt-4')
    node.setAttribute('placeholder','Enter here');

    let wAObj=document.getElementById('wA');
    let wAddObj=document.getElementById('wAddbutton');
    wAObj.insertBefore(node,wAddObj);


}
function addQbutton(){
    let node1=document.createElement('textarea');
    node1.classList.add('form-control');
    node1.classList.add('qfield');
    node1.classList.add('mt-4')
    node1.setAttribute('placeholder','Enter here');

    let qAObj=document.getElementById('qA');
    let qAddObj=document.getElementById('qAddbutton');
    qAObj.insertBefore(node1,qAddObj);


}
function generateCV(){
    // console.log("Generating CV")
    let nameField=document.getElementById('nameField').value;
    document.getElementById('nameT1').innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    //contact

    document.getElementById('conT1').innerHTML=document.getElementById('contactField').value;
    // Address
    document.getElementById('addT1').innerHTML=document.getElementById('addressField').value;
    // email
    document.getElementById('emailT1').innerHTML=document.getElementById('emailField').value;
    // linkedin
    document.getElementById('linkT1').innerHTML=document.getElementById('linkedin').value;
    // objective

   document.getElementById('oT').innerHTML=document.getElementById('Ofield').value;
    // work

    let work=document.getElementsByClassName('wfield');
    let str =' ';
    for(let e of work){
        str =str +<li> ${e.value}</li>;
    }
    document.getElementById('wT').innerHTML= str;

}
     