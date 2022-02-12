import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defalutText={text}></TextInput>
      <Text style={{padding: 10, fonsSize: 42}}>
        {text
          .split(' ')
          .map(word => word && 'Pizza')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
