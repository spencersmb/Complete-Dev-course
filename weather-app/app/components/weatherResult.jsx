import react from 'react';
const React = react;

let WeatherResult = ({temp, city}) => {
  return (
    <h3 className="text-center">The temp is {temp}, for {city}</h3>
  );
};

module.exports = WeatherResult;
