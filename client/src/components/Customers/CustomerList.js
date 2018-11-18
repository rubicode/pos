import React, { Component } from 'react'
import DataCustomer from './DataCustomer'

export default class CustomerList extends Component {

  render() {

    return(
      <div className="container">
      <div className="panel panel-default">
      <div className="panel-heading">Search Form</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <label>Nama</label>
      <input type="text" className="form-control" name="nama" placeholder="nama" />
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>#</th>
      <th>Nama</th>
      <th>Pelanggan Sejak</th>
      <th>Bulan Ini</th>
      <th>Tahun Ini</th>
      <th>Semuanya</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <DataCustomer />
      </tbody>
      </table>
      </div>
    )
  }
}
