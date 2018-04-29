import axios from 'axios';
const GET_GRAPES = 'GET_GRAPES';

const getGrapes = (grapes) => {
  return { type: GET_GRAPES, grapes }
}

export const fetchAllGrapes = () => (dispatch) => {
  axios.get(`/api/grapes`)
    .then(res => dispatch(getGrapes(res.data)))
    .catch(err => console.log(err))
}

export const fetchRegionGrapes = (region) => (dispatch) => {
  axios.get(`/api/regions/${region}/grapes`)
    .then(res => dispatch(getGrapes(res.data)))
    .catch(err => console.log(err))
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_GRAPES: return action.grapes;
    default: return state;
  }
}
