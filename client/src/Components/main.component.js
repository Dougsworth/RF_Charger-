import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
//import "react-table-6/react-table.css";
import 'react-table/react-table.css'

export default class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      datas: []
    }
  }

  async getData(){
    const res = await axios.get('http://localhost:3000/datas')
    console.log(res.data)

    this.setState ({
      datas: res.data
    });
    
  }

componentDidMount(){
  this.getData();      
  }

  render() {
    const columns = [{  
      Header: 'Power',  
      accessor: 'power',
     }
     ,{  
      Header: 'Voltage',  
      accessor: 'voltage' ,
      }
     ,{  
     Header: 'Current',  
     accessor: 'current' ,
     }
     ,{  
     Header: 'Date',  
     accessor: 'Date',
     }
    //  ,{  
    //   Header: 'ID',  
    //   accessor: '_id'
    //   }
     
  ]

    return (
      <ReactTable  
      data={this.state.datas}  
      columns={columns}  
   />
    )
  }
}
