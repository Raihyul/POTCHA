const MOVIE = "potatoes/MOVIE";
const TV = "potatoes/TV";
const MOVIEANALYSIS = "potatoes/ANALYSIS/MOVIE";
const TVANALYSIS = "potatoes/ANALYSIS/TV";

export const moviePotatoes = (moviePotatoList) => ({
  type: MOVIE,
  moviePotatoList,
});
export const tvPotatoes = (tvPotatoList) => ({ type: TV, tvPotatoList });
export const movieAnalysisPotatoes = (movieAnalysisList) => ({
  type: MOVIEANALYSIS,
  movieAnalysisList,
});
export const tvAnalysisPotatoes = (tvAnalysisList) => ({
  type: TVANALYSIS,
  tvAnalysisList,
});

const initialState = {
  moviePotatoList: "",
  tvPotatoList: "",
  movieAnalysisList: [],
  tvAnalysisList: [],
};

function catchPotato(state = initialState, action) {
  switch (action.type) {
    case MOVIE:
      return {
        ...state,
        moviePotatoList: action.moviePotatoList,
      };
    case TV:
      return {
        ...state,
        tvPotatoList: action.tvPotatoList,
      };
    case MOVIEANALYSIS:
      return {
        ...state,
        movieAnalysisList: action.movieAnalysisList,
      };
    case TVANALYSIS:
      return {
        ...state,
        tvAnalysisList: action.tvAnalysisList,
      };

    default:
      return state;
  }
}

export default catchPotato;
