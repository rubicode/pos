import React, { Component } from 'react'
import ListItem from './ListItem'

export default class Kasir extends Component {


  render() {
    return (
      <div className="container">
      <br /><br />

      <div className="panel panel-primary">
      <div className="panel-body">

      <button type="button" className="btn btn-primary">Mulai Transaksi Baru</button>
      <br /><br />

      <div className="col-sm-6">
      <div className="panel panel-primary">
      <div className="panel-body">

      <form className='form-horizontal'>
      <div className='form-group'>
      <label className="col-sm-4 control-label">Customer</label>
      <div className="col-sm-6">
      <input type="text" className="form-control" name="customer" placeholder="Id Customer" />
      </div>
      <div className="col-sm-2">
      <button type="button" className="btn btn-primary">Cari</button>
      </div>
      </div>

      <div className='form-group'>
      <label className="col-sm-4 control-label"></label>
      <div className="col-sm-8">
      <input type="text" className="form-control" name="nama" placeholder="Nama Customer" />
      </div>
      </div>

      <div className='form-group'>
      <label className="col-sm-4 control-label">No. Nota</label>
      <div className="col-sm-8">
      <input type="text" className="form-control" name="nota" placeholder="No nota" />
      </div>
      </div>

      <div className='form-group'>
      <label className="col-sm-4 control-label">Tanggal Transaksi</label>
      <div className="col-sm-8">
      <input type="date" className="form-control" name="tt" placeholder="tt" />
      </div>
      </div>
      </form>

      </div>
      </div>
      </div>

      <div className="col-sm-6">
      <div className="panel panel-success">
      <div className="panel-body">

      <div className='form-group'>
      <label className="col-sm-4 control-label">Tanggal Transaksi</label>
      <div className="col-sm-8">
      <div className="panel panel-success">
      <div className="panel-body">
      <h3>Rp. 2.500.000,00</h3>
      </div>
      </div>
      </div>
      </div>

      </div>
      </div>
      </div>


      <form>
      <div className="form-row">
      <div className="form-group col-md-2">
      <label>Kode Barang</label>
      <input type="text" className="form-control" name="" placeholder="Kode Barang" />
      </div>

      <div className="form-group col-md-2">
      <label>Nama Barang</label>
      <input type="text" className="form-control" name="" placeholder="Nama Barang" />
      </div>

      <div className="form-group col-md-2">
      <label>Stock</label>
      <input type="text" className="form-control" name="" placeholder="Stock" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga Satuan</label>
      <input type="text" className="form-control" name="" placeholder="Harga Satuan" />
      </div>

      <div className="form-group col-md-2">
      <label>Jumlah Jual</label>
      <input type="text" className="form-control" name="" placeholder="Jumlah Jual" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga Akhir</label>
      <input type="text" className="form-control" name="" placeholder="Harga Akhir" />
      </div>
      </div>

      <ListItem />

      </form>

      <br /><br />

      <table className="table table-striped">
      <thead>
      <tr>
      <th>Kode Barang</th>
      <th>Nama Barang</th>
      <th>Harga Satuan</th>
      <th>Jumlah Jual</th>
      <th>Opsi</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>a98a00</td>
      <td>Sabun</td>
      <td>1000</td>
      <td>12</td>
      <td><button type="button" className="btn btn-danger">Hapus</button></td>
      </tr>
      </tbody>
      </table>

      <form className='form-horizontal'>
      <div className='form-group'>
      <label className="col-sm-2 control-label">Bayar</label>
      <div className="col-sm-4">
      <input type="text" className="form-control" name="" placeholder="Bayar" />
      </div>
      </div>

      <div className='form-group'>
      <label className="col-sm-2 control-label">Kembalian</label>
      <div className="col-sm-4">
      <input type="text" className="form-control" name="" placeholder="Kembalian" />
      </div>
      </div>

      <button type="button" className="btn btn-primary col-md-offset-2 ">Bayar</button>&nbsp;
      <button type="button" className="btn btn-success">Simpan Transaksi</button>

      </form>

      </div>
      </div>
      </div>
    )
  }
}
