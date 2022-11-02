import React, { FC } from "react";
import { CountryListData } from "store/country/types";
import {
  FaBuilding,
  FaCheck,
  FaLocationArrow,
  FaRegAddressBook,
  FaTruckLoading,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface CountryProps {
  data: CountryListData;
}

const CountryListItem: FC<CountryProps> = ({ data }) => {
  return (
    <div className="well-custom">
      <div className="list-group">
        <Link
          to={`/details/`}
          className="list-group-item"
          data-testid="list-clicked"
        >
          <div className="media col-md-3"></div>
          <div className="col-md-6">
            <h4 className="list-group-item-heading" data-testid="id-client">
              {" "}
              {data.name.common}
            </h4>
            <p className="list-group-item-text" data-testid="id-customer-name">
              <FaUser size={10} /> {data.name.common}
            </p>
            <p
              className="list-group-item-text"
              data-testid="id-customer-address"
            >
              <FaLocationArrow size={10} /> {data.name.common}
            </p>
            <p className="list-group-item-text" data-testid="id-customer-city">
              <FaBuilding size={10} /> {data.name.common}
            </p>
            <p
              className="list-group-item-text"
              data-testid="id-customer-zipcode"
            ></p>
          </div>
          <div className="col-md-3 text-center" data-testid="id-status"></div>
        </Link>
      </div>
    </div>
  );
};

export default CountryListItem;
