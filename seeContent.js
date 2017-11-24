function onKeypress(e){
    if ((e.ctrlKey) && (e.key == 'q' || e.key == 'Q')) {
        e.preventDefault();
        console.log(e.key + " pressed"); 
        openLargest();
    }
};
function openLargest() {
    
    var images = document.getElementsByTagName("img");
    var largestImage = images[0];
    console.log(images.length);


    for(let i = 0; i < images.length; i++){
        if ((images[i].naturalHeight * images[i].naturalWidth) > (largestImage.naturalHeight * largestImage.naturalWidth) )
            largestImage = images[i];
    };
    console.log(largestImage.src);
    window.open(largestImage.src);
    
};
document.addEventListener("keypress", onKeypress);