import React, { FC } from "react";
import { CountryDetailsListData } from "../store/details/types";
import { FaCheck } from "react-icons/fa";

interface ICountryProps {
  countryData: CountryDetailsListData;
  isActive: boolean;
  makeActive: any;
  aCountryIsActive: boolean;
  updateCountry: any;
}

const DetailsBox: FC<ICountryProps> = ({
  countryData,
  isActive,
  makeActive,
  aCountryIsActive,
  updateCountry,
}) => {
  const setActiveButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    makeActive();
  };
  const setDeliveredButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    updateCountry("delivered");
  };
  const setUnDeliveredButtonHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    updateCountry("undelivered");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="mt-10x">
            <h4>{countryData.client}</h4>
            <p
              className="text-secondary mb-1"
              data-testid="details-customer-name"
            >
              {countryData.customer.name}
            </p>
            <p
              className="text-muted font-size-sm"
              data-testid="details-customer-address"
            >
              {countryData.customer.address}
            </p>
            <p
              className="text-muted font-size-sm"
              data-testid="details-customer-city"
            >
              {countryData.customer.city} | {countryData.customer.zipCode}
            </p>

            {countryData.country.status !== "delivered" ? (
              isActive ? (
                <div>
                  <button
                    className="btn btn-success"
                    data-testid="details-button-delivered"
                    onClick={setDeliveredButtonHandler}
                  >
                    Mark as delivered
                  </button>

                  <button
                    className="btn btn-primary"
                    data-testid="details-button-undelivered"
                    onClick={setUnDeliveredButtonHandler}
                  >
                    Mark as unDelivered
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    disabled={aCountryIsActive ? true : false}
                    className="btn btn-success"
                    data-testid="make-active-button"
                    onClick={setActiveButtonHandler}
                  >
                    Make Active
                  </button>
                </div>
              )
            ) : (
              <>
                <FaCheck size={60} color={"green"} />
                <p className="text-success text-bold">
                  {countryData.country.status}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsBox;
