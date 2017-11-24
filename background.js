function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "/my-page.html"
   });
}

function onKeypress(e){
    if ((e.ctrlKey) && (e.key == 'q' || e.key == 'Q')) {
        e.preventDefault();
        console.log(e.key + " pressed"); 
        //browser.browserSettings.allowPopupsForUserEvents.set(true);
        openMyPage();
    }
};

browser.browserAction.addListener("keypress", onKeypress);