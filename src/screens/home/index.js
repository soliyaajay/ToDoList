import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, Button } from 'react-native';
import style from './style'
import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';

export default class login extends React.Component {

    constructor() {
        super()
        this.state = { clickarray: '', array: [] }
    }

    componentDidMount() {
        this.setState({ array: Array })
        if (this.props.route.params != undefined) {
            this.setState({ array: this.props.route.params.AddArray })
        }
    }

    SetArray = (item, index) => {
        if (item == false) {
            let arr = this.state.array
            arr[index].isSelecdted = true
            this.setState({ array: arr })
        } else {
            let arr = this.state.array
            arr[index].isSelecdted = false
            this.setState({ array: arr })
        }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <View style={style.info}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: hp('14%') }}
                        showsVerticalScrollIndicator={false}
                        data={Array}
                        renderItem={({ item, index }) => (
                            <View style={style.flatview}>
                                <Text style={{ textDecorationLine:item.isSelecdted ? 'line-through' : 'none',fontSize: hp('1.9%'), color: item.isSelecdted ? 'silver' : 'black' }}>{item.name}</Text>
                                <TouchableOpacity onPress={() => this.SetArray(item.isSelecdted, index)}>
                                    {item.isSelecdted ?
                                        <Image source={image.check} resizeMode={"contain"} style={style.checkstyle} /> :
                                        <Image source={image.uncheck} resizeMode={"contain"} style={style.checkstyle} />}
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={style.plusview}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('add')}>
                            <Image source={image.plus} style={style.plusimg} resizeMode={"contain"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

