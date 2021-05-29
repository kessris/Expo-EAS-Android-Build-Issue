import React from 'react';
import {ScrollView, Text, TextInput} from 'react-native';
import Screen from "./app/components/Screen";
import {Asset} from 'expo-asset';
import MapView, {Marker} from 'react-native-maps';
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
                    url: 'data:image/png;base64,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'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYXaXkhdFQHjxJ8fa7Rw0KMv6hxL4cUtsR74D96Vs_81co0QN2ogtJ8TKGFM4S1nxZGY&usqp=CAU'
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
                            </Marker>
                        )
                    }
                </MapView>

                <Text style={{paddingTop: 30}}>Text Input vertical padding: </Text>
                <TextInput style={{fontSize: 16, backgroundColor: '#b7b7b7'}} placeholder="This is an input field"/>

                <Text style={{paddingTop: 30}}>Carousel url not rendering: </Text>
                <Carousel data={data}/>
            </ScrollView>
        </Screen>

    );
}

