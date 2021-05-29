import * as React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0
        }
    }

    _renderItem({item}){
        return (
            <View style={{
                backgroundColor: 'grey',
                borderRadius: 5,
                height: 400,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Image style={{width: '100%', height: '100%'}} source={{ uri: item.images[0].url}} resizeMode="contain"/>
                <View style={{position: 'absolute', bottom: 0, backgroundColor: 'black', width: '100%', height: 100, opacity: 1, padding: 15}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', paddingBottom: 10}} numberOfLines={1}>{item.title}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.props.data}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
        );
    }
}