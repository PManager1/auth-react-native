import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText })=> {

  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
        autoCorrect={false}
        style={inputStyle}
        value = {value}
        onChangeText = {onChangeText}
        />
      </View>

  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
    // whenver we have siblins on the the <Text> with a flex property designated on teh style,
    // objects, the flex property is how we allocate the proportion space to each one.
    // 2/3 of the avaialble space will be allocated to input sytle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft:20,
    flex: 1
    // 1/3 of the space will be allocated to the label style.
  },
  containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  }
}

export { Input };
