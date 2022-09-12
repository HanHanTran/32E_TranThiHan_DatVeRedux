import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="">
        <button className="gheDuocChon"></button> 
        <span>Ghế đã đặt</span>

        </div>
        <div className="">
        <button className="gheDuocChon"></button> 
        <span>Ghế đang đặt</span>

        </div>
        <div className="">
        <button className="gheDuocChon"></button> 
        <span>Ghế chưa chọn</span>

        </div>
            <table className="table" border={2}>
                <thead>
                    <tr>
                       <th>Số ghế</th>
                       <th>Giá</th>
                       <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Số ghế</td>
                        <td>Giá</td>
                        <td></td>

                    </tr>
                    <tr>
                    <td>Số ghế</td>
                        <td>Giá</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

      </div>
    )
  }
}
