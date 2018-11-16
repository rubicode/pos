import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      search: false
    }
  }

  handleShow() {
    this.setState({search: true})
  }

  handleHide() {
    this.setState({search: false})
  }

  render() {
    if(this.state.search) {
      return(
        <div>
        <form className="form-inline">
        <div className="form-group">
        <label>Kode Barang</label>&nbsp;
        <input type="text" className="form-control" name="kode" placeholder="Kode Barang"/>&nbsp;
        </div>
        <div className="form-group">
        <label>Nama Barang</label>&nbsp;
        <input type="text" className="form-control" name="kode" placeholder="Nama Barang"/>&nbsp;
        </div>
        <button type="button" className="btn btn-warning" onClick={this.handleHide.bind(this)}><span className="glyphicon glyphicon-ban-circle"> cancel</span></button>
        </form>
        </div>
      )
    } else {
      return(
        <div>
        <button type="button" className="btn btn-success" onClick={this.handleShow.bind(this)}>Cari Barang</button>&nbsp;
        <button type="button" className="btn btn-warning">Reset Transaksi</button>
        </div>
      )
    }
  }
}
