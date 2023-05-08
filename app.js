//import React, {useState}from'react';



const {useState} = React;

function CalcFunction(){
const [sum, setSum] =useState("");
const [result, setResult] =useState("");

const ops=["/","*","-","+","."];


//Case 1: logic to check if operators exist already or NOT
const updateSum=(value)=>{
   if(ops.includes(value) && sum === "" || ops.includes(value) && ops.includes(sum.slice(-1))){
       return;
   }
   
   setSum(sum+value)
     
    
     if(!ops.includes(value)){
         setResult(eval(sum + value ).toString())
    }
       
 }//End case1;
 

 
// case 2:A function generating 10 <button> Element to render
 const putButton=()=>{
       let arr=[];
        for(let i=1; i<10; i++){
             arr.push(
             <button key={i} onClick={()=> updateSum(i.toString())}>{i}</button>
         )
    }   
     return arr;         
 }//End case 2;
 

 // case 3: (=) function to calucate sum
 const calculate =()=>{
     setSum(result);
     
 }
 
 
 // case 4: Del button to delete sum starting from the last digit
 const del =()=>{
     
     setSum(sum.slice(0,-1));
     setResult(sum.slice(0,-1));
 }// End Case 4
 
 
 
 
 
 
 // Case 5: clear button 
 const clear=()=>{
     setSum("")
     setResult("")
 }
 
 
 
 

    return(
    <div className ="app">
  <div className="calculator">
  
       <div className ="display">
       {result? <span>({result})</span>:""} 
       
       {sum || "0"}   
       </div>
       
       <div className ="operators">
        <button onClick={clear}>C</button>
         <button onClick={()=> updateSum("/")}>/</button>
         <button onClick={()=> updateSum("*")}>*</button>
         <button onClick={()=> updateSum("-")}>- </button>     
         <button onClick={()=> updateSum("+")}>+</button>
         
         
         <button onClick={del}>DEL</button>
         </div>
         
         <div className ="digits">
           {putButton ()}
          <button onClick={()=> updateSum("0")}>0</button>
          <button onClick={()=> updateSum(".")}>.</button>
          <button onClick={calculate}>=</button>
          </div>
          
    </div>
    </div>
    )
 }


const clsComp = <CalcFunction/>;
const idContainet = document.getElementById('root');
  
ReactDOM.render(clsComp, idContainet);