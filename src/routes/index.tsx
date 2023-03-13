import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Movies from '../pages/Movies'
import StackRoutes from './StackRoutes';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, 

                drawerStyle: {
                    backgroundColor: '#5555563',
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: '#0097B2',
                drawerActiveTintColor: '#FFFFFF',
                drawerInactiveTintColor: '#FFFFFF'
            }}
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={StackRoutes} 
            options={{
                title: 'Home',
                drawerIcon: ({focused, size, color}) => {
                    return <MaterialCommunityIcons
                        name={focused ? 'movie-open' : 'movie-outline'}
                        size={size}
                        color={color} />;
                }

            }}
            />

            <Drawer.Screen 
                name="Movies" 
                component={Movies} 
                options={{
                    title: 'Filmes Favoritos',
                    drawerIcon: ({focused, size, color}) => {
                        return <MaterialCommunityIcons
                            name={focused ? 'star' : 'star-outline'}
                            size={size}
                            color={color} />;
                    }
                }}
                />
        </Drawer.Navigator>
    )
}