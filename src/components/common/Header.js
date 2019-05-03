import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}> 
      <Text style={textStyle}>{props.headerText}</Text>
    </View>    
    );
};

const styles = {
  viewStyle: {
      backgroundColor: '#6EC95B',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 2.8,
      elevation: 30,
      position: 'relative'
  },
  textStyle: {
      fontSize: 20
  }
};

export { Header };
