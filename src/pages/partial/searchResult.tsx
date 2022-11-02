import React, { FC } from "react";
import { CountryListData } from "store/country/types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CountryListItem from "components/CountryListItem";

export default function SearchResult(props: any) {
  const { countryDataSearchResponse, setShowDetails, setDetailData } = props;
  return (
    <Box component="section">
      <Container sx={{ py: 0 }} maxWidth="lg">
        <Grid container spacing={3}>
          {countryDataSearchResponse &&
            countryDataSearchResponse.map((item: any, index: number) => (
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
  );
}
