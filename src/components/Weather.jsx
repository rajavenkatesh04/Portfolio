import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = 'bcfc755599d4b0f831e669a5365c5c1b';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&units=metric&appid=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData({
          temperature: data.main.temp,
          description: data.weather[0].description,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('en-GB');

  return (
    <StyledWrapper>
      <div className="card">
        <div className="container">
          <div className="cloud front">
            <span className="left-front" />
            <span className="right-front" />
          </div>
          <span className="sun sunshine" />
          <span className="sun" />
          <div className="cloud back">
            <span className="left-back" />
            <span className="right-back" />
          </div>
        </div>
        <div className="card-header">
          <span>Chennai, Tamil Nadu<br />India</span>
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>
        <span className="temp">
          {weatherData ? `${Math.round(weatherData.temperature)}°` : '--°'}
        </span>
        <div className="temp-scale">
          <span>Celcius</span>
        </div>
        <div className="weather-description">
          <span>{weatherData ? weatherData.description : 'Loading...'}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .card {
    width: min(350px, 90vw);
    height: min(270px, 70vh);
    position: relative;
    padding: clamp(15px, 3vw, 25px);
    background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF;
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: clamp(15px, 2vw, 23px);
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
  }

  .container {
    width: clamp(150px, 30vw, 250px);
    height: clamp(150px, 30vw, 250px);
    position: absolute;
    right: clamp(-20px, -4vw, -35px);
    top: clamp(-30px, -6vw, -50px);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
  }

  .cloud {
    width: 100%;
  }

  .front {
    padding-top: clamp(25px, 5vw, 45px);
    margin-left: clamp(15px, 3vw, 25px);
    display: inline;
    position: absolute;
    z-index: 11;
    animation: clouds 8s infinite;
    animation-timing-function: ease-in-out;
  }

  .back {
    margin-top: clamp(-20px, -4vw, -30px);
    margin-left: clamp(90px, 18vw, 150px);
    z-index: 12;
    animation: clouds 12s infinite;
    animation-timing-function: ease-in-out;
  }

  .right-front {
    width: clamp(25px, 5vw, 45px);
    height: clamp(25px, 5vw, 45px);
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: clamp(-15px, -3vw, -25px);
    z-index: 5;
  }

  .left-front {
    width: clamp(35px, 7vw, 65px);
    height: clamp(35px, 7vw, 65px);
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .right-back {
    width: clamp(30px, 6vw, 50px);
    height: clamp(30px, 6vw, 50px);
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: clamp(-12px, -2.4vw, -20px);
    z-index: 5;
  }

  .left-back {
    width: clamp(18px, 3.6vw, 30px);
    height: clamp(18px, 3.6vw, 30px);
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .sun {
    width: clamp(72px, 14.4vw, 120px);
    height: clamp(72px, 14.4vw, 120px);
    background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 50%;
    display: inline;
    position: absolute;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: clamp(3px, 0.6vw, 5px);
  }

  .card-header span {
    font-weight: 700;
    font-size: clamp(12px, 1.4vw, 14px);
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
  }

  .temp {
    position: absolute;
    left: clamp(15px, 3vw, 25px);
    bottom: clamp(24px, 4.8vw, 40px);
    font-weight: 700;
    font-size: clamp(38px, 7.6vw, 64px);
    line-height: 1.2;
    color: rgba(87, 77, 51, 1);
  }

  .temp-scale {
    width: clamp(48px, 9.6vw, 80px);
    height: clamp(22px, 4.3vw, 36px);
    position: absolute;
    right: clamp(15px, 3vw, 25px);
    bottom: clamp(24px, 4.8vw, 40px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.06);
    border-radius: clamp(5px, 1vw, 9px);
  }

  .temp-scale span {
    font-weight: 700;
    font-size: clamp(10px, 1.3vw, 13px);
    line-height: 134.49%;
    color: rgba(87, 77, 51, 0.66);
  }

  .weather-description {
    position: absolute;
    left: clamp(15px, 3vw, 25px);
    bottom: clamp(7px, 1.4vw, 12px);
    font-weight: 500;
    font-size: clamp(14px, 1.8vw, 18px);
    color: rgba(87, 77, 51, 0.7);
  }

  /* Preserve animations */
  @keyframes sunshines {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  @keyframes clouds {
    0% {
      transform: translateX(15px);
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(15px);
    }
  }

  .sunshine {
    animation: sunshines 2s infinite;
  }
`;

export default Weather;