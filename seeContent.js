function onKeypress(e){
    if ((e.ctrlKey) && (e.key == 'q' || e.key == 'Q')) {
        e.preventDefault();
        openLargest();
    }
};
function openLargest() {
    
    var images = document.getElementsByTagName("img");
    var largestImage = images[0];


    for(let i = 0; i < images.length; i++){
        if ((images[i].naturalHeight * images[i].naturalWidth) > (largestImage.naturalHeight * largestImage.naturalWidth) )
            largestImage = images[i];
    };
    window.open(largestImage.src);
    
};
document.addEventListener("keypress", onKeypress);