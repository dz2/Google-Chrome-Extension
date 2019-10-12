if (!menuItem){
    var menuItem = {
        "id": "autoadInfo",
        "title": "AutoAd_Info",
        "contexts": ["selection"]
    };
    chrome.contextMenus.create(menuItem);
}

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId == "autoadInfo" && info.selectionText){
        var myid = getID(info.selectionText);
        //alert(myid);


        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                //document.getElementById("message").textContent = xhr.responseText;
                var formatedResponse = JSON.parse(this.responseText)
                alert(this.responseText);
            }
            if (xhr.status == 404) {
                //document.getElementById("message").textContent = "Data Not Found";
                alert("Data Not Found");
            }
        } // Implemented elsewhere.
        xhr.open("GET", chrome.extension.getURL("https://affectionate-elion-494dca.netlify.com/.netlify/functions/query"), true);
        xhr.send(JSON.stringify(info.selectionText));




        // const Datastore = require("nedb");
        // const database = new Datastore("fakedata.db");
        // database.loadDatabase();


        // database.find({}, function (err, docs) {
        //     for (item of docs) {
                // const root = document.createElement('div');
                // const date = document.createElement('div');
                // const bit = document.createElement('div');
                // const ACOS = document.createElement('div');
                // var dateText = document.createTextNode(`date: ${item.date}`);
                // date.appendChild(dateText);
                // document.body.appendChild(date);

                // date.textContent = `date: ${item.date}`;
                // bit.textContent = `bit: ${item.bit}`;
                // ACOS.textContent = `ACOS: ${item.ACOS}`;         
                //heading.appendChild(heading_text);
                //document.body.appendChild(heading);

                // root.append(date, bit, ACOS);
                // document.body.append(root);
            //}
        // });
    }

}

function showLWindow(url) {
    var w = 400;
    var h = 400;
    chrome.windows.create({
        url: url,
        type: "popup",
        // type: "normal",
        width: w,
        height: h,
        left: Math.floor(screen.width / 2 - (w + 1) / 2),
        top: Math.floor(screen.height / 2 - h / 2)
    });
}

function getID(msg) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: msg, action: "getid"}, function(response) {
          return response.answer;
        });
      });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action == "openlogin") {
        // showLWindow("http://account.youdao.com/login");
                showLWindow("http://localhost:3000/");
        // showLWindow("https://reg.163.com/logins.jsp")
    }
});