import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex: 1, backgroundColor: Color.WHITE
  },
  flatview: {
    backgroundColor: "white", marginTop: hp('1.5%'), height: hp('6%'), marginHorizontal: wp('5%'),
    alignItems: "center", borderRadius: 50, flexDirection: "row", width: wp('90%'), justifyContent: "space-between",
    paddingHorizontal: wp('5%'),
    shadowColor: '#CCD1D1',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5
  },
  checkclick: {
    width: wp('6%'), height: hp('2.5%'),
    borderRadius: 50, backgroundColor: "white", justifyContent: "center", alignItems: "center",
    shadowColor: '#CCD1D1',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5
  },
  plusview : {
    position: 'absolute', left: wp('40%') , bottom: hp('1%'),
  },
  plusimg : {
    width:wp('18%'),height:hp('9%'),alignSelf:"center",
  },
  checkstyle : {
    width: wp('12%'), height: hp('4%')
  }

});
module.exports = styles;