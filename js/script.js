// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

const positiveNumber = 0

function myButtonClicked() {
  const ageNumber = document.getElementById("age-number").value
  const day = document.getElementsByName("weekday").value
  document.getElementById("answer").innerHTML = day
}