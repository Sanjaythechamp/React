/*
first code
import Component from "./Component/Component.js";

function App(){
  // we sent data from app.js to component.js

    //let expenseDate = new Date(2023,8,11);
    //let title = "School fee";
    //let expenseAmount = 200;
    
    let expense = [
        {  serialNo : 0,
            name :"Rahul",
            title :" school-fee",
            Amount : 2400,
            
        },
        {   serialNo : 1,
            name : "Ankit",
            title :" college-fee",
            Amount : 2400
        },
        {
            serialNo : 2,
            name : "Mohan",
            title :" Bus-fee",
            Amount : 2400
        },
        {
            serialNo : 3,
            name : "Sohan",
            title :" Tution-fee",
            Amount : 2400
        },
    ]

    return(

        <div>
              

        
            <Component
        serialNo = {expense[0].serialNo}
         name = {expense[0].name}
         title={expense[0].title} 
         Amount={expense[0].Amount}>
        
                 </Component>
                 



              
                 <Component
                    serialNo = {expense[1].serialNo}
         name = {expense[1].name}
         title={expense[1].title} 
         Amount={expense[1].Amount}>
                 </Component>
                 <Component
              
              serialNo = {expense[2].serialNo}
         name = {expense[2].name}
         title={expense[2].title} 
         Amount={expense[2].Amount}>
                 </Component>
                 <Component
        
        serialNo = {expense[3].serialNo}
         name = {expense[3].name}
         title={expense[3].title} 
         Amount={expense[3].Amount}>
                 </Component>
                 

                

                 </div>
        
    )
}
export default App;

*/

// another code
// this code is of contetn,footer,header.js

import React, { Component } from 'react';
import Header from './Component/Header.js'
import Content from './Component/Content.js'
import Footer from './Component/Footer';

function App(){
    let clickhandler = ()=>{
        alert("item is clicked");
    }
    return(
        <div>
            <Header/>
            <Content title="WElCOME TO MY PAGE!" text="This is the main Content Application"/>
            <Footer/>
            <button onClick={clickhandler}>
                
            </button>
        </div>
    )
}
export default App;



// THird code
