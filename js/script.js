// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 18 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the pay of the user.
 */
function calculatePay() {
  // input
  const hours = parseFloat(document.getElementById("hours").value)
  const salary = parseFloat(document.getElementById("salary").value)
  const TAX_RATE = 0.18

  // process
  const takeHomeSalary = hours * salary * (1.0 - TAX_RATE)
  const taxes = hours * salary * TAX_RATE

  // output
  document.getElementById(
    "pay"
  ).innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
  document.getElementById(
    "taxed"
  ).innerHTML = `The government will take: $ ${taxes.toFixed(2)}`
}
