import { useD3 } from "./useD3";
import React from "react";
import * as d3 from "d3";

function StackedArea({ data, dataTwo }) {
  console.log(dataTwo);
  const taco = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .range([height - margin.bottom, margin.top]);

      const valueArea = d3
        .area()
        .x(function (d) {
          return x(d.year);
        })
        .y0(height - margin.bottom)
        .y1(function (d) {
          return y(d.sales);
        });

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(yAxis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "#69b3a2")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "none")
        .attr("d", valueArea);

      svg.append("path").datum(data).attr("class", "area").attr("d", valueArea);
    },
    [data.length]
  );

  return (
    <svg
      ref={taco}
      style={{
        height: 900,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-StackedArea" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default StackedArea;
