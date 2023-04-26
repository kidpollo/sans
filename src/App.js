import React from "react";
import { StyleSheet, View, Picker } from "react-native";

// Code Challenge

// Step 1: Render the data array below with each
// item having the background color of their favorite color.

// Step 2: On change of the picker, render only people in the array
// with the same favColor as the selected item. If "all" is selected,
// render all the data.

const App = () => {
  let data = [
    {
      name: "Tom",
      favColor: "royalblue",
      id: 1
    },
    {
      name: "Sarah",
      favColor: "palevioletred",
      id: 2
    },
    {
      name: "Paul",
      favColor: "seagreen",
      id: 3
    },
    {
      name: "John",
      favColor: "royalblue",
      id: 4
    },
    {
      name: "Ashley",
      favColor: "orange",
      id: 5
    }
  ];

  return (
    <View style={styles.container}>
      <View>
        <Picker
          value={"all"}
          style={{ height: 50, width: 150 }}
          onValueChange={itemValue => console.log(itemValue)}
        >
          <Picker.Item label="Royalblue" value="royalblue" />
          <Picker.Item label="Palevioletred" value="palevioletred" />
          <Picker.Item label="Seagreen" value="seagreen" />
          <Picker.Item label="Orange" value="orange" />
          <Picker.Item label="all" value="all" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default App;
