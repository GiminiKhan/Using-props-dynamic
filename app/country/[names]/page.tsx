
 import Card from "@/app/component/card"

function CountryName({ params }: { params: { names: string } }) {
  const country_data = [
    {
      name: "Pakistan",
      population: "251269164",
      capital: "Islamabad",
      important_cities:     ["Karachi",      "Lahore",       "Sialkot"],
    },
    {
      name: "China",
      population: "1419321278",
      capital: "Beijing",
      important_cities: ["Shanghai", "Beijing", "Guangzhou"],
    },
    {
      name: "Iran",
      population: "91780985",
      capital: "Tehran",
      important_cities: ["Isfahan", "Tabriz", "Qom"],
    },
    {
      name: "Turkey",
      population: "87527081",
      capital: "Ankara",
      important_cities: ["Istanbul", "Bursa", "Izmir"],
    },
    {
      name: "India",
      population: "1450935791",
      capital: "New Delhi",
      important_cities: ["Mumbai", "Kolkata", "Chennai"],
    },
  ];

 

  const selectedCountry = country_data.find(
    (country) => country.name === params.names
  );

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  return (

    <Card name={selectedCountry.name} population= {selectedCountry.population} capital= {selectedCountry.capital} important_cities= {selectedCountry.important_cities} />
    
  );
}
export default CountryName;

