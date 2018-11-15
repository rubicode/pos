import React, { Component } from 'react'

export default class Kasir extends Component {


  render() {
    return (
      <div className="container">
      <br /><br />

      <div className="panel panel-warning">
      <div className="panel-body">

      <button type="button" className="btn btn-primary">Mulai Transaksi Baru</button>
      <br /><br />

      <div className="col-sm-6">
      <div className="panel panel-primary">
      <div className="panel-body">

      <form className='form-horizontal'>
      <div className='form-group'>
      <label className="col-sm-4 control-label">No. Nota</label>
      <div className="col-sm-8">
      <input type="text" className="form-control" name="nota" placeholder="no nota" />
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
      </form>

      </div>
      </div>
      </div>
    )
  }
}