function showCode(event, fileName) {
    //Declare variables
    var i, code1, tabselection1;
    
    //hide class "code1"
    code1 = document.getElementsByClassName("code1");
    for (i = 0; i < code1.length; i++) {
        code1[i].style.display = "none";
    }
    
    //remove class "active" from "tabselection1"
    tabselection1 = document.getElementsByClassName("tabselection1");
    for (i = 0; i < tabselection1.length; i++) {
        tabselection1[i].className = tabselection1[i].className.replace(" active", "");
    }
    
    document.getElementById(fileName).style.display = "block";
    event.currentTarget.className += " active";
}

//Set the default tab upon loading page
document.getElementById("defaultTab1").click();

function showCode2(event, fileName) {
    //Declare variables
    var i, code2, tabselection2;
    
    //hide class "code2"
    code2 = document.getElementsByClassName("code2");
    for (i = 0; i < code2.length; i++) {
        code2[i].style.display = "none";
    }
    
    //remove class "active" from "tabselection2"
    tabselection2 = document.getElementsByClassName("tabselection2");
    for (i = 0; i < tabselection2.length; i++) {
        tabselection2[i].className = tabselection2[i].className.replace(" active", "");
    }
    
    document.getElementById(fileName).style.display = "block";
    event.currentTarget.className += " active";
}

//Set the default tab upon loading page
document.getElementById("defaultTab2").click();

function showCode3(event, fileName) {
    //Declare variables
    var i, code3, tabselection3;
    
    //hide class "code3"
    code3 = document.getElementsByClassName("code3");
    for (i = 0; i < code3.length; i++) {
        code3[i].style.display = "none";
    }
    
    //remove class "active" from "tabselection3"
    tabselection3 = document.getElementsByClassName("tabselection3");
    for (i = 0; i < tabselection3.length; i++) {
        tabselection3[i].className = tabselection3[i].className.replace(" active", "");
    }
    
    document.getElementById(fileName).style.display = "block";
    event.currentTarget.className += " active";
}

//Set the default tab upon loading page
document.getElementById("defaultTab3").click();

function showCode4(event, fileName) {
    //Declare variables
    var i, code4, tabselection4;
    
    //hide class "code4"
    code4 = document.getElementsByClassName("code4");
    for (i = 0; i < code4.length; i++) {
        code4[i].style.display = "none";
    }
    
    //remove class "active" from "tabselection4"
    tabselection4 = document.getElementsByClassName("tabselection4");
    for (i = 0; i < tabselection4.length; i++) {
        tabselection4[i].className = tabselection4[i].className.replace(" active", "");
    }
    
    document.getElementById(fileName).style.display = "block";
    event.currentTarget.className += " active";
}

//Set the default tab upon loading page
document.getElementById("defaultTab4").click();