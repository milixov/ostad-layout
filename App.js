/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import LayoutGenerator from './src/component/LayoutGenerator';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <LayoutGenerator layout="XL/L/2SM"/>
            </SafeAreaView>
        );
    }
}
