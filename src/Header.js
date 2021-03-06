import React from 'react';
import {
  Text,
  View
  } from 'react-native';

 const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Prakiran Cuaca</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 23,
      color: '#000',
      textAlign: 'center'
    }
}
export default Header;
