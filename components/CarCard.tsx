"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import { CarDetails, CustomButton } from ".";
import {
  calculateCarPrice,
  calculateCarRent,
  generateCarImageUrl,
} from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const carPrice = calculateCarPrice(
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    year
  );

  return (
    <div className=" car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold"> $</span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> /day</span>
      </p>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold"> $</span>
        {carPrice}
        <span className="self-end text-[14px] font-medium"> Value</span>
      </p>
      <div className="relative w-full h-40 my-3 object-obtain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          alt="car model"
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="streeing wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            {/* <div className="flex flex-col justify-center items-center gap-2"> */}
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            {/* </div> */}
          </div>
          <div className="car-card__icon">
            {/* <div className="flex flex-col justify-center items-center gap-2"> */}
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
            {/* </div> */}
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
