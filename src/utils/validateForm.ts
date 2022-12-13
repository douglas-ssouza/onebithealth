function validateFields(weight: string, height: string) {
  return !weight || !height;
}

function validateType(weight: string, height: string) {
  return isNaN(Number(weight)) || isNaN(Number(height));
}

function validateValue(weight: string, height: string) {
  return Number(weight) < 0 || Number(height) < 0;
}

export default function validateForm(weight: string, height: string): string {
  if (validateFields(weight, height)) {
    return 'Todos os campos são obrigatórios';
  }

  if (validateType(weight, height)) {
    return 'Digite valores numéricos com pontos e não vírgulas';
  }

  if (validateValue(weight, height)) {
    return 'Preencha peso e altura com valores positivos'
  }

  return '';
}
