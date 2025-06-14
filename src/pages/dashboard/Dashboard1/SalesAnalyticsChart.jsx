import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";
const SalesAnalyticsChart = () => {
  const apexOpts = {
    chart: {
      height: 378,
      type: "line",
      offsetY: 10
    },
    stroke: {
      width: [2, 3]
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    colors: ["#1abc9c", "#4a81d4"],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ["01 Jun 2025", "02 Jun 2025", "03 Jun 2025", "04 Jun 2025", "05 Jun 2025", "06 Jun 2025", "07 Jun 2025", "08 Jun 2025", "09 Jun 2025", "10 Jun 2025", "11 Jun 2025", "12 Jun 2025  "],
    xaxis: {
      type: "datetime"
    },
    legend: {
      offsetY: 7
    },
    grid: {
      padding: {
        bottom: 20
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.75,
        opacityTo: 0.75,
        stops: [0, 0, 0]
      }
    },
    yaxis: [{
      title: {
        text: "Net Revenue"
      }
    }, {
      opposite: true,
      title: {
        text: "Number of Sales"
      }
    }]
  };
  const series = [{
    name: "Revenue",
    type: "column",
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: "Sales",
    type: "line",
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }];
  return <>
      <Card>
        <Card.Body>
          <div className="float-end d-none d-md-inline-block">
            <div className="btn-group mb-2">
              <button type="button" className="btn btn-xs btn-light">
                Today
              </button>
              <button type="button" className="btn btn-xs btn-light">
                Weekly
              </button>
              <button type="button" className="btn btn-xs btn-secondary">
                Monthly
              </button>
            </div>
          </div>

          <h4 className="header-title mb-3">Sales Analytics</h4>

          <div dir="ltr">
            <Chart options={apexOpts} series={series} type="line" height={380} className="apex-charts mt-4" />
          </div>
        </Card.Body>
      </Card>
    </>;
};
export default SalesAnalyticsChart;