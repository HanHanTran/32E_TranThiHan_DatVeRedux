const stateDefault ={
    danhSachGheDangDat: [

    ]
}
const BaiTapDatVeReducer = (state = stateDefault, action ) => {
 switch (action.type) {
    case 'DAT_GHE':{
        let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
        if (index !== -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        }else {
            danhSachGheDangDatUpdate.push(action.ghe)
        }
        state.danhSachGheDangDat = danhSachGheDangDatUpdate;
        return {...state}

    }
 }
}
export default BaiTapDatVeReducer