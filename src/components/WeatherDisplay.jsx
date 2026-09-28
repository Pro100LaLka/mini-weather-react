export function WeatherDisplay({ weather }) {
  return (
    <div className="flex h-1/2 flex-col items-center justify-between rounded-xl border-2 bg-white py-10 shadow-[5px_5px_6px_2px] shadow-black/40">
      {weather && (
        <>
          <h1 className="text-5xl">{weather.name}</h1>
          <div className="flex w-full items-center justify-evenly text-3xl">
            <p>{`${weather.main.temp}`}&deg; C</p>
            <p className="flex items-center gap-2">
              <img src={weather.weather[0].icon} alt="" />
              {weather.weather[0].main}
            </p>
          </div>
          <hr className="w-full border border-gray-500" />
          <div className="flex w-full items-center justify-evenly text-2xl">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Feels Like: {weather.main.feels_like}&deg; C</p>
          </div>
          <div className="flex w-full items-center justify-evenly text-2xl">
            <div className="flex flex-col gap-3">
              <p>Wind: {weather.wind.speed} m/s</p>
              <p>Pressure: {weather.main.pressure} mm</p>
            </div>
            <span className="relative z-20 size-30 rounded-full border-2">
              <span className="absolute inset-0 z-1 m-auto size-full rounded-full bg-white"></span>
              <span
                style={{ rotate: `${weather.wind.deg}deg` }}
                className="absolute inset-0 z-2 m-auto flex items-center justify-center pb-4 text-8xl"
              >
                &uarr;
              </span>
              <span className="absolute inset-0 m-auto h-33 w-1 bg-black"></span>
              <span className="absolute inset-0 m-auto h-33 w-1 rotate-90 bg-black"></span>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
