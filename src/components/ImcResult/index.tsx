import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface ImcResultProps {
  imcValue: number | null;
  imcStatus: string;
}

function ImcResult(props: ImcResultProps) {
  if (props.imcValue) {
    return (
      <View style={ styles.resultContainer }>
        <Text style={ styles.infoText }>Seu IMC é igual a:</Text>
        <Text style={ { ...styles.infoText, ...styles.resultText } }>{ props.imcValue }</Text>
        <Text style={ styles.infoText }>{ props.imcStatus }</Text>
      </View>
    );
  }

  return <></>
}

export default ImcResult;
