import React, { useEffect, useState, useCallback } from "react";
import { movieApi } from "../../api/Api";
import Loading from "../../components/Loading/Loading";
import BannerDetailsCard from "./BannerDetailsCard";

const BannerMovieDetails = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGetMovieDetails = useCallback(async (movieID) => {
    try {
      const response = await movieApi.getMovieDetails(movieID);
      setMovieDetails(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleGetMovieCredits = useCallback(async (movieID) => {
    try {
      const response = await movieApi.getMovieCredits(movieID);
      setMovieCredits(response?.cast);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    handleGetMovieDetails(movieID);
    handleGetMovieCredits(movieID);
    return () => {};
  }, [handleGetMovieCredits, handleGetMovieDetails, movieID]);
  return (
    <div>
      {!loading ? (
        movieDetails &&
        movieCredits && (
          <BannerDetailsCard
            data={movieDetails}
            cast={movieCredits}></BannerDetailsCard>
        )
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default BannerMovieDetails;
