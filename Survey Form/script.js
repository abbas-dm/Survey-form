
var submit = document.getElementById("save");

function checkform() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                return false;
            }
        }
    }
    var textarea = document.getElementsByTagName("teaxtarea");
    for (var i = 0; i < textarea.length; i++) {
        if(teaxtarea[i].hasAttribute("required")){
            if(textarea[i].value == ""){
                return false;
            }
        }
    }
    if(!document.getElementById("mail").checkValidity())
    {
        return false;
    }
    console.log("submited");
    return true;
}

submit.addEventListener("click", function(){
    if(checkform()){
        let notes = localStorage.getItem("Data");
  
        if (notes == null) notesObj = [];
        else notesObj = JSON.parse(notes);

        let formData = {
            Fname: document.getElementById("fname").value,
            Age: document.getElementById("age").value,
            Mail: document.getElementById("mail").value,
            Intern: document.getElementById("dropdown").value,
            Recommend: getadvice(),
            Comment: document.getElementById("suggestions").value
        }

        notesObj.push(formData);
        localStorage.setItem('Data', JSON.stringify(notesObj));

        document.getElementById('message').innerHTML = 'ThankYou for filling form';

        alert("Data Added Successfully", JSON.stringify(formData));
    }
    else {
        alert("Please fill all fields/Mail address maybe invalid !!!")
    }
});

function getadvice() {
    if(document.getElementById('advice1').checked) {
        var val = document.getElementById('advice1').value;
    }
    else if(document.getElementById('advice2').checked) {
        var val = document.getElementById('advice2').value;
    }
    else if(document.getElementById('advice3').checked) {
        var val = document.getElementById('advice3').value; 
    }
    return val;
}
