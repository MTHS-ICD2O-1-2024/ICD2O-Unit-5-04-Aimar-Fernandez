// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const ageNumber = document.getElementById("age-number").value
  const tuesday = document.getElementById("tuesday").checked
  const thursday = document.getElementById("thursday").checked
  if ((tuesday == true || thursday == true) || (ageNumber > 12 && ageNumber < 21)) {
    document.getElementById("answer").innerHTML = 
      "<p>You're eligible forr student pricing</p>"
  }
  else {
    document.getElementById("answer").innerHTML = 
      "<p>You must pay regular pricing</p>"
  }
}