let img=document.getElementById("img");
let timer=document.getElementById("head");
let count=10;
let clock=setInterval(function(){
    count-=1
    timer.textContent="Time Left: 0"+ count;
    if(count==3){
        timer.style.color="red"
    }
    if(count==0){
        clearInterval(clock);
        timer.textContent="Bomb Blasted";
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5Uo53HJewkxrU90A7ZaVhDRIaKGoow-W3mEhsxTNK6c_bCFhFwUFB_Q&s=10"
    }

},1000)
