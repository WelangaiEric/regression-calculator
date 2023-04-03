
let sumOfX = 0;
let sumOfY = 0;
let sumOfXX = 0;
let sumOfXY = 0
let t = 0
let k = 0
let n = 0
let m =0
let X = 1
let run = ()=>{
    if(xArray.length === yArray.length){
        // convert to numbered array
        let x =xArray.map((v)=>{
            return parseFloat(v,10)
        });
        let y =yArray.map((v)=>{
            return parseFloat(v,10)
        })
//  ================================

        for(let r = 0 ; r<x.length ;r++){
            m = x[r]
            let p = r;
            if(p<y.length){
                n =y[p]
                let g = m*n
                sumOfXY += g
            }
    
        }
    
        // console.log(sumOfXY)
    
    
        for(let i=0;i<x.length;i++){
            console.log(x[i])
            sumOfX += x[i];
            sumOfXX += x[i]*x[i];
       
        }
        
        for(let j=0;j<y.length;j++){
            sumOfY += y[j];
            k = y[j];
            
        }
        // console.log(t,k)
        let b = (x.length*(sumOfXY)-(sumOfX*sumOfY))/(x.length*(sumOfXX)-(sumOfX*sumOfX))
        let a = (sumOfY - (b*sumOfX))/x.length
        let Y = `y=${a} + ${b}x`
    
      
       document.getElementById('sumx').value=`Sum of x: ${sumOfX}`
       document.getElementById('sumy').value=`Sum of y: ${sumOfY}`
       document.getElementById('sumxy').value=`Sum of xy: ${sumOfXY}`
       document.getElementById('sumxx').value=`Sum squares of x: ${sumOfXX}`
       document.getElementById('sumx-sumx').value=`Sum of x squared: ${sumOfX*sumOfX}`
       document.getElementById('value-b').value=`value of b: ${b}`
       document.getElementById('value-a').value=`value of a: ${a}`
       document.getElementById('formula').innerHTML=`formula: ${Y}`
       var check = document.getElementById('predict').value;
        console.log(check)
       if(check!=''){
        let predicted = a + (b*parseFloat(check))
        document.getElementById('predicted').value=`predicted: ${predicted} `

       }
       else{
        document.getElementById('predicted').value=0 

       }

       
    
    
    }
    else{
        alert("the x and y dont match in number of items")
    }
    }
   

let runBtn = document.querySelector('.calculate')
runBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    run();
})

let xBtn = document.querySelector('#x-add');
let xDelBtn = document.querySelector('#x-delete');
let yBtn = document.querySelector('#y-add');
let yDelBtn = document.querySelector('#y-delete');
let xDisplay = document.querySelector('#display-x');
let yDisplay = document.querySelector('#display-y');


let xArray = [];
let yArray = [];

xBtn.addEventListener('click',function(e){
    let xVal = document.getElementById('x').value;
    e.preventDefault();
    if(xVal != undefined && xVal != ''){
        xDisplay.innerHTML=''
         xArray.push(xVal)
        console.log(xArray)
        xDisplay.innerHTML +=xArray 
        document.getElementById('x').value=''     
    }
    else{
        xDisplay.innerHTML +=`Enter values`
      
    }

})
xDelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    xArray.pop();
    document.getElementById('display-x').innerHTML=''     
    xDisplay.innerHTML +=xArray 


})
yBtn.addEventListener('click',function(e){
    let yVal = document.getElementById('y').value;
    e.preventDefault();
    if(yVal != undefined && yVal != ''){
        yDisplay.innerHTML=''
         yArray.push(yVal)
        console.log(yArray)
        yDisplay.innerHTML +=yArray    
        document.getElementById('y').value=''     
        
    }
    else{
        yDisplay.innerHTML +=`Enter values`
      
    }

})
yDelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    yArray.pop();
    document.getElementById('display-y').innerHTML=''     
    yDisplay.innerHTML +=yArray 


})