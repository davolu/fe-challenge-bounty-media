import * as axios from "axios";
import CountryDataService from "../../services/country.service";
import { countryData } from "../../utils/mock-common-data";
import { UpdateCountryData } from "../../store/details/types";

describe("test CountryDataService ", () => {
  it("getCountryListDetails Service Status Code : 200 and Ok ", async () => {
    // Response body sample
    let response = await CountryDataService.getCountryListDetails("5");
    expect(response.status).toEqual(200);
    expect(response.statusText).toEqual("OK");
  });

  it("getListCountry Service Status Code : 200 and Ok ", async () => {
    // Response body sample
    let response = await CountryDataService.getListCountry();
    expect(response.status).toEqual(200);
    expect(response.statusText).toEqual("OK");
  });

  it("getListCountry Service Status Code : 200 and Ok ", async () => {
    // Response body sample
    let data: UpdateCountryData = {
      country: {
        status: "delivered",
        latitude: 0,
        longitude: 0,
      },
    };
    let response = await CountryDataService.updateCountryDetailsStatus(
      data,
      "5"
    );
    expect(response.status).toEqual(200);
    expect(response.statusText).toEqual("OK");
  });
});
