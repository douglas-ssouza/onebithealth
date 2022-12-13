import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, Vibration } from 'react-native';

import ImcResult from '../ImcResult';

import styles from './styles';

import { getImcValue, getImcStatus } from '../../utils/imc';

interface Imc {
  value: number | null;
  status: string;
}

function Form() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [imc, setImc] = useState<Imc>({ value: null, status: '' });

  const calculateImc = () => {
    if (isNaN(Number(weight)) || isNaN(Number(height))) {
      Vibration.vibrate();
      setError('Utilize apenas valores numéricos com pontos e não virgulas');
      setHeight('');
      setWeight('');
      return;
    }

    if (!weight || !height || Number(weight) < 0 || Number(height) < 0) {
      Vibration.vibrate();
      setError('Preencha peso e altura com valores positivos');
      setImc({ value: null, status: ''});
      return;
    }

    const imcValue = getImcValue(weight, height);
    const imcStatus = getImcStatus(imcValue);
    setImc({ value: imcValue, status: imcStatus });
    
    setError('');
    setWeight('');
    setHeight('');

    Keyboard.dismiss();
  };

  return (
    <View style={styles.formContent}>
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
        </View>
      <View>
        { 
          error
          ? <Text>{ error }</Text>
          : <ImcResult imcValue={imc.value} imcStatus={imc.status} />
        }
      </View>
    </View>
  );
}

export default Form;
