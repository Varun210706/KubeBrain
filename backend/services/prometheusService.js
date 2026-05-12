const axios = require("axios");

const PROMETHEUS_URL = "http://localhost:9090";

async function getCpuMetrics() {

    const query = `
    sum(rate(container_cpu_usage_seconds_total[1m])) by (pod)
    `;

    try {

        const response = await axios.get(
            `${PROMETHEUS_URL}/api/v1/query`,
            {
                params: { query }
            }
        );

        return response.data.data.result;

    } catch (error) {

        console.error(error);

    }
}

module.exports = { getCpuMetrics };