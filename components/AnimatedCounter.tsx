"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className="w-full">
      <CountUp end={amount} decimals={2} prefix="INR" decimal="" />
    </span>
  );
};

export default AnimatedCounter;
