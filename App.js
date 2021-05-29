import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Screen from "./app/components/Screen";
import {Asset} from 'expo-asset';
import MapView, {Marker, Callout} from 'react-native-maps';
import Carousel from "./app/components/Carousel";

export default function App() {
    const listings = [
        {
            title: 'test',
            location: {
                lat: 49.246000,
                lon: -123.078854
            }
        }
    ];

    const data = [
        {
            title: 'test',
            images: [
                {
                    url: 'http://www.w3schools.com/whatis/img_http.jpg'
                }
            ]
        },
        {
            title: 'test',
            images: [
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYXaXkhdFQHjxJ8fa7Rw0KMv6hxL4cUtsR74D96Vs_81co0QN2ogtJ8TKGFM4S1nxZGY&usqp=CAU'
                }
            ]
        }
    ];

    return (
        <Screen>
            <ScrollView style={{ backgroundColor: 'white', width: '100%', flex: 1}}>
                {
                    /**
                     <Text style={{paddingTop: 30}}>Map Cursor Too Big: </Text>
                     <MapView
                     style={{width: '100%', height: 250}}
                     initialRegion={{
                        latitude: 49.246000,
                        longitude: -123.078854,
                        latitudeDelta: 0.422,
                        longitudeDelta: 0.2121,
                    }}
                     >
                     {
                         listings.map((job, index) =>
                             <Marker
                                 image={Asset.fromModule(require('./app/assets/map-marker.png')).uri}
                                 key={index}
                                 coordinate={{ latitude: job.location.lat, longitude: job.location.lon }}
                             >
                                 <Callout>
                                     <View style={{
                                         padding: 15,
                                         width: 200,
                                         textAlign: 'center',
                                         justifyContent: 'center',
                                         alignItems: 'center'
                                     }}>
                                         <Text>{job.title}</Text>
                                     </View>
                                 </Callout>
                             </Marker>
                         )
                     }
                     </MapView>
                     */
                }

                <Text style={{paddingTop: 30}}>Text Input vertical padding issue: </Text>
                <TextInput style={{fontSize: 16, backgroundColor: '#b7b7b7'}} placeholder="This is an input field"/>

                <Text style={{paddingTop: 30}}>Carousel url not rendering issue: </Text>
                <Carousel data={data}/>

                <Text style={{paddingTop: 30, color: 'black'}}>Default colour issue: </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Default colour for both text and icon should be black like this but,</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>the default colour is light grey by default for eas-android build</Text>
            </ScrollView>
        </Screen>

    );
}

