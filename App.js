import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Loop, Stage } from 'react-game-kit';



const Tamashigo = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your tamashigo!</Text>
      <Text>I am here to help you with your productive session.</Text>
      <Text>My name is </Text>
      <Text>{props.name}.</Text>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "I am hungry, please!" : "Thank you!"}
      />
    </View>
  );

const Hungry = () => {
  return (
    <>
      <Tamashigo name="Munkustrap" />
      <Tamashigo name="Spot" />
    </>
  );
}

export default Hungry;
