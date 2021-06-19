//import React from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

require("react-bootstrap/ModalHeader");

 const pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    color: 'black'

  };
 
class carPage extends Component{
    
  

     constructor() {
        super();
        this.state = {  
            cars: [],
            uidSet:[],
            carData: [],
            show: false,
            showbtn: true,
            avgTimeData:[]
        }
       
    }

   
    componentDidMount(){

        fetch(`/api/cars/dictionary`)
        .then(res => res.json())
        .then(({uidSet, CarsEntered}) => this.setState({uidSet, CarsEntered}, ()=> console.log('Cars..',uidSet)
            ));   
    }
    
   
    
     searchByUid = (event) => {
      event.preventDefault();
      var uid = this.state.uid;
    //   {console.log(uid)} 
        fetch(`/api/cars/search/${this.state.uid}`)
        .then(res => res.json())
        .then(({cars, Entered, Left}) => this.setState({cars,Entered, Left},
           console.log('Cars..',cars)
         ));
         fetch(`/api/cars/avgtime/${this.state.uid}`)
        .then(res => res.json())
        .then(({Uid, Hours, Minutes,Seconds}) => this.setState({Uid, Hours, Minutes,Seconds},
         ));

    }
    


    tableData() {
       
           return this.state.dataSet.map((uid,index)=>{
            return(
            <li><button onClick={this.myChangeHandler} onDoubleClick={this.searchByUid} value={uid} style={bStyle}>{uid}</button></li>
            
            // <li onClick={this.searchByUid}><a href="#">{uid}</a></li>
            )
           })
  
     }
    

    render(){
        
        return(
            <div className='fullPage'>
            
              <center>
               <div id="body">
               <br/>
                 
       
            <div>
         {this.state.isActive ?
         
         <table style={pStyle} id='cars'>
            <thead>

            <tr>
              <th>UID</th>
              <th>Time In</th>
              <th>Time Out</th>
            </tr>
          </thead>
               <tbody>
                  {this.tableData2()}
               </tbody>
               <button onClick={this.handleHide}>Back</button>
            </table>
        : null }
        
         </div>
         </div>  
         </center>
               </div>
         );
    };
   
}


export default carPage;