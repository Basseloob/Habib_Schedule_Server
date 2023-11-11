// 1) create reusable puppetteer function for each clinic.

const fs = require("fs");
const express = require("express");
const router = express.Router();
const sanitize = require("sanitize-filename");

const { Habib } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateToken } = require("../middlewares/authMiddleWare");

// puppeteer
const { get_Habib_Data } = require("../middlewares/habibPuppeteer_Ware");

// Spciality Links : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const habib_Im_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=1&StrDate=%27%27&lang=en";
const habib_Family_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=26&StrDate=%27%27&lang=en";
const habib_Cardio_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=21&StrDate=%27%27&lang=en";
const habib_Endo_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=14&StrDate=%27%27&lang=en";
const habib_Nephro_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=30&StrDate=%27%27&lang=en";

// Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_FM", async (req, res) => {
  try {
    // await get_Habib_Data(habib_Family_Url);

    const filePath = require("../output/output_Fm_HabibData.json");
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_IM", async (req, res) => {
  try {
    await get_Habib_Data(habib_Im_Url);

    const filePath = require("../output/output_Im_HabibData.json");
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Cardiology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Cardio", async (req, res) => {
  try {
    await get_Habib_Data(habib_Cardio_Url);

    const filePath = require("../output/output_Cardio_HabibData.json");
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endocrinology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Endo", async (req, res) => {
  try {
    // await get_Habib_Data(habib_Endo_Url);

    const filePath = require("../output/output_Endo_HabibData.json");
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Nephrology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Nephrology", async (req, res) => {
  try {
    // await get_Habib_Data(habib_Nephro_Url);

    const filePath = require("../output/output_Nephro_HabibData.json");
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
