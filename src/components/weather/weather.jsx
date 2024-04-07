import React from "react";
import * as SC from './weatherStyle';

const Weather = () => {

	return(
		<SC.WeatherContainer>
			<SC.WeatherGraphic>
				<img src="cloudy.png"/>
			</SC.WeatherGraphic>
		</SC.WeatherContainer>
	);
};

export default Weather;