export function getImcStatus(imcValue: number): string {
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
  } else if (imcValue >= 40) {
    return 'Obesidade grau III';
  } else {
    return '';
  }
}

export function getImcValue(weight: string, height: string): number {
  return Number((Number(weight) / Math.pow(Number(height), 2)).toFixed(2));
}
