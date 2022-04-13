import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tiviSeriesApi } from "../../api/Api";
import TVSeriesRecomments from "../../components/TVSeries/TVSeriesRecomments";
import { useMovies } from "../../contexts/MovieContext";
import UserComments from "../Comments/UserComments";

const WatchingTvSeries = () => {
  const { movieID } = useParams();
  const { handleSetTitle } = useMovies();
  const [reviews, setReviews] = useState(null);
  const [infoMovie, setInfoMovie] = useState(null);
  // Seasion / epides tv series
  const [changeSeason, setChangeSeason] = useState(0);
  const [changeEpisode, setChangeEpisode] = useState(0);

  //API này dùng để lấy ra số tập phim của từng phần tương ứng với movieID
  const [totalSeason, setTotalSeason] = useState(1);
  const handleGetSeasonTvSeries = useCallback(
    async (movieID) => {
      try {
        const response = await tiviSeriesApi.getTiviSeriesSeason(
          movieID,
          changeSeason + 1
        );
        setTotalSeason(response?.episodes);
      } catch (error) {
        console.log(error);
      }
      setChangeEpisode(0);
    },
    [changeSeason]
  );
  const handleGetTvSeriesDetails = useCallback(
    async (movieID) => {
      try {
        const response = await tiviSeriesApi.getTiviSeriesDetails(movieID);
        handleSetTitle(response?.name);
        setInfoMovie(response);
      } catch (error) {
        console.log(error);
      }
    },
    [handleSetTitle]
  );
  const handleGetTvSeriesReviews = useCallback(async (movieID) => {
    try {
      const response = await tiviSeriesApi.getTiviSeriesReviews(movieID);
      setReviews(response?.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetTvSeriesReviews(movieID);
    handleGetTvSeriesDetails(movieID);
    handleGetSeasonTvSeries(movieID);
  }, [
    handleGetSeasonTvSeries,
    handleGetTvSeriesDetails,
    handleGetTvSeriesReviews,
    movieID,
  ]);

  // Tabs
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(`Phần: ${changeSeason + 1} ..., Tập : ${changeEpisode + 1}`);
  return (
    <div className="container-watch">
      <div className="flex flex-col gap-y-7">
        <div className="w-full h-[600px] rounded-lg">
          <iframe
            title="frame"
            id="iframe"
            src={`https://www.2embed.ru/embed/tmdb/tv?id=${movieID}&s=${
              changeSeason + 1
            }&e=${changeEpisode + 1}`}
            allowFullScreen={true}
            className="w-full h-full rounded-lg"
            frameBorder="0"></iframe>
        </div>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Chọn Phần / Tập" value="1" />
            <Tab label="Bình Luận / Gợi Ý" value="2" />
          </TabList>
          <TabPanel value="1">
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-medium text-purple-600">Phần: </h1>
                <div className="flex-1">
                  {infoMovie && (
                    <div className="flex flex-wrap items-center gap-2">
                      {new Array(infoMovie.number_of_seasons)
                        .fill(0)
                        .map((item, index) => (
                          <span
                            key={item + index}
                            className={`hover:opacity-70 w-[60px] h-[30px] flex items-center justify-center rounded-lg bg-[#111111] font-semibold ${
                              index === changeSeason ? "text-red-500" : ""
                            }`}
                            onClick={() => setChangeSeason(index)}>
                            {index + 1}
                          </span>
                        ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-medium text-purple-600">
                  Tập Phim:
                </h1>
                <div className="flex-1">
                  {totalSeason && (
                    <div className="flex flex-wrap items-center gap-2 ">
                      {totalSeason.length > 0 ? (
                        totalSeason.map((item, index) => (
                          <span
                            key={item.id}
                            className={`hover:opacity-70 rounded-lg w-[60px] h-[30px] flex items-center justify-center text-[15px] bg-[#111111] font-semibold ${
                              index === changeEpisode ? "text-red-500" : ""
                            }`}
                            onClick={() => setChangeEpisode(index)}>
                            {index + 1}
                          </span>
                        ))
                      ) : (
                        <div className="text-red-600 font-semibold">
                          Phần: {changeSeason + 1} Chưa có tập phim nào...{" "}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <UserComments reviews={reviews}></UserComments>
            <div>
              <TVSeriesRecomments
                movieID={movieID}
                text="Gợi Ý"></TVSeriesRecomments>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default WatchingTvSeries;
