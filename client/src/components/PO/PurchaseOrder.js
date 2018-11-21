import React, { Component } from 'react'

export default class PurchaseOrder extends Component {

  render() {

    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Purchase Order</div>
      <div className="panel-body">
      <form className="form-inline">
      <button type="button" className="btn btn-primary">Buat Orderan</button>
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
      <th>Tanggal</th>
      <th>Supplier</th>
      <th>No. Orderan</th>
      <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Selasa, 20-11-2018 09:19</td>
      <td>Warung Bambang</td>
      <td>#0000222291092019</td>
      <td>Rp. 7.000.000</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
