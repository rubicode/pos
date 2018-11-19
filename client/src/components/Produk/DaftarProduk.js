import React, { Component } from 'react'
import DataProduk from './DataProduk'

export default class DaftarProduk extends Component {

  render() {

    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Produk</div>
      <div className="panel-body">
      <form className="form-inline">
      <button type="button" className="btn btn-primary">Tambah</button>
      <div className="form-group">
      <label></label>&nbsp;
      <input type="text" className="form-control" name="id" placeholder="Cari berdasarkan id" />
      </div>
      <div className="form-group">
      <label></label>&nbsp;
      <input type="text" className="form-control" name="nama" placeholder="Cari berdasarkan nama" />
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>Kode</th>
      <th>Nama</th>
      <th>Kategori</th>
      <th>Harga</th>
      <th>Stok</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <DataProduk />
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
