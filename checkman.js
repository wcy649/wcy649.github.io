
var checkButton = document.getElementById("clickToCheck");
checkButton.addEventListener('click',function(){
    var checkQQNumber = document.getElementById("checker").value;

    var is = false;
    if(checkQQNumber == "2733392694" ){
        is = true;
    }else if(checkQQNumber == "2507979441"){
        is = true;
    }else{
        is = false;
    }

    if(is){
        alert("此QQ号是凌晨团队成员");
    }else{
        alert("此QQ号不是凌晨团队成员");
    }
})