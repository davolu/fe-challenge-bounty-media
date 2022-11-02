import http from "./http-common";
import { CountryListData } from "store/country/types";
import { CountryDetailsListData, UpdateCountryData } from "store/details/types";

class CountryDataService {
  getListCountry() {
    return http.get<Array<CountryListData>>("/all");
  }
  getCountryListDetails(countryID: string) {
    return http.get<Array<CountryDetailsListData>>(`/deliveries/${countryID}`);
  }
  updateCountryDetailsStatus(data: UpdateCountryData, id: string) {
    return http.put<any>(`/deliveries/${id}`, data);
  }
}
export default new CountryDataService();
