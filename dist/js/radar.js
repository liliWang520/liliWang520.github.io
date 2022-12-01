import genId from './random.js'
let radarDemoJS = [
    {
        code: `option = {
            radar: {
                indicator: [
                    { name: '南京市(0)', max: 10000 },
                    { name: '无锡市(0)', max: 10000 },
                    { name: '徐州市(2122)', max: 10000 },
                    { name: '常州市(0)', max: 10000 },
                    { name: '苏州市(0)', max: 10000 },
                    { name: '南通市(1027)', max: 10000 },
                    { name: '连云港市(0)', max: 10000 },
                    { name: '淮安市(0)', max: 10000 },
                    { name: '盐城市(0)', max: 10000 },
                    { name: '扬州市(6161)', max: 10000 },
                    { name: '镇江市(0)', max: 10000 },
                    { name: '泰州市(0)', max: 10000 },
                    { name: '宿迁市(0)', max: 10000 },
                ],
                splitLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 2
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['#6776af', '#57669f']
                    }
                }
            },
            series: [
                {
                    symbol: 'circle',
        
                    symbolSize: 6,
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [0, 0, 2122, 0, 0, 1027, 0, 0, 0, 6161, 0, 0, 0],
                            name: 'Allocated Budget'
                        }
                    ],
                    lineStyle: {
                        color: '#bc3938'
                    },
                    itemStyle: {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: '#bc3938',
                    },
                    label: {
                        color: '#fff',
                        distance: 0
                    }
                }
            ]
        };;
        `
    },
    {
        code: `option = {
            backgroundColor: 'rgb(14,11,46)',
            title: {
              show: false
            },
            tooltip: {
              position: ['20%', '10%']
            },
            legend: {
              show: false
            },
            radar: {
              radius: "62%",
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#dadadf'
                }
              },
              indicator: [
                { name: '占耕地比', max: 6500 },
                { name: '套合率', max: 16000 },
                { name: '漏报率', max: 30000 },
                { name: '整改率', max: 38000 },
                { name: '销案率', max: 52000 }
              ],
              splitLine: {
                show: true,
                lineStyle: {
                  width: 1,
                  color: '#5f5e81' // 图表背景网格线的颜色
                }
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(0,0,0,0)"]  // 图表背景网格的颜色
                }
              },
            },
            series: [{
              name: '',
              type: 'radar',
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "#59bfa2" // 图表中各个图区域的边框线颜色
                  },
                }
              },
              areaStyle:                                          // 雷达图辐射区域的样式
              {
                color: new echarts.graphic.LinearGradient(         // 设置渐变色
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#2e57ac' },
                    { offset: 1, color: '#59bfa2' }
                  ]
                ),
          
                lineStyle: {
                  color: "#59bfa2" // 图表中各个图区域的边框线颜色
                },
              },
          
              data: [
                {
                  value: [5300, 12000, 19800, 28500, 45900, 52000],
                  name: '核查考绩'
                }
          
              ]
            }]
          };`
    }
]

radarDemoJS.forEach(v => {
    v.id = genId()
})
export default radarDemoJS