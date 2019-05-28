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
    state ={layout: "XL", height: 0};
    render() {
        let data = [{
            value: 'XL',
        }, {
            value: '2XL',
        },{
            value: 'L/4SM/XL',
        },{
            value: 'XL/2L',
        },{
            value: 'XL/L/2SM',
        }];

        const {layout, height} = this.state;
        return (
            <SafeAreaView onLayout={(event) => {
                this.setState({height: event.nativeEvent.layout.height})
            }} style={{ flex: 1, backgroundColor: "white" }}>
                <View>
                    <Dropdown
                        itemCount={5}
                        label='Select Layout Here'
                        data={data}
                        value={layout}
                        onChangeText={layout=>this.setState({layout})}
                    />
                </View>
                <LayoutGenerator layout={layout} height={height}/>
            </SafeAreaView>
        );
    }
}
