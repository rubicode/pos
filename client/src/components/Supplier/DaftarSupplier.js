import React, { Component } from 'react'

export default class DaftarSupplier extends Component {

  render() {

    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Supplier</div>
      <div className="panel-body">
      <form className="form-inline">
      <button type="button" className="btn btn-primary">Tambah Supplier</button>
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
      <th>Nama</th>
      <th>Alamat</th>
      <th>No. Telp</th>
      <th>Email</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Warung Bambang</td>
      <td>Garut</td>
      <td>08192801821</td>
      <td>bambang@gmail.com</td>
      <td>
      <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span> Delete</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
