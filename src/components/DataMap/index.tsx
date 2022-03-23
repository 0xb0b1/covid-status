import axios from "axios";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { DataFilter } from "../DataFilter";

type CovidDataProps = {
  date: string;
  location: string;
  num_sequences: number;
  num_sequences_total: number;
  perc_sequences: number;
  variant: string;
};

export const DataMap = () => {
  const [covidData, setCovidData] = useState<CovidDataProps[]>();

  useEffect(() => {
    const getCovidData = async () => {
      const response = await axios.get("http://localhost:3333/covid-data");
      const filteredData = await response.data.filter(
        (item: CovidDataProps) => item.location === "Angola"
      );
      // setCovidData(response.data);
      setCovidData(filteredData);
    };

    getCovidData();
  }, []);
  console.log(covidData);

  function handleFilter(date: string) {
    console.log("filtered: ", date);
    console.log(
      "filtered: ",
      covidData?.filter((item) => item.date === date)
    );
  }

  function handleDaysDifference(firstDate: string, lastDate: string) {
    return () => {
      const daysDiff =
        new Date(firstDate).getTime() - new Date(lastDate).getTime();
      return daysDiff / (1000 * 60 * 60 * 24);
    };
  }

  if (covidData === undefined) {
    return (
      <div>
        <span>Loading</span>
      </div>
    );
  }

  return (
    <div className="mx-24 w-default">
      <DataFilter
        defaultDate={covidData[0].date}
        min={covidData[0].date}
        max={covidData[covidData.length - 1].date}
        handleOnChange={handleFilter}
      />
      <Plot
        style={{ maxWidth: "1280px", maxHeight: "720px" }}
        data={[
          {
            type: "scattergeo",
            mode: "markers",
            locations: ["BRA", "DEU", "RUS", "AO"],
            text: ["One", "Two", "Three", "Four"],
            marker: {
              size: [20, 30, 15, 100],
              line: { color: "black", width: 2 },
              // cmin: 0,
              // cmax: 100,
              // colorscale: "Red",
              // colorbar: {
            },
          },
        ]}
        config={{
          responsive: true,
          displayModeBar: false,
        }}
        layout={{
          width: 1080,
          height: 580,
          autosize: true,
          showlegend: false,
          geo: {
            resolution: 50,
            showland: true,
            landcolor: "rgb(217, 217, 217)",
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: "rgb(255,255,255)",
            countrycolor: "rgb(255,255,255)",
          },
        }}
      />
    </div>
  );
};
