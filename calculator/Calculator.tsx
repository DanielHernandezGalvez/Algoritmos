import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Calculator() {
  const [input, setInput] = useState('0');

  const handleInput = (value: string) => {
    if (value === 'C') {
      setInput('0');
    } else {
      setInput(input === '0' ? value : input + value);
    }
  };
  const handleCalc = () => {
    try {
      //   const result = eval(input);
      //   setInput(Number.isFinite(result) ? result.toString() : 'Error');
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const layout = [
    [
      {inputValue: '7', style: styles.button, handler: handleInput},
      {inputValue: '8', style: styles.button, handler: handleInput},
      {inputValue: '9', style: styles.button, handler: handleInput},
      {
        inputValue: '/',
        displayText: '÷',
        style: styles.operator,
        handler: handleInput,
      },
    ],
    [
      {inputValue: '4', style: styles.button, handler: handleInput},
      {inputValue: '5', style: styles.button, handler: handleInput},
      {inputValue: '6', style: styles.button, handler: handleInput},
      {
        inputValue: '*',
        displayText: 'x',
        style: styles.operator,
        handler: handleInput,
      },
    ],
    [
      {inputValue: '1', style: styles.button, handler: handleInput},
      {inputValue: '2', style: styles.button, handler: handleInput},
      {inputValue: '3', style: styles.button, handler: handleInput},
      {inputValue: '-', style: styles.operator, handler: handleInput},
    ],
    [
      {inputValue: '0', style: styles.button, handler: handleInput},
      {inputValue: '.', style: styles.button, handler: handleInput},
      {inputValue: 'C', style: styles.button, handler: handleInput},
      {inputValue: '+', style: styles.operator, handler: handleInput},
    ],
    [
      {
        inputValue: '=',
        style: styles.calculateButton,
        handler: handleCalc,
      },
    ],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline={false} style={styles.input} editable={false}>
          {input}
        </TextInput>
      </View>

      <View style={styles.buttonContainer}>
        {layout.map(rows => (
          <View style={styles.row}>
            {rows.map(row => (
              <TouchableOpacity
                key={row.inputValue}
                style={row.style}
                onPress={() => row.handler(row.inputValue)}>
                <Text style={styles.buttonText}>
                  {row?.displayText ? row.displayText : row.inputValue}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 60,
  },
  inputContainer: {
    height: 140,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#505050',
    flex: 1,
    padding: 18,
    borderRadius: 10,
    margin: 10,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'right',
    marginEnd: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 33,
    textAlign: 'center',
    color: '#fff',
  },
  calculateButton: {
    backgroundColor: '#ff9500',
    borderRadius: 10,
    padding: 18,
    marginHorizontal: 10,
    width: '95%',
    marginTop: 20,
  },
  operator: {
    backgroundColor: '#FF9500',
    flex: 1,
    padding: 18,
    borderRadius: 10,
    margin: 10,
  },
  result: {
    fontSize: 40,
  },
});
