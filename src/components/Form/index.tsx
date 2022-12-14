import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, Vibration } from 'react-native';

import ImcResult from '../ImcResult';

import styles from './styles';

import { getImcValue, getImcStatus } from '../../utils/imc';
import validateForm from '../../utils/validateForm';

interface Imc {
  value: number | null;
  status: string;
}

interface Result {
  id: string;
  value: number;
  status: string;
}

function Form() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [imc, setImc] = useState<Imc>({ value: null, status: '' });
  const [results, setResults] = useState<[] | Result[]>([]);

  const calculateImc = () => {
    const invalidMessage = validateForm(weight, height);

    if (invalidMessage) {
      Vibration.vibrate();
      setError(invalidMessage);
      setImc({ value: null, status: ''});
    } else {
      const imcValue = getImcValue(weight, height);
      const imcStatus = getImcStatus(imcValue);
      setImc({ value: imcValue, status: imcStatus });
      setResults([
        ...results,
        { id: new Date().getTime().toString(), value: imcValue, status: imcStatus },
      ]);
      setError('');
    }

    setWeight('');
    setHeight('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formContent}>
      {
        imc.value
          ? <ImcResult
              setImc={setImc}
              imcValue={imc.value}
              imcStatus={imc.status}
              results={results}
            />
          : (
            <View style={styles.form}>
              <Text style={styles.formLabel}>Altura:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex.: 1.75'
                keyboardType='numeric'
              />
              <Text style={styles.formLabel}>Peso:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex.: 75.23'
                keyboardType='numeric'
              />
              <TouchableOpacity style={styles.buttonCalculator} onPress={calculateImc}>
                <Text style={styles.buttonText}>Calcular</Text>
              </TouchableOpacity>
              { error && <Text style={styles.errorText}>{ error }</Text> }
            </View>
          )
      }
    </View>
  );
}

export default Form;
