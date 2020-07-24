export default [
  {
    label: 'Identificação do Item*:',
    name: 'name',
    placeholder: 'Exemplo: Leitor Biométrico',
    autoFocus: true,
  },
  { label: 'Setor*:', name: 'sector', placeholder: 'Exemplo: Caixas' },
  {
    label: 'Funcionário*:',
    name: 'userName',
    placeholder: 'Exemplo: Leandro A. Barreto',
    autocompleteType: 'name',
    autoCorrect: true,
  },
  {
    label: 'Matrícula Funcionário*:',
    name: 'userRegistry',
    placeholder: 'Exemplo: F1234567',
    maxLength: 8,
  },
];
