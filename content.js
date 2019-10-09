console.log("content script on!!!!");

//var elements = document.getElementsByClassName("myclass");
var elements = document.getElementsByClassName("sc-jVODtj dzzGdG");
var id;
//alert(JSON.stringify(elements));

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action == "getid") {
        for (i = 0; i < elements.length; i++) { 
            if (elements[i].getAttribute('title') == request.message){
                id = elements[i].getAttribute('id');
            }
        }
        
    }

    // if (elements[0].getAttribute('title') == request.message){
    //     id = elements[0].getAttribute('id');
    // }
    alert("the product id is : "+id);
    sendResponse({answer: id});
    //alert("I am in content script");
    return Promise.resolve("heyyyy testing some shiet");
});


//var newEl = document.getElementById("testingid");

//var id = newEl[0].getAttribute('id');
//var id = elements[0].getAttribute('id');
//alert(JSON.stringify(id));