function roll(d) {
    let result=Math.floor(Math.random()*d)+1;
    if (d==2){
        if (result==1){
            return "head";
        }else{
            return "tail";
        }
    }else{
        return result.toString();
    }
}

function update() {
    const result=document.getElementById('result')

    result.classList.remove('promena');
    void result.offsetWidth;//ty stackoverflow https://stackoverflow.com/questions/4847996/css-animation-onclick
    result.innerText = roll(+document.getElementById('d-value').value);
    result.classList.add('promena');
}
