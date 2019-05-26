// @flow
import React, {Component} from 'react';
import {Text, View} from 'react-native';

const layoutData = [{
    title: "XL", structure:
        [
            {flex: 1, column: []},
            {flex: 1, column: null}
        ]
}, {
    title: "2XL", structure:
        [
            {flex: 1, column: []},
            {flex: 1, column: []}
        ]
}, {
    title: "4L", structure:
        [
            {flex: 1, column: []},
            {flex: 1, column: []},
            {flex: 1, column: []},
            {flex: 1, column: []}
        ]
}, {
    title: "XL/2L", structure:
        [
            {flex: 2, column: []},
            {flex: 1, column: []},
            {flex: 1, column: []}
        ]
},
    {
        title: "XL/L/2SM", structure:
            [
                {flex: 2, column: []},
                {flex: 1, column: []},
                {
                    flex: 1, column: [
                        {flex: 1}, {flex: 1}
                    ]
                }
            ]
    }
];

type Props = {layout: 'XL' | '2XL' | '4L' | 'XL/2L' | 'XL/L/2SM'}
class LayoutGenerator extends Component<Props> {

    static randomColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    static style(flex, column) {
        return {flex,
            backgroundColor: column !== null ? LayoutGenerator.randomColor() : null,
            justifyContent: 'center',
            alignItems: 'center'}
    }

    render() {
        const {layout} = this.props;
        let mLayout = layoutData.find(item => item.title === layout);

        return (
            <View
                style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
                {mLayout ? mLayout.structure.map((item, index) =>
                    <View
                        key={"row_" + index}
                        style={LayoutGenerator.style(item.flex, item.column)}>
                        {item.column !== null ?
                            item.column.length > 0 ?
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    {item.column.map((col, colIndex) =>
                                        <View
                                            key={"col_" + colIndex}
                                            style={LayoutGenerator.style(item.flex)}>
                                            <Text>Plot</Text>
                                        </View>)}
                                </View>
                                : <Text>Plot</Text>
                            : null}
                    </View>
                ) : null}
            </View>
        );
    }
}

export default LayoutGenerator;


