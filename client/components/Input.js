import { View, Text, TextInput } from 'react-native';
import React from 'react';

const Input = (props) => {
    return (
        <View
            className={`flex-col mx-[19px] py-[10px] ${
                props.border ? 'border-b-[1px]' : ''
            }`}
        >
            <Text
                style={{ fontFamily: 'LexendRegular' }}
                className="text-[19px]"
            >
                {props.label}
            </Text>
            <TextInput
                onChangeText={props.handleChange}
                value={props.value}
                placeholder={props.placeholder}
                style={{ fontFamily: 'LexendRegular' }}
                className="text-[17px] mt-[6px]"
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

export default Input;
