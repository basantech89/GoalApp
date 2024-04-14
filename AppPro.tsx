import React from 'react';

import { View, Text, useColorScheme, StyleSheet } from 'react-native'

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={{
      padding: 50,
      flexDirection: 'row',
      width: '80%',
      height: 300,
      justifyContent: 'space-between',
      // alignItems: 'center'
    }}>
      <View style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}><Text>1</Text></View>
      <View style={{ 
        backgroundColor: 'blue',
        justifyContent: 'center',
        flex: 2,
        alignItems: 'center'
      }}><Text>2</Text></View>
      <View style={{
        backgroundColor: 'green',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
      }}><Text>3</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  whiteText: { color: '#FFF' },
  blackText: { color: '#000' }
})

export default AppPro