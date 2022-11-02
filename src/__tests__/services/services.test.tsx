import * as axios from "axios";
import CountryDataService from "../../services/country.service";
describe("test CountryDataService ", () => {
  it("getListCountry Service Status Code : 200 and Ok ", async () => {
    // Response body sample
    let response = await CountryDataService.getListCountry();
    expect(response.status).toEqual(200);
    expect(response.statusText).toEqual("OK");
  });
});
