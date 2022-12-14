import React from 'react';
import { View, Text, TouchableOpacity, Share, FlatList } from 'react-native';

import styles from './styles';

interface Imc {
  value: number | null;
  status: string;
}

interface Result {
  id: string;
  value: number;
  status: string;
}

interface ImcResultProps {
  setImc: (imc: Imc) => void;
  imcValue: number | null;
  imcStatus: string;
  results: Result [];
}

function ImcResult(props: ImcResultProps) {
  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${props.imcValue}. Classificação: ${props.imcStatus}`
    });
  }

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
      <FlatList
        style={styles.listContainer}
        data={props.results.reverse()}
        renderItem={({item}) => (
          <Text
            style={styles.listText}
          >
            {`IMC: ${item.value} - Classificação: ${item.status}`}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ImcResult;
