
import BarChart from 'components/common/BarChart/Echart'
import { ECOption } from "types/echarts-ref";
import { colors } from 'constants/barChart'
import { IBarColumn } from 'types/barChart';
import { chartData } from 'constants/barChart';

const InternationalWealthList = () => {

  const chartConfig: ECOption = {
    title: {
      show: true,
      text: "IWI Score(0-100)",
      bottom: 30,
      left: "50%",
      textStyle: {
        color: "rgb(160,160,160)",
        fontWeight: 400
      },
      
    },
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      icon: "circle",
      orient: 'horizontal',
      left: 'center',
      bottom: 0,
      formatter: function (name: string) {
        return `${name} {count|${name}}`;
      },
      textStyle: {
        rich: {
          'count': {
            align: 'right',
          }
        }
      },

    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: true, alignWithLabel: false },
        data: chartData.iwiScor,
        axisLabel: {
          width: 125,
          align: 'left',
          margin: 10,
          formatter: (x: string) => `{a|${x}}`,
          rich: {
            a: {
              align: 'center',
              color: "var(--txt-grey)",
              fontSize: 18
            }
          },
        }

      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 18,
          formatter: (x: number) => `${x}%`,
        },
        max: 100,
        splitNumber: 5,
        splitArea: {

          areaStyle: {

          }
        }
      }
    ],
    grid:{bottom:90},
    series: chartData.villages.map((item: IBarColumn) => ({
      name: item.name,
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      barWidth: '15%',
      data: [...item.data],
    }))

  };

  return (
    <div className="container">
      <BarChart
        title="International wealth index (IWI) "
        option={chartConfig}
        style={{ width: '800px', height: '400px' }} 
        />
    </div>
  );
}

export default InternationalWealthList;
