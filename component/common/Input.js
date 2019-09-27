import React from 'react';
import { Text, View,TextInput,StyleSheet } from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
        const {inputStyle,labelStyle,containerStyle} = Styles
    return(
    <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCapitalize='none'
        autoCorrect={false}
        style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                       
                    />
    </View>
    );
}


const Styles = StyleSheet.create({
    inputStyle:{
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        flex:2,
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1,
       
    },
    containerStyle:{
       
        height:41,
        flex:1,
        alignItems:'center',
        flexDirection: 'row'
    }
})
export default Input;
