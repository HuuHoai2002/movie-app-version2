import React, { useEffect, useState, useCallback } from "react";
import { tiviSeriesApi } from "../../api/Api";
import Loading from "../../components/Loading/Loading";
import BannerDetailsCard from "./BannerDetailsCard";

const BannerTvSeriesDetails = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGetTvSeriesDetails = useCallback(async (movieID) => {
    try {
      const response = await tiviSeriesApi.getTiviSeriesDetails(movieID);
      setMovieDetails(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleGetTvSeriesCredits = useCallback(async (movieID) => {
    try {
      const response = await tiviSeriesApi.getTiviSeriesCredits(movieID);
      setMovieCredits(response?.cast);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    handleGetTvSeriesDetails(movieID);
    handleGetTvSeriesCredits(movieID);
    return () => {};
  }, [handleGetTvSeriesCredits, handleGetTvSeriesDetails, movieID]);

  return (
    <div>
      {!loading ? (
        movieDetails &&
        movieCredits && (
          <BannerDetailsCard
            data={movieDetails}
            cast={movieCredits}
            isTivi={true}></BannerDetailsCard>
        )
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default BannerTvSeriesDetails;
