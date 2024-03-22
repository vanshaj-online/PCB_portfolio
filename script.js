function init(){

    let cursor = document.querySelector('.second-cursor')
    
    window.addEventListener('mousemove',function(dets){
        cursor.style.transform = `translate(${dets.clientX - 20}px, ${dets.clientY - 20}px)` 
    })


}

init()