import { View, StyleSheet, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState<Array<{ text: string; id: string }>>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goalText: string) {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id: string) {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={itemData => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});

export default App;
