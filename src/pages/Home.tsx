import React, { FC, useEffect } from "react";
import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getCountryList, setLoading } from "store/country/action";
import CountryListItem from "components/CountryListItem";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state: RootState) => state.country.data);
  const loading = useSelector((state: RootState) => state.country.loading);
  const error = useSelector((state: RootState) => state.country.error);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCountryList());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center">Your country List</h4>
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          {loading ? (
            <p className="text-center">
              <img src="loading-buffering.gif" />
            </p>
          ) : (
            <div>
              {countryData &&
                countryData.map((item) => (
                  <div key={item.cca2}>
                    <CountryListItem data={item} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
