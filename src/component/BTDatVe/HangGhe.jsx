import React, { Component } from 'react'
import {connect} from 'react-redux';
class HangGhe extends Component {
  renderGhe = () =>{
    return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
      // if (index === 0) {
      //   return <span className="rowNumber">{ghe.soGhe}</span>
      // }
      let cssGheDaDat = '';
      let disabled = false;

      if(ghe.daDat){
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }
      let cssGheDaDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
      
      (gheDangDat => gheDangDat..soGhe === ghe);
      if (indexGheDangDat !== -1) {
        cssGheDaDat = 'gheDangChon';
      }

      return <button onClick={() =>{
        this.props.datGhe(ghe)
      }} className={`ghe ${cssGheDaDat} ${cssGheDaDat}`}key={index} disabled={disabled}>
        {ghe.soGhe}
      </button>
    })
  }

  renderSoHangGhe =()=>{
    return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
      return <button className="rowNumber">
        {hang.soGhe}
      </button>
      
    })
  }
  renderHangGhe =()=>{
    if(this.props.soHangGhe === 0){
     return <div>
        {this.props.hangGhe.hang} {this.renderSoHangGhe()}

     </div>
    }else{
      return <div className="">
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    }
  
  }
  render() {
    return (
      <div className='text-left mt-2'>
        {this.renderHangGhe()}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {

    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
  }

  
}
const mapDispatchToProps = (disabled) =>{
  return{
    datGhe: (ghe) =>{
      disabled({
        type: 'DAT_GHE',
        ghe

      })
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);
