import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import ImcResult from './ImcResult';

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
  };

  return (
    <View>
      <View>
        <Text>Altura:</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder='Ex.: 1.75'
          keyboardType='numeric'
        />
        <Text>Peso:</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex.: 75.23'
          keyboardType='numeric'
        />
        <Button
          title="Calcular"
          onPress={calculateImc}  
        />
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
