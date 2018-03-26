import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const kotaIcon = require('./img/kota.png');
const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city +
 '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  render() {
    return (
    <View style={{flex:1,backgroundColor:'#00e6e6'}}>
      <View style={{margin:20,padding: 10, backgroundColor:'white', borderRadius: 5}}>
          <Text style={{padding: 20, fontSize: 18, color: 'black', textAlign:'center'}}> Masukan Nama Kota </Text>

              <TextInput style = {{height: 40,width:300, justifyContent: 'center'}}
                placeholder="Masukkan Kota"
                onChangeText={(city)=>this.setState({city})}
                //keyboardType = ''
              />
              <Button
                onPress={() => this.getWeather()}
                title="Mencari"
                color="#00e6e6"
                accessibilityLabel="Klik untuk melihat cuaca"
              />
      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
            <View style={styles.iconContainer}>
              <Image source={kotaIcon} style={styles.icon} />
            </View>
            <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
            <View style={styles.iconContainer}>
              <Image source={tempIcon} style={styles.icon} />
            </View>
            <Text> Temp : { this.state.forecast.temp} </Text>
        </View>
        <View style={styles.button}>
            <View style={styles.iconContainer}>
              <Image source={mainIcon} style={styles.icon} />
            </View>
            <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
            <View style={styles.iconContainer}>
              <Image source={mainIcon} style={styles.icon} />
            </View>
            <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#32CD32',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {

    flex: 0.7,
    backgroundColor: 'blue',
  },
  box4: {
    flex: 0.3,
    height: 80,
    flex: 0.7,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    borderRadius: 5,
   },
  box5: {
    flex: 0.7,
    backgroundColor: '#1565C0',
    margin: 10,
    marginBottom: 30,
  },
  button: {
    width: 300,
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00e6e6',
    //marginBottom: 70,

    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#DCDCDC',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#000',
    height: 20,
    width: 25,
  }
});
