import React, { useState, useEffect } from 'react';

const DonutChart = ({ percent }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const newAngle = (percent / 100) * 360;
    setAngle(newAngle);
  }, [percent]);

  const backgroundImage = `conic-gradient(#9894CF 0deg, #9894CF ${angle}deg, #D9D9D9 ${angle}deg, #D9D9D9 360deg)`;

  return (
    <div className="main-div-container-academichistory-donut-chart" style={{ backgroundImage }}>
      <div className="main-div-container-academichistory--donut-chart-circleplace">
        <div className="main-div-container-academichistory--donut-chart-circle"></div>
      </div>
      <p className="main-div-container-academichistory--donut-chart-label">{percent}%</p>
    </div>
  );
};

export default DonutChart;
