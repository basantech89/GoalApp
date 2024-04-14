import { Button, StyleSheet, Modal, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'

const GoalInput = (props: {
  onAddGoal: (goal: string) => void
  onCancel: () => void
  visible: boolean
}) => {
  const [goalText, setGoalText] = useState('')

  function goalInputHandler(text: string) {
    setGoalText(text)
  }

  function addGoalHandler() {
    props.onAddGoal(goalText)
    setGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          onChangeText={goalInputHandler}
          value={goalText}
          style={styles.textInput}
          placeholder='Your course goal!' 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal..." onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})