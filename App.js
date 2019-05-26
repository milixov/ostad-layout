/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import LayoutGenerator from './src/component/LayoutGenerator';
import { Dropdown } from 'react-native-material-dropdown';

type Props = {};
export default class App extends Component<Props> {
    state ={layout: "XL"};
    render() {
        let data = [{
            value: 'XL',
        }, {
            value: '2XL',
        },{
            value: '4L',
        },{
            value: 'XL/2L',
        },{
            value: 'XL/L/2SM',
        }];

        const {layout} = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{margin: 16}}>
                    <Dropdown
                        itemCount={5}
                        label='Select Layout Here'
                        data={data}
                        value={layout}
                        onChangeText={layout=>this.setState({layout})}
                    />
                </View>
                <LayoutGenerator layout={layout}/>

            </SafeAreaView>
        );
    }
}
