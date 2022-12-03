import React from 'react';
import { View, Text } from 'react-native';

interface ImcResultProps {
  imcValue: number | null;
  imcStatus: string;
}

function ImcResult(props: ImcResultProps) {
  return (
    <View>
      <Text>{ props.imcValue }</Text>
      <Text>{ props.imcStatus }</Text>
    </View>
  );
}

export default ImcResult;
