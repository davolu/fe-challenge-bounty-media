import React, { FC, useEffect, useState } from "react";
import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { getCountryList, setLoading } from "store/country/action";
import CountryListItem from "components/CountryListItem";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CountryListData } from "store/country/types";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import CustomizedInputBase from "components/CustomizedInputBase";
import DetailsBox from "components/DetailsBox";
import Container from "@mui/material/Container";
import SearchResult from "./partial/searchResult";
import BasicSelect from "components/BasicSelect";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state: RootState) => state.country.data);
  const loading = useSelector((state: RootState) => state.country.loading);
  const error = useSelector((state: RootState) => state.country.error);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailData] = useState<CountryListData>();
  const [searchInput, setSearchInput] = useState("");
  const [countryDataSearchResponse, setCountryDataResponse] = useState<any>();
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCountryList());
    setCountryDataResponse(countryData);
  }, [1]);

  const searchItems = (value: string) => {
    setSearchInput(value);
    if (value !== "") {
      const filteredData =
        countryData &&
        countryData.filter((item: any) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase());
        });
      setCountryDataResponse(filteredData);
    } else {
      setCountryDataResponse(countryData);
    }
  };
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Where in the world
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            {theme.palette.mode} mode
          </Box>
        </Toolbar>
      </AppBar>

      {loading ? (
        <p className="text-center">
          <img src="loading-buffering.gif" />
        </p>
      ) : (
        <>
          {showDetails ? (
            // @ts-ignore
            <DetailsBox data={detailsData} setShowDetails={setShowDetails} />
          ) : (
            <>
              <Container sx={{ py: 10 }} maxWidth="lg">
                <Grid container spacing={3} mt={12}>
                  <Grid item xs={9} sm={9} md={9}>
                    <CustomizedInputBase
                      setSearchInput={setSearchInput}
                      onChange={(e: any) => {
                        searchItems(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={4} sm={2} md={2}>
                    <BasicSelect
                      setRegion={setRegion}
                      region={region}
                      title="Region"
                      onChange={(e: any) => {
                        searchItems(e.target.value);
                        setRegion(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Container>

              {searchInput == "" && (
                <Box component="section">
                  <Container sx={{ py: 0 }} maxWidth="lg">
                    <Grid container spacing={3}>
                      {countryData &&
                        countryData.map((item: any, index: number) => (
                          <Grid item key={index} xs={12} sm={6} md={3}>
                            <CountryListItem
                              data={item}
                              setShowDetails={setShowDetails}
                              setDetailData={setDetailData}
                            />
                          </Grid>
                        ))}
                    </Grid>
                  </Container>
                </Box>
              )}
              {searchInput !== "" && (
                <>
                  <SearchResult
                    countryDataSearchResponse={countryDataSearchResponse}
                    setShowDetails={setShowDetails}
                    setDetailData={setDetailData}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
