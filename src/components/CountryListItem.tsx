import React, { FC } from "react";
import { CountryListData } from "store/country/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CountryProps {
  data: CountryListData;
  setShowDetails: any;
  setDetailData: any;
}
const CountryListItem: FC<CountryProps> = (props) => {
  const { data, setShowDetails, setDetailData } = props;
  return (
    <Card
      sx={{ maxWidth: 245, height: 270 }}
      onClick={() => {
        setShowDetails(true);
        setDetailData(data);
      }}
      className="cursor"
    >
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
          data-testid="id-country-capital"
        >
          Capital : {data.capital}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryListItem;
