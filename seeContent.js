function onKeypress(e){ 
    var ctrlPressed=0;
    var evt = (e==null ? event:e);
    ctrlPressed =evt.ctrlKey;
    if ((ctrlPressed) && (evt.key == 'q')) {
        console.log("yup" + e.key); 
    }
};

document.addEventListener("keypress", onKeypress);