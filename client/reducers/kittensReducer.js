const RECEIVE_KITTENS = 'RECEIVE_KITTENS';
const RECEIVE_SINGLE_KITTEN = 'RECEIVE_SINGLE_KITTEN';

const receiveKittens = (kittens) => ({
    type: RECEIVE_KITTENS,
    kittens
  })

const receiveSingleKitten = (kitten) => ({
  type: RECEIVE_SINGLE_KITTEN,
  kitten
})

const initialState = {
  kittens: [],
  kitten: {}
}

export function kittensReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_KITTENS:
      return {...state, kittens: action.kittens}
    case RECEIVE_SINGLE_KITTEN:
      return {...state, kitten: action.kitten}
    default:
      return state
  }
}