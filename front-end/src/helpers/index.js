// Funções usadas para facilitar o gerenciamento de dados no local storage,
// ajudam a obter e setar os dados sem se preocupar com conversões
export const getLS = (key) => JSON.parse(localStorage.getItem(key));

export const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
