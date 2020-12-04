import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import style from './style'
import { CommonActions } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Array from '../../../Array'
import { Input, ButtonSet } from '../../components/index'

export default class Splash extends React.Component {

    constructor() {
        super()
        this.state = { task: '', array: [] }
    }

    componentDidMount() {
        this.setState({ array: Array })
    }

    Send = (task) => {
        if (task != '') {
            let item1 = {
                name: task,
                isSelecdted: false
            };
            let arr = this.state.array
            arr.push(item1)
            this.setState({ array: arr })
            this.props.navigation.navigate('home', { AddArray: this.state.array })
        } else {
            alert('Please enter task')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                    <SafeAreaView style={style.info}>
                        <View style={style.container}>
                            <View style={style.viewinput}>
                                <Input placeholderget={'Please enter your task'} value={this.state.task} secureTextEntry={false}
                                    onChangeTextValue={text => this.setState({ task: text })} keyboardType={'default'} />
                            </View>
                            <View style={style.viewbtn}>
                                <ButtonSet ClickText={'Submit'} Press={() => this.Send(this.state.task)} />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
