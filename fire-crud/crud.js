var rollV,nameV,genderV,addressV;

function readFom(){
    rollV=document.getElementById("roll").value;
    nameV=document.getElementById("name").value;
    genderV=document.getElementById("gender").value;
    addressV=document.getElementById("address").value;
}
document.getElementById("insert").onclick=function(){
    readFom();
    firebase.database().ref('student/'+rollV).set({
        rollNo:rollV,
        name:nameV,
        gender:genderV,
        address:addressV,
    });
    alert('data inserted');
    document.getElementById('roll').value="";
    document.getElementById('name').value="";
    document.getElementById('gender').value="";
    document.getElementById('address').value="";
}
document.getElementById("read").onclick=function(){
    readFom();
    firebase.database().ref('student/'+rollV).on("value",function(snap){
        document.getElementById('roll').value=snap.val().rollNo;
        document.getElementById('name').value=snap.val().name;
        document.getElementById('gender').value=snap.val().gender;
        document.getElementById('address').value=snap.val().address;


    });
    alert('content read');
}
document.getElementById("update").onclick=function(){
    readFom();
    firebase.database().ref('student/'+rollV).update({
        //rollNo:rollV,
        name:nameV,
        gender:genderV,
        address:addressV,
    });
    alert('data updated');
    document.getElementById('roll').value="";
    document.getElementById('name').value="";
    document.getElementById('gender').value="";
    document.getElementById('address').value="";
}

document.getElementById("delete").onclick=function(){
    readFom();
    firebase.database().ref('student/'+rollV).remove();
    alert('data removed');
    document.getElementById('roll').value="";
    document.getElementById('name').value="";
    document.getElementById('gender').value="";
    document.getElementById('address').value="";
}