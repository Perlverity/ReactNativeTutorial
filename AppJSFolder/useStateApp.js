import React, {useState} from 'react';
import {Text, View, ScrollView, TextInput, Button} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}></Button>
    </View>
  );
};

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="hey" />
      <Cat name="Maru" />
    </View>
  );
};

export default App;
