import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';

import styles from './styles';

interface Imc {
  value: number | null;
  status: string;
}

interface ImcResultProps {
  setImc: (imc: Imc) => void;
  imcValue: number | null;
  imcStatus: string;
}

function ImcResult(props: ImcResultProps) {
  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${props.imcValue}. Classificação: ${props.imcStatus}`
    });
  }

  if (props.imcValue) {
    return (
      <View style={ styles.resultContainer }>
        <Text style={ styles.infoText }>Seu IMC é igual a:</Text>
        <Text style={ { ...styles.infoText, ...styles.resultText } }>{ props.imcValue }</Text>
        <Text style={ styles.infoText }>{ props.imcStatus }</Text>
        <TouchableOpacity
          style={styles.sharedButton}
          onPress={onShare}
        >
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => { props.setImc({ value: null, status: '' }) }}
        >
          <Text style={styles.buttonText}>Calcular Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <View />
}

export default ImcResult;
