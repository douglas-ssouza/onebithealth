import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import ImcResult from '../ImcResult';

import styles from './styles';

interface Imc {
  value: number | null;
  status: string;
}

function Form() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [imc, setImc] = useState<Imc>({ value: null, status: '' });

  const getImcStatus = (imcValue: number): string => {
    if (imcValue < 18.5) {
      return 'Abaixo do peso';
    } else if (imcValue < 24.5) {
      return 'Peso normal';
    } else if (imcValue < 30) {
      return 'Sobrepeso';
    } else if (imcValue < 35) {
      return 'Obesidade grau I';
    } else if (imcValue < 40) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  }

  const calculateImc = () => {
    if (!weight || !height || (Number(weight) < 0 || Number(height) < 0)) {
      setError('Preencha peso e altura com valores positivos');
      setImc({ value: null, status: ''});
      return;
    }

    const imcValue = Number((Number(weight) / Math.pow(Number(height), 2)).toFixed(2));
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
