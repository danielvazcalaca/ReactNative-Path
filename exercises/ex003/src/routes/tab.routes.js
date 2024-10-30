import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EstanteLivros from '../screens/biblioteca'
import Catalogo from '../screens/catalogo/Catalogo'
import Relatorio from '../screens/relatorio/Relatorio'
import { Text, StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}
    >
      {/*  */}
      {/*  */}

      {/* Configuração da TabBar da biblioteca */}

      <Tab.Screen
        name='biblioteca'
        component={EstanteLivros}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'library' : 'library-outline'}
              size={focused ? 30 : 24}
              color='black'
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#127780' : 'rgb(54, 54, 54)',
                fontWeight: focused ? 'bold' : '600',
                fontSize: focused ? 14 : 12,
              }}
            >
              Biblioteca
            </Text>
          ),
        }}
      />

      {/*  */}
      {/*  */}

      {/* Configuração da TabBar no Catálogo */}

      <Tab.Screen
        name='catalogo'
        component={Catalogo}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? 'address-card' : 'address-card-o'}
              size={focused ? 30 : 24}
              color='black'
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#7F04A6' : 'rgb(54, 54, 54)',
                fontWeight: focused ? 'bold' : '600',
                fontSize: focused ? 14 : 12,
              }}
            >
              Catálogo
            </Text>
          ),
        }}
      />

      {/*  */}
      {/*  */}

      {/* Configuração da TabBar no Relatório */}

      <Tab.Screen
        name='relatorio'
        component={Relatorio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              size={focused ? 30 : 24}
              color='black'
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#2F8158' : 'rgb(54, 54, 54)',
                fontWeight: focused ? 'bold' : '600',
                fontSize: focused ? 14 : 12,
              }}
            >
              Relatório
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

//
// css
//

styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingTop: 5,
    paddingBottom: 15,
  },
})
