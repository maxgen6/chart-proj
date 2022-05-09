import React, {useEffect, useMemo, useState} from "react";

import { XYPlot, VerticalBarSeries } from "react-vis";

const Charts = ({
  chartsData,
}) => {

  const [dataForChart, setDateForChart] = useState([]);

  useEffect(() => {
    if (chartsData) {
      const data = chartsData?.map((item, index) => {
        return {
          x: 0.5 + index,
          y: item.count,
        }
      });
      setDateForChart(data);
    }
  }, [chartsData]);

  console.log(dataForChart)

  const renderCharts = useMemo(() => {
    if (dataForChart?.length > 0) {
      return <XYPlot width={'250'} height={'100'}>
        <VerticalBarSeries data={dataForChart} color={'red'} />
      </XYPlot>
    }
  }, [dataForChart])

  return (
    <>{renderCharts}</>
  )
};

export default Charts;