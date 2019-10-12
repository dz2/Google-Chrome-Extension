console.log("content script on!!!!");

//var elements = document.getElementsByClassName("myclass");
var elements = document.getElementsByClassName("sc-gPWkxV eEgAjd");



//<a class="sc-gPWkxV eEgAjd" data-e2e-id="entityNameRenderer" href="/cm/sp/campaigns/A09017083A3A01FSL7RMU?entityId=ENTITY1PWRR1V7TMACO" title="YuD's" id="A09017083A3A01FSL7RMU">YuD's</a>


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
    console.log("the id is : "+id);
    alert("the id is: " + id);
    sendResponse({answer: id});
    //alert("I am in content script");
    return Promise.resolve("heyyyy testing some shiet");
});


//var newEl = document.getElementById("testingid");

//var id = newEl[0].getAttribute('id');
//var id = elements[0].getAttribute('id');
//alert(JSON.stringify(id));