import React, { Component } from 'react'

export default class BuatOrderan extends Component {
  render(){
    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Buat Orderan</div>
      <div className="panel-body">
      <form>
      <div className='form-group'>
      <label className="control-label">Pilih Supplier</label>
      <select className="form-control" name="rate">
      <option>Pilih Supplier</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
      </div>

      <div className="form-group">
      <label className="control-label">Catatan</label>
      <textarea className="form-control" name="catatan" placeholder="Catatan" rows="8"  />
      </div>

      <div className="form-row">
      <div className="form-group col-md-3">
      <label>Item</label>
      <input type="text" className="form-control" name="" placeholder="Item" />
      </div>

      <div className="form-group col-md-2">
      <label>Stok</label>
      <input type="text" className="form-control" name="" placeholder="Stok" />
      </div>

      <div className="form-group col-md-2">
      <label>Order</label>
      <input type="text" className="form-control" name="" placeholder="Order" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga</label>
      <input type="text" className="form-control" name="" placeholder="Harga" />
      </div>

      <div className="form-group col-md-3">
      <label>Total</label>
      <input type="text" className="form-control" name="" placeholder="Total" />
      </div>
      </div>



      <div className="form-row">
      <div className="form-group col-md-3">
      <label>Item</label>
      <input type="text" className="form-control" name="" placeholder="Item" />
      </div>

      <div className="form-group col-md-2">
      <label>Stok</label>
      <input type="text" className="form-control" name="" placeholder="Stok" />
      </div>

      <div className="form-group col-md-2">
      <label>Order</label>
      <input type="text" className="form-control" name="" placeholder="Order" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga</label>
      <input type="text" className="form-control" name="" placeholder="Harga" />
      </div>

      <div className="form-group col-md-3">
      <label>Total</label>
      <input type="text" className="form-control" name="" placeholder="Total" />
      </div>
      </div>

      <div className="form-group col-md-4">
      <label>Total</label>
      <div className="form-group col-md-8">Rp. 40.000.000
      </div>
      </div>

      <button type="button" className="btn btn-primary btn-lg btn-block">Tambah Item</button>

      <br /><br />

      <button className="btn btn-primary" type="submit">Buat</button>
      <button className="btn btn-warning" type="submit">Batal</button>

      </form>

      </div>
      </div>
      </div>
      </div>
    )
  }
}
