import React, { Component } from 'react'

export default class DataCustomer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleEditClick(){
    this.setState({editing: true})
  }

  render(){
    if(this.state.editing){
      return(
        <tr>
        <td>1213131</td>
        <td><input type="text" name="nama" className="form-control" placeholder="nama" value='' /></td>
        <td><input type="text" name="pelanggan sejak" className="form-control" placeholder="pelanggan sejak" value='' /></td>
        <td><input type="text" name="bulan ini" className="form-control" placeholder="bulan ini" value='' /></td>
        <td><input type="text" name="tahun ini" className="form-control" placeholder="tahun ini" value='' /></td>
        <td><button type="button" className="btn btn-primary" ><span className="glyphicon glyphicon-folder"></span> Save</button></td>
        </tr>
      )
    }else {
      return(
        <tr>
        <td>1213131</td>
        <td>Aqua</td>
        <td>Minuman</td>
        <td>3000</td>
        <td>100</td>
        <td>
        <button type="button" className="btn btn-success" onClick={this.handleEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> Edit</button>&nbsp;
        <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span> Delete</button>
        </td>
        </tr>
      )
    }
  }

}
