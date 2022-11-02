import React, { FC } from "react";
import { CountryListData } from "../store/country/types";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

interface CountryProps {
  data: CountryListData;
  setShowDetails: any;
}
const DetailsBox: FC<CountryProps> = (props) => {
  const { data, setShowDetails } = props;
  return (
    <>
      <Box component="section">
        <Container sx={{ py: 10 }} maxWidth="lg">
          <Grid container spacing={3} mt={10}>
            <Grid item xs={12} sm={5} md={5}>
              <Button
                variant="outlined"
                className="back-btn"
                onClick={() => {
                  setShowDetails(false);
                }}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <CardMedia
                  component="img"
                  alt={`${data.name.common}`}
                  height="240"
                  image={`${data.flags.png}`}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={3} spacing={2} ml-lg={10} md={3}>
              <Typography variant="h4" component="h4" mt={7}>
                {data.name.common}
              </Typography>
              <div className="mt-10">
                <p>Native Name: {data.cca2}</p>
                <p>Population: {data.population} </p>
                <p>Region: {data.region} </p>
                <p>Sub Region: {data.subregion} </p>
                <p>Capital: {data.capital} </p>
              </div>
            </Grid>

            <Grid item xs={12} sm={3} md={3} mt={15}>
              <div className="mt-10">
                <p>Top Level Domain: {data.tld}</p>
                <p>
                  Currencies:
                  {Object.values(data.currencies).map((item) => (
                    <span>{item.symbol}</span>
                  ))}{" "}
                </p>

                <p>
                  Languages:
                  {Object.values(data.languages).map((item) => (
                    <span>{item}, </span>
                  ))}
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default DetailsBox;
