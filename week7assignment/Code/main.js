var myNumbers = {
    x: 0,
    y: 0,
    z: 0,
    
    askForThreeNumbers: function() {
        myNumbers.x = prompt("What's the first number?");
        myNumbers.y = prompt("What is the second number?");
        myNumbers.z = prompt("what is the third number?");
    
    },
    
    addThreeNumbers: function() {
        return myNumbers.x*1+myNumbers.y*1+myNumbers.z*1;
    },
    
    askForTwoNumbers: function(){
        myNumbers.x = prompt("What's the first number?");
        myNumbers.y = prompt("What is the second number?");
    },
    
    addTwoNumbers: function(){
        return myNumbers.x*1+myNumbers.y*1;
    }
}; 


window.onload = function() {
     
     var link = document.getElementById("add");
     
     link.onclick = function () {
        myNumbers.askForThreeNumbers();
        var added = myNumbers.addThreeNumbers();
    document.getElementById("number").innerHTML = added;
     }
     
     var added2 = document.getElementById("add2");
     added2.onclick = function(){
        myNumbers.askForTwoNumbers();
        var added = myNumbers.addTwoNumbers();
        document.getElementById("number").innerHTML = added;
     }
}
 