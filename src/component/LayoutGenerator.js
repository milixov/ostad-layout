import React, {Component} from 'react';
import {Dimensions, Text, View, ScrollView} from 'react-native';

import LayoutParser from '../utils/LayoutParser'

class LayoutGenerator extends Component {

    constructor(props) {
        super(props);
    }

    static randomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    static style(height) {
        return {height,
            backgroundColor: LayoutGenerator.randomColor(),
            justifyContent: 'center',
            alignItems: 'center'}
    }

    render() {
        const {layout, height} = this.props;
        let layoutParser = new LayoutParser(height, layout);
        let mLayout = layoutParser.generate();

        return (
            <ScrollView
                style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
                {mLayout.map((item, index)=> typeof item == 'number' ?
                    <View key={`view_${index}`} style={LayoutGenerator.style(item)}>
                        <Text>Slot</Text>
                    </View> : Array.isArray(item) && item.length > 0 ?
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            {item.map(col =>
                                <View key={`col_${col.index}`}
                                      style={[LayoutGenerator.style(col.size), {flex: 1}]}>
                                    <Text>Slot</Text>
                                </View>)}
                        </View> : null)}
            </ScrollView>
        );
    }
}

export default LayoutGenerator;


