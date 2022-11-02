import React, { FC } from "react";
import { CountryListData } from "store/country/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface CountryProps {
  data: CountryListData;
}
const CountryListItem: FC<CountryProps> = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${data.flags.png}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid="id-country-name"
        >
          {data.name.common}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          data-testid="id-country-population"
        >
          Population : {data.population}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          data-testid="id-country-region"
        >
          Region : {data.region}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          data-testid="id-country-region"
        >
          Capital : {data.capital}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CountryListItem;
