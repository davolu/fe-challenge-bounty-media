import http from "./http-common";
import { CountryListData } from "store/country/types";

class CountryDataService {
  getListCountry() {
    return http.get<Array<CountryListData>>("/all");
  }
}
export default new CountryDataService();
