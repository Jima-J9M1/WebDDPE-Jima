

function swap() {
    let photo = document.getElementById('image');
    let vid = document.getElementById('vid');
    let parentCon = document.getElementById('data');
    
    parentCon.insertBefore(photo,vid);
    let btn = document.getElementById('last');
    parentCon.insertBefore(vid,btn);
   

}
function remove(){

    let rem1 = document.getElementById('A1');
    let parentContain = document.getElementById('audi');
    parentContain.removeChild(rem1);
}

function add(){
    let img = document.createElement('img');
    img.src="Images/Eric Hoffer.jpg";
    img.style.width="760px";
    img.style.height="300px";
    let parent0 = document.getElementById('data');
    let beforeNode = document.getElementById('addImage');
    parent0.insertBefore(img, beforeNode);

}