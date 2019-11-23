const express = require("express");

module.exports = app => {
  app.use(express.urlencoded({ extended: false })).use(express.json());
};
