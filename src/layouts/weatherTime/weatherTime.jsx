import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import * as SC from './styled';

const WeatherTime = ({ weather }) => {
  //테스트 중 ...
  //const weatherCurrent = weather.filter((item, index) => index % 10 === 0);
  const weatherCurrent = weather?.filter((item, index) => index < 24);
  const weatherTemp = weatherCurrent?.map((item) => item.degree);
  const weatherTime = weatherCurrent?.map((item) => item.time);
  const weatherCloud = weatherCurrent?.map((item) => item.weather);

  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: '기온',
          data: weatherTemp,
        },
      ],
      chart: {
        height: 160,
        width: weatherCurrent.length * 40,
        type: 'bar',
        toolbar: {
          show: false,
        },
        fontFamily: 'Pretendard',
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '°';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: weatherTime,
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + '°';
          },
        },
      },
      title: {
        text: '시간별 날씨',
        floating: true,
        offsetY: 0,
        align: 'left',
        style: {
          color: '#444',
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <SC.WeatherTime>
      <SC.WeatherChart ref={chartRef}>
        <div>sdsdasdasdsad</div>
      </SC.WeatherChart>
      <SC.WeatherCloud>
        {weatherCloud.map((cloud, index) => (
          <SC.WeatherImage
            key={index}
            src="/images/맑은날_낮.svg"
            alt="맑음 이미지"
          />
        ))}
      </SC.WeatherCloud>
    </SC.WeatherTime>
  );
};

export default WeatherTime;
