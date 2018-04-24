import axios from 'axios';

const GET_REGIONS = 'GET_REGIONS';

const getRegions = (regions) => ({ type: GET_REGIONS, regions })

export const fetchRegions = () => (dispatch) => {
  axios.get('/api/regions')
    .then(res => dispatch(getRegions(res.data)))
    .catch(err => console.error(err))
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_REGIONS:
      return action.regions;
    default:
      return state;
  }
}
