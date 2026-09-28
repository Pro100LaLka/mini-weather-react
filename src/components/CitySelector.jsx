const cities = ["New York", "Los Angeles", "Chicago", "Tokyo", "London"];

export function CitySelector(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="grid grid-cols-4 items-center gap-4 rounded-xl border-2 bg-green-300 p-5 shadow-[5px_5px_6px_2px] shadow-black/40"
    >
      <label
        htmlFor="city"
        className="col-span-2 justify-self-center text-2xl uppercase first-letter:text-3xl"
      >
        Weather for:
      </label>
      <select
        name="city"
        id="city"
        value={props.currentCity}
        onChange={props.onChange}
        className="border border-gray-400 bg-white p-3 text-2xl"
      >
        {cities.map((city) => (
          <option key={city} value={city.replaceAll(" ", "%20")}>
            {city}
          </option>
        ))}
      </select>
      <button className="border border-gray-400 bg-gray-100 p-3 text-2xl hover:bg-gray-200 active:bg-gray-300">
        Get Weather
      </button>
    </form>
  );
}
