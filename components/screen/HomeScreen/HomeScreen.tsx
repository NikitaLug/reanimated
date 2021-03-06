import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'
import { Routes } from '../../../constants/config'
import styles from './HomeScreen.styles'

const HomeScreen: FC = () => {
    const navigation: any = useNavigation()
    return (
        <View style ={styles.wrapper}> 
            <Text>HomeScreen</Text>
            <Button
                title={'Color picker'}
                color = {'green'}
                onPress={()=> navigation.navigate(Routes.COLOR_PICKER_SCREEN)}
            />
            <Button
                title={'Circular progress'}
                color = {'green'}
                onPress={()=> navigation.navigate(Routes.CIRCULAR_PROGRESS_SCREEN)}
            />
            <Button
                title={'List'}
                color = {'green'}
                onPress={()=> navigation.navigate(Routes.LIST_SCREEN)}
            />
            <Button
                title={'Ripple effect'}
                color = {'green'}
                onPress={()=> navigation.navigate(Routes.RIPPLE_EFFECT_SCREEN)}
            />
        </View>
    )
}

export default HomeScreen
