import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../../api/Api";
import MovieRecomments from "../../components/Movie/MovieRecomments";
import { useMovies } from "../../contexts/MovieContext";
import UserComments from "../Comments/UserComments";
const WatchingMovie = () => {
  const { movieID } = useParams();
  const { handleSetTitle } = useMovies();
  const [reviews, setReviews] = React.useState(null);
  const handleGetTvSeriesDetails = useCallback(
    async (movieID) => {
      try {
        const response = await movieApi.getMovieDetails(movieID);
        handleSetTitle(response?.title);
      } catch (error) {
        console.log(error);
      }
    },
    [handleSetTitle]
  );
  const handleGetMovieReviews = useCallback(async (movieID) => {
    try {
      const response = await movieApi.getMovieReviews(movieID);
      setReviews(response?.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetMovieReviews(movieID);
    handleGetTvSeriesDetails(movieID);
  }, [handleGetMovieReviews, handleGetTvSeriesDetails, movieID]);

  //Tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container-watch">
      <div className="flex flex-col gap-y-7">
        <div className="w-full h-[600px] rounded-lg">
          <iframe
            title="frame"
            id="iframe"
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
            allowFullScreen={true}
            className="w-full h-full rounded-lg"
            frameBorder="0"></iframe>
        </div>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Bình Luận" value="1" />
            <Tab label="Phim Gợi Ý" value="2" />
          </TabList>
          <TabPanel value="1">
            <UserComments reviews={reviews}></UserComments>
          </TabPanel>
          <TabPanel value="2">
            <MovieRecomments movieID={movieID} text="Gợi Ý"></MovieRecomments>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default WatchingMovie;
