import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
// import data from '././danhSachGhe.json'
import data from './danhSachGhe.json'
// import '././style.css'
export default class BTDatVeRedux extends Component {

  renderHangGhe =() =>{
    return data.map((hangGhe,index) =>{
      return <div className="" key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>

      </div>
    })
  }
  render() {
    return (
      <div className='' style={{backgroundImage:"url('./imgs/bgmovie.jpj')", backgroundColor:"#ccc"}}>
        <div className="container">
          <h1>Bài tập đặt vé</h1>
          <div className="row">
            <div className="col-8" >
              <div className="" style ={{}}>
                <h3>Màn hình</h3>
              <div className="screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <h3 className='text-center'>Danh sach ghế bạn chọn</h3>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
