import React, { FC, useEffect } from "react";
import { RootState } from "store";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { getCountryList, setLoading } from "store/country/action";
import CountryListItem from "components/CountryListItem";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import CustomizedInputBase from "components/CustomizedInputBase";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state: RootState) => state.country.data);
  const loading = useSelector((state: RootState) => state.country.loading);
  const error = useSelector((state: RootState) => state.country.error);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCountryList());
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
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
      </Box>

      <Grid container mt={10} columns={12}>
        <Grid item lg={12} xs={12}>
          <CustomizedInputBase />
        </Grid>
      </Grid>

      {loading ? (
        <p className="text-center">
          <img src="loading-buffering.gif" />
        </p>
      ) : (
        <Grid container spacing={5} m={5} columns={12}>
          {countryData &&
            countryData.map((item) => (
              <Grid item lg={3} xs={12} key={item.cca2}>
                <CountryListItem data={item} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
