import React, { Component } from 'react'

export default class DaftarInvoice extends Component {

  render() {

    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Invoice</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <label></label>&nbsp;
      <input type="text" className="form-control" name="nama" placeholder="Cari" />
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>No. Struk</th>
      <th>Tanggal</th>
      <th>Customer</th>
      <th>Total</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>000121</td>
      <td>Selasa, 22-10-2018</td>
      <td>Bambang</td>
      <td>Rp. 20.000.000</td>
      <td>
      <button type="button" className="btn btn-primary"> Detail</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
