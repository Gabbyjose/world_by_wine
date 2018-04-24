import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";

const getCountries = countries => ({
  type: GET_COUNTRIES,
  countries: countries
});

export const fetchCountries = () => (dispatch) => {
  {
    axios
      .get("/api/countries")
      .then(res => dispatch(getCountries(res.data)))
      .catch(err => console.error(err));
  }
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.countries;
    default:
      return state;
  }
}
