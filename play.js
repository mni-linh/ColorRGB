function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function exception(value,arr){
    var newArr =[]
    arr.forEach(element => {
        if (element !==value) {
            newArr.push(element)
        }

    });
    return newArr
}
replay()
function replay(){

    var color = [getRndInteger(0,256), getRndInteger(0,256), getRndInteger(0,256)]
    document.getElementById("r").innerText=color[0];
    document.getElementById("g").innerText=color[1];
    document.getElementById("b").innerText=color[2];
    
    var randomPos = getRndInteger(0, 3)
    
    document.getElementsByClassName("a_item")[randomPos].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`

    var newArray = exception(randomPos,[0,1,2])
    newArray.forEach(element =>{
        var color = [getRndInteger(0,256), getRndInteger(0,256), getRndInteger(0,256)]
        document.getElementsByClassName("a_item")[element].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`
    })
    var colorRGB = `rgb(${color[0]}, ${color[1]}, ${color[2]})` 
    console.log(colorRGB)
    for (var i =0 ;i<3;i++){
        let e =document.getElementsByClassName("a_item")[i]
    
        e.addEventListener('click',function(){
            console.log(e.style.backgroundColor)
            document.getElementsByClassName("q")[0].style.backgroundColor = colorRGB
            if (e.style.backgroundColor ==  colorRGB){
                document.getElementsByClassName('result')[0].innerText = "CORRECT"
                document.getElementsByClassName('play')[0].innerText = "PLAY AGAIN"
            }else{
                document.getElementsByClassName('result')[0].innerText = "TRY AGAIN"
                document.getElementsByClassName('play')[0].innerText = "NEWS COLOR"
    
            }
    
        })
    }
    document.getElementsByClassName('play')[0].addEventListener('click',function(){
        replay()
    })

}    

