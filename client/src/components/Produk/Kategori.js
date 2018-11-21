import React, { Component } from 'react'
import DataKategori from './DataKategori'

export default class Kategori extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      adding: false
    }
  }

  handleAddClick(){
    this.setState({adding: true})
  }

  handleCancelClick(){
    this.setState({adding: true})
  }

  render() {
    if(this.state.adding) {
      return(
        <div className="container">
        <br />
        <div className="panel panel-primary">
        <div className="panel panel-default">
        <div className="panel-heading">Customer List</div>
        <div className="panel-body">
        <form className="form-inline">
        <div className="form-group">
        <label>Nama Kategori</label>
        <input type="text" className="form-control" name="nama" placeholder="Nama Kategori" />
        </div>
        <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-ok-circle"> save</span></button>&nbsp;
        <button type="button" className="btn btn-warning" onClick={this.handleCancelClick.bind(this)}><span className="glyphicon glyphicon-ban-circle"> cancel</span></button>
        </form>
        </div>
        </div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th>Nama Kategori</th>
        <th>Stok Item</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <DataKategori />
        </tbody>
        </table>
        </div>
        </div>
      )
    }else {
      return(
        <div className="container">
        <br />
        <div className="panel panel-primary">
        <div className="panel panel-default">
        <div className="panel-heading">Customer List</div>
        <div className="panel-body">
        <button type="button" className="btn btn-primary" onClick={this.handleAddClick.bind(this)}>Tambah</button>
        </div>
        </div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th>Nama Kategori</th>
        <th>Stok Item</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <DataKategori />
        </tbody>
        </table>
        </div>
        </div>
      );
    }
  }
}
