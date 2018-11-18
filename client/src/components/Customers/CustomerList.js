import React, { Component } from 'react'
import DataCustomer from './DataCustomer'

export default class CustomerList extends Component {

  render() {

    let dataNodes = filteredData.map(function(data){
      return(
        <DataItem key={data.id} data={data} {...actions} />
      )
    });

    return(

    )
  }
}
