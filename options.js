window.onload = function(){ 


    if (document.getElementById("login") != null){
        document.getElementById("login").onclick = function () {goLogin();};

    }

    //alert(document.getElementById("login"));
    //document.getElementById("logout").onclick = function () {goLogout();};

    function goLogin() {
	    chrome.runtime.sendMessage({
		    action : 'openlogin'
	    },function(response){
		    console.log(response);
	    });
    }

// function goLogout(){

// 	chrome.runtime.sendMessage({
// 		action : 'openlogout'
// 	},function(response){
// 		console.log(response);
// 	});
// }
};