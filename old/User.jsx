import React, { useState } from 'react';
import {View, Text} from 'react-native';

export const UserComponent = () => {

    const [user, userChange] = useState('Your name');

    return(
        <View>
            <Text>
                Goog evening!!!
            </Text>
        </View>
    )


}

