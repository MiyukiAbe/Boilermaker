
const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
const RECEIVE_SINGLE_PUPPY = 'RECEIVE_SINGLE_PUPPY'

const receivePuppies = (puppies) => ({
    type: RECEIVE_PUPPIES,
    puppies
  })

export const receiveSinglePuppies = (puppy) => ({
  type: RECEIVE_SINGLE_PUPPY,
  puppy
})

const initialState = {
  puppies: [],
  puppy: {}
}

export function puppiesReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PUPPIES:
      return {...state, puppies: action.puppies}
    case RECEIVE_SINGLE_PUPPY:
      return {...state, puppy: action.puppy}
    default:
      return state
  }
}