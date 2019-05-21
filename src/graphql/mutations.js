// eslint-disable
// this is an auto generated file. This will be overwritten

export const createCoin = `mutation CreateCoin($input: CreateCoinInput!) {
  createCoin(input: $input) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const updateCoin = `mutation UpdateCoin($input: UpdateCoinInput!) {
  updateCoin(input: $input) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const deleteCoin = `mutation DeleteCoin($input: DeleteCoinInput!) {
  deleteCoin(input: $input) {
    id
    clientId
    name
    symbol
    price
  }
}
`;
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    id
    title
    description
  }
}
`;
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    id
    title
    description
  }
}
`;
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
    id
    title
    description
  }
}
`;
