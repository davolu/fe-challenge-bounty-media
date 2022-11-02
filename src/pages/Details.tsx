import React, { FC, useEffect, useState } from "react";
import { RootState } from "../store";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryDetails,
  setLoading,
  UpdateCountryDetails,
} from "../store/details/action";
import DetailsBox from "../components/DetailsBox";
import { UpdateCountryData } from "../store/details/types";

const Details: React.FC = () => {
  const dispatch = useDispatch();
  const countryData = useSelector(
    (state: RootState) => state.countryDetails.data
  );
  const loading = useSelector(
    (state: RootState) => state.countryDetails.loading
  );
  const error = useSelector((state: RootState) => state.countryDetails.error);
  const { countryID } = useParams<{ countryID: string }>();
  const [isActive, setIsActive] = useState<boolean>(false); //for current country
  const [aCountryIsActive, setACountryIsActive] = useState<boolean>(false); //to know if any other country is active
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);

  useEffect(() => {
    dispatch(setLoading());
    if (countryID) {
      let getActiveID = window.localStorage.getItem("activeCountry");

      getActiveID == countryID ? setIsActive(true) : setIsActive(false);
      getActiveID !== null && getActiveID !== undefined
        ? setACountryIsActive(true)
        : setACountryIsActive(false);
      dispatch(getCountryDetails(countryID));
    }
  }, []);

  //get dispatch rider's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLongitude(position.coords.latitude);
        setLatitude(position.coords.longitude);
      });
    } else {
      //GeoLocation not supported
    }
  });

  //simple function to change active country
  const makeActive = async () => {
    if (countryID) {
      await window.localStorage.setItem("activeCountry", countryID);
      dispatch(setLoading());
      dispatch(getCountryDetails(countryID));
      setACountryIsActive(true);
      setIsActive(true);
    }
  };

  const updateCountry = async (country_value: string) => {
    if (countryID) {
      let data: UpdateCountryData = {
        country: {
          status: country_value,
          latitude: longitude,
          longitude: latitude,
        },
      };
      dispatch(setLoading());
      dispatch(UpdateCountryDetails(data, countryID));
      //clear localstorage to allow another active to be selected.
      await window.localStorage.removeItem("activeCountry");
      setACountryIsActive(false);
      setIsActive(false);
    }
  };

  return (
    <div className="container">
      <h3>Country Details </h3>

      {loading ? (
        <p className="text-center">
          <img src="../loading-buffering.gif" />
        </p>
      ) : (
        <div>
          {countryData && (
            <div className="row">
              <div className="col-md-7 well">
                <DetailsBox
                  countryData={countryData}
                  isActive={isActive}
                  aCountryIsActive={aCountryIsActive}
                  updateCountry={updateCountry}
                  makeActive={makeActive}
                />
              </div>
              <div className="col-md-5"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
