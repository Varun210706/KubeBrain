const express = require("express");
const router = express.Router();

const { getCpuMetrics } = require("../services/prometheusService");

router.get("/", async (req, res) => {

    const metrics = await getCpuMetrics();

    res.json(metrics);

});

module.exports = router;