import React from "react";
import { connect } from "react-redux";
import PotatoBasket from "../components/PotatoBasket";
import {
  moviePotatoes,
  tvPotatoes,
  movieAnalysisPotatoes,
  tvAnalysisPotatoes,
} from "../modules/potatoes";

const PotatoesInBasket = ({
  moviePotatoList,
  tvPotatoList,
  movieAnalysisList,
  tvAnalysisList,
  moviePotatoes,
  tvPotatoes,
  movieAnalysisPotatoes,
  tvAnalysisPotatoes,
}) => {
  return (
    <div>
      <PotatoBasket
        moviePotatoList={moviePotatoList}
        tvPotatoList={tvPotatoList}
        movieAnalysisList={movieAnalysisList}
        tvAnalysisList={tvAnalysisList}
        onMoviePotatoes={moviePotatoes}
        onTvPotatoes={tvPotatoes}
        onMovieAnalysisPotatoes={movieAnalysisPotatoes}
        onTvAnalysisPotatoes={tvAnalysisPotatoes}
      />
    </div>
  );
};

export default connect(
  ({ catchPotato }) => ({
    moviePotatoList: catchPotato.moviePotatoList,
    tvPotatoList: catchPotato.tvPotatoList,
    movieAnalysisList: catchPotato.movieAnalysisList,
    tvAnalysisList: catchPotato.tvAnalysisList,
  }),
  { moviePotatoes, tvPotatoes, movieAnalysisPotatoes, tvAnalysisPotatoes }
)(PotatoesInBasket);
