import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const GoalItem = (props: { text: string, id: string, onDeleteItem: (id: string) => void }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{ color: '#210644' }} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default GoalItem