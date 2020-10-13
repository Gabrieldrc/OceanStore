const APP_RATES = require('../models').app_rates;

const findAppRates = async (app_name) => {

  const { count, rows } = await APP_RATES.findAndCountAll({
    where: {
      app_name: `${app_name}`,
    }
  });

  return {count: count, rows: rows};

};

module.exports = {
  findAppRates,
};
