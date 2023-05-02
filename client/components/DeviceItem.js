import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useFocusEffect } from '@react-navigation/native';

const DeviceItem = (props) => {
    const { item } = props;
    const [isEnabled, setIsEnabled] = useState(item.status);
    const [mode, setMode] = useState(item?.mode);
    const navigation = useNavigation();

    const axiosPrivate = useAxiosPrivate();
    const updateStatus = async () => {
        try {
            const res = await axiosPrivate.put(`devices/status/${item._id}`);
            console.log(res.data);
        } catch (err) {
            console.log(err.status);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            setIsEnabled(item.status);
            setMode(item.mode);
        }, [props.item])
    );

    return (
        <TouchableOpacity
            className={`flex mx-[22px] py-[15px] ${
                props.border ? 'border-b-[1px]' : ''
            } h-[90px]`}
            onPress={() =>
                /*navigation.navigate(
                    `${
                        item?.type[0].toUpperCase() + item?.type?.slice(1)
                    }ItemDetail`,
                    { id: item._id, detail: item }
                )*/
                navigation.navigate('DeviceDetail', { detail: item })
            }
        >
            <View className="flex-row justify-between items-center">
                <Text
                    style={{ fontFamily: 'LexendMedium' }}
                    className="text-[20px] leading-[21px]"
                >
                    {item.name}
                </Text>
                <Switch
                    trackColor={{ false: 'white', true: '#5AC2DA' }}
                    thumbColor={'#F4FAFF'}
                    onValueChange={() => {
                        setMode('Thủ công');
                        updateStatus();
                        setIsEnabled((previousState) => !previousState);
                    }}
                    value={isEnabled}
                />
            </View>
            <View className="flex-row justify-between">
                <Text
                    style={{ fontFamily: 'LexendRegular' }}
                    className="text-[13px] leading-[21px] text-grey"
                >
                    {item.position}
                </Text>
                <Text
                    style={{ fontFamily: 'LexendRegular' }}
                    className="text-[13px] leading-[21px] text-grey"
                >
                    {mode}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DeviceItem;