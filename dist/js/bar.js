import genId from './random.js'
let barDemoJS = [
  {
    code: `var CubeLeft = echarts.graphic.extendShape({
            shape: { x: 0, y: 0 },
            buildPath: function (ctx, shape) {
              var xAxisPoint = shape.xAxisPoint;
              var c0 = [shape.x, shape.y];
              var c1 = [shape.x - 9, shape.y - 9];
              var c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
              var c3 = [xAxisPoint[0], xAxisPoint[1]];
              ctx
                .moveTo(c0[0], c0[1])
                .lineTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .closePath();
            },
          });
          var CubeRight = echarts.graphic.extendShape({
            shape: { x: 0, y: 0 },
            buildPath: function (ctx, shape) {
              var xAxisPoint = shape.xAxisPoint;
              var c1 = [shape.x, shape.y];
              var c2 = [xAxisPoint[0], xAxisPoint[1]];
              var c3 = [xAxisPoint[0] + 12, xAxisPoint[1] - 6];
              var c4 = [shape.x + 12, shape.y - 6];
              ctx
                .moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
            },
          });
          var CubeTop = echarts.graphic.extendShape({
            shape: { x: 0, y: 0 },
            buildPath: function (ctx, shape) {
              var c1 = [shape.x, shape.y];
              var c2 = [shape.x + 12, shape.y - 6];
              var c3 = [shape.x + 3, shape.y - 15];
              var c4 = [shape.x - 9, shape.y - 9];
              ctx
                .moveTo(c1[0], c1[1])
                .lineTo(c2[0], c2[1])
                .lineTo(c3[0], c3[1])
                .lineTo(c4[0], c4[1])
                .closePath();
            },
          });
          echarts.graphic.registerShape("CubeLeft", CubeLeft);
          echarts.graphic.registerShape("CubeRight", CubeRight);
          echarts.graphic.registerShape("CubeTop", CubeTop);
          var MAX = [189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189, 189];
          var VALUE = [
            21.9, 26.8, 24.2, 54.9, 74.5, 78.3, 119.0, 126.9, 180, 123.2, 80, 80,
          ];
          var option = {
            backgroundColor: "#fff",
            tooltip: {
              show: true,
              trigger: "axis",
              axisPointer: { type: "shadow" },
              formatter: function (params, ticket, callback) {
                var item = params[1];
                return item.name + " : " + item.value;
              },
            },
            grid: { left: 10, right: 10, bottom: 14, top: 32, containLabel: true },
            xAxis: {
              type: "category",
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ],
              axisLine: { show: false, lineStyle: { color: "#7e7e7e" } },
              axisTick: {
                show: false,
                length: 9,
                alignWithLabel: true,
                lineStyle: { color: "#000" },
              },
              axisLabel: { show: true, fontSize: 12 },
            },
            yAxis: {
              nameLocation: "end",
              name: "单位：份",
              nameTextStyle: {
                color: "#7e7e7e",
                fontSize: 12,
                padding: [0, 0, -10, 85],
              },
              boundaryGap: [0, 0.1],
              type: "value",
              min: 0,
              max: 200,
              axisLine: { show: false, lineStyle: { color: "#7e7e7e" } },
              splitLine: { show: true },
              axisTick: { show: false },
              axisLabel: { show: true, fontSize: 12 },
              boundaryGap: ["10%", "10%"],
            },
            series: [
              {
                type: "custom",
                renderItem: function (params, api) {
                  var location = api.coord([api.value(0), api.value(1)]);
                  return {
                    type: "group",
                    children: [
                      {
                        type: "CubeLeft",
                        shape: {
                          api,
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: "rgba(47,102,192,.27)" },
                      },
                      {
                        type: "CubeRight",
                        shape: {
                          api,
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: "rgba(59,128,226,.27)" },
                      },
                      {
                        type: "CubeTop",
                        shape: {
                          api,
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: "rgba(72,156,221,.27)" },
                      },
                    ],
                  };
                },
                data: MAX,
              },
              {
                type: "custom",
                renderItem: (params, api) => {
                  var location = api.coord([api.value(0), api.value(1)]);
                  var color =
                    api.value(1) > 2000
                      ? "red"
                      : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#4076ea" },
                        { offset: 1, color: "#2d69ea" },
                      ]);
                  return {
                    type: "group",
                    children: [
                      {
                        type: "CubeLeft",
                        shape: {
                          api,
                          xValue: api.value(0),
                          yValue: api.value(1),
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: color },
                      },
                      {
                        type: "CubeRight",
                        shape: {
                          api,
                          xValue: api.value(0),
                          yValue: api.value(1),
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: color },
                      },
                      {
                        type: "CubeTop",
                        shape: {
                          api,
                          xValue: api.value(0),
                          yValue: api.value(1),
                          x: location[0],
                          y: location[1],
                          xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: { fill: color },
                      },
                    ],
                  };
                },
                data: VALUE,
              },
            ],
          };`
  },
  {
    code: `option = {
            backgroundColor: "#fff",
            color: ["#b58ee1", "#3f7ef3"],
            title: {
                text: "",
                show: false
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow", 
                },
            },
            legend: {
                data: ["实际缴纳", "应缴纳"],
                align: "right",
                padding: [0, 0],
                itemGap: 49,
                top: 35,
                right: 40,
                textStyle: {
                    fontWeight: 'bold'
                }
            },
            grid: {
                left: "10",
                right: "10",
                bottom: "17",
                containLabel: true,
            },
            xAxis: [
                {
                    type: "category",
                    data: ["经营", "工业", "其他"],
                    axisTick: { show: false },
                    axisLabel: {
                        textStyle: { color: "#707070", fontSize: 14 },
                    },
                    axisLine: {
                        lineStyle: { color: "#e6e6e8", type: "solid" },
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "单位：万元",
                    nameLocation: 'end',
                    nameTextStyle: { color: "#7e7e7e", fontSize: 14, padding: [0, 0, 0, 85] },
                    boundaryGap: [0, 0.1],
                    max: 200,
                    axisLabel: {
                        show: true,
                        fontSize: 12,
                        color: '#666',
                        textStyle: {
                            color: "#7e7e7e", fontSize: 12
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#f6f6f6",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#e6e6e8"
                        }
                    }
                },
            ],
            series: [
                {
                    name: "实际缴纳",
                    type: "bar",
                    data: [110, 19, 102],
                    barWidth: 39,
                    label: {
                        show: true,
                        fontWeight: 'normal',
                        position: 'top',
                        color: "#555"
                    },
                },
                {
                    name: "应缴纳",
                    type: "bar",
                    data: [163, 110, 185],
                    barWidth: 39,
                    label: {
                        show: true,
                        fontWeight: 'normal',
                        position: 'top',
                        color: "#555"
                    },
                },
            ],
        };`
  },
  {
    code: `var labelOption = {
            show: true,
            position: 'insideTop',
            color: '#fff',
            fontSize: 14,
            fontWeight: "bold",
            formatter: function (params) {
              if (params.value == 0) {
                return '';
              }
            }
          }; option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
          
            legend: {
              data: ['课题', '日常', '运维'],
              bottom: '10',
              itemWidth: 14,
              itemHeight: 14,
              icon: 'rect'
            },
          
            xAxis: [
              {
                type: 'category',
                axisTick: { show: false },
                data: ['办公室', '总工办', '调查保护科', '审批利用科', '产权权益科', '研究室', '智慧城市科', '运维服务科'],
                nameTextStyle: {
                  fontSize: 14,
                  fontWeight: "bold",
                  color: '#333'
                },
                axisLabel: {
                  fontSize: 14,
                  fontWeight: "bold",
                  color: '#333'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '个数',
                nameTextStyle: {
                  fontSize: 14,
                  fontWeight: "bold",
                  color: '#333'
                },
                axisLabel: {
                  fontSize: 14,
                  fontWeight: "bold",
                  color: '#333'
                }
          
              }
            ],
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '课题',
                type: 'bar',
                barGap: 0,
                barWidth: 24,
                label: labelOption,
                emphasis: {
                  focus: 'series'
                },
                data: [1, 0, 1, 3, 1, 4, 2, 0]
              },
              {
                name: '日常',
                type: 'bar',
                barWidth: 24,
                label: labelOption,
                emphasis: {
                  focus: 'series'
                },
                data: [0, 7, 2, 0, 5, 0, 0, 7]
              },
              {
                name: '运维',
                type: 'bar',
                barWidth: 24,
                label: labelOption,
                emphasis: {
                  focus: 'series'
                },
                data: [0, 0, 0, 4, 2, 0, 3, 1]
              }
            ]
          };`
  },
  {
    code: `var labelOption = {
          show: true,
          position: 'insideTop',
          color: '#333',
          formatter: function (params) {
            if (params.value == 0) {
              return '';
            }
          }
        };
        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2019年', '2020年', '2021年', '2022年']
          },
        
          xAxis: [
            {
              type: 'category',
              axisTick: { show: false },
              data: ['总工办', '数据综合科', '调查保护科', '审批利用科', '产权权益科', '研究室', '智慧城市科', '运维服务科']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '2019年',
              type: 'bar',
              barGap: 0,
              label: labelOption,
              emphasis: {
                focus: 'series'
              },
              data: [0, 1, 1, 0, 0, 0, 0, 1]
            },
            {
              name: '2020年',
              type: 'bar',
              label: labelOption,
              emphasis: {
                focus: 'series'
              },
              data: [0, 0, 0, 0, 1, 0, 0, 0]
            },
            {
              name: '2021年',
              type: 'bar',
              label: labelOption,
              emphasis: {
                focus: 'series'
              },
              data: [1, 1, 10, 7, 2, 3, 5, 6]
            },
            {
              name: '2022年',
              type: 'bar',
              label: labelOption,
              emphasis: {
                focus: 'series'
              },
              data: [1, 3, 13, 8, 6, 6, 6, 8]
            }
          ]
        };
        `
  },
  {
    code: `option = {
            xAxis: {
                type: 'category',
                data: ['河口边界线', '自然边界线', '人工边界线'],
                axisLabel: {
                    color: '#202020'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: function (value, index) {
                        if (value != 0) {
                            return value + '%';
                        } else {
                            return value;
                        }
                    },
                    color: '#202020'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#999'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#dedede'
                    }
                }
            },
            series: [{
                data: [30, 70, 40],
                type: 'bar',
                barWidth: 40,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                ['rgba(92,174,238,0.3)', 'rgba(92,174,238,1)'],
                                ['rgba(126,211,143,0.3)', 'rgba(126,211,143,1)'],
                                ['rgba(236,186,106,0.3)', 'rgba(236,186,106,1)']
                            ];
                            var index = params.dataIndex;
                            if (params.dataIndex >= colorList.length) {
                                index = params.dataIndex - colorList.length;
                            }
                            return new echarts.graphic.LinearGradient(0, 1, 0, 0,
                                [{
                                    offset: 0,
                                    color: colorList[index][0]
                                },
                                {
                                    offset: 0.5,
                                    color: colorList[index][1]
                                },
                                {
                                    offset: 1,
                                    color: colorList[index][1]
                                }
                                ]);
                        }
                    }
                },
                label: {
                    show: true,
                    formatter: function (value) {
        
                    }
        
                }
            }]
        };`
  },
  {
    code: `option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: "10%",
                right: "10%",
                bottom: "25%",
                top: "12%"
            },
            legend: {
                show: false
        
            },
            toolbox: {
                show: false,
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['玄武区', '秦淮区', '建邺区', '鼓楼区', '栖霞区', '江北新区', '浦口区', '雨花台区', '江宁区', '六合区', '溧水区', '高淳区'],
                    nameTextStyle: {//修改坐标字体颜色
                        color: "#dadadf"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#dadadf"
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: -50,
                        color: '#333'
                    },
                    axisTick: {
                        show: false
                    }
        
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    nameTextStyle: {//修改坐标字体颜色
                        color: "#dadadf"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#dadadf"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#413e5a"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#333'
                    }
                },
                {
                    type: 'value',
                    nameTextStyle: {//修改坐标字体颜色
                        color: "#dadadf"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#dadadf"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#413e5a"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisLabel: {
                        color: '#333'
                    }
                }
            ],
            series: [
                {
                    name: '合法',
                    type: 'bar',
                    stack: '巡查',
                    barWidth: 15, //柱条的宽度，不设时自适应。
                    data: [10, 15, 10, 8, 32, 16, 99, 67, 18, 58, 43, 34],
                    //                                     itemStyle: {
                    //                                                color: "#2c65f6"
                    //                                            }
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#6ccdb6' },
                                { offset: 1, color: '#3e67ed' }
                            ]
                        ),
                        barBorderRadius: [1, 1, 1, 1]
                    }
                }, {
                    name: '违法率',
                    type: 'line',
                    yAxisIndex: 1,
                    symbol: 'circle',     //设定为实心点
                    symbolSize: 14,   //设定实心点的大小
                    data: [0.1, 0.5, 0.3, 0.3, 0.7, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9, 0.4],
                    itemStyle: {
                        color: "#deb433"
                    }
                }
            ]
        }`
  },
  {
    code: `option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            legend: {
                data: ['未归档'],
                right: '0',
                itemWidth: 0
        
            },
            grid: {
                left: '3%',
                right: '0',
                bottom: '3%',
                top: "2%",
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: false,
                splitLine: false
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: false,
                data: ['数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称']
            },
            series: [
                {
                    name: '未归档',
                    type: 'bar',
                    barWidth: 40,
                    data: [-183, -239, -234, -170, -144, -160, -180, -170],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'insideLeft',
                                formatter: function (params) {
                                    return Math.abs(params.value)
                                }
                            }
                        }
                    },
                    color: '#eace8b'
                }
            ]
        };`
  },
  {
    code: `option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            legend: {
                data: ['已归档'],
                left: '80',
                itemWidth: 0
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: "2%",
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: false,
                splitLine: false
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
        
                data: ['数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称']
            },
            series: [
                {
                    name: '已归档',
                    type: 'bar',
                    barWidth: 40,
                    data: [183, 239, 234, 170, 144, 160, 180, 170],
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    color: '#31a7f9'
                }
            ]
        };`
  },
  {
    code: `option = {
            xAxis: {
              type: 'category',
              data: ['南京市', '苏州市', '常州市', '无锡市', '泰州市', '盐城市', '扬州市', '淮安市', '宿迁市', '连云港', '徐州市', '南通市', '镇江市'],
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#abbfd9'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#abc2de'
              }
            },
            yAxis: {
              type: 'value',
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#abbfd9'
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: '#376aaa'
                }
              },
              axisLabel: {
                color: '#abc2de'
              }
            },
            grid: {
              left: '50',
              right: '10',
              top: '30',
              bottom: '25'
            },
            series: [{
              data: [1400, 2000, 1500, 2100, 2300, 1800, 2400, 2200, 1700, 1500, 1600, 2300, 1800],
              barWidth: 20,
              barGap: '80%',/*多个并排柱子设置柱子之间的间距*/
              barCategoryGap: '50%',/*多个并排柱子设置柱子之间的间距*/
          
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#4ed7ee' },               //柱图渐变色
                      { offset: 0.3, color: '#6190f4' },               //柱图渐变色
                      { offset: 1, color: '#7837fc' }                //柱图渐变色
                    ]
                  ),
                  barBorderRadius: [10, 10, 10, 10]
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      { offset: 0, color: '#4ed7ee' },               //柱图渐变色
                      { offset: 0.3, color: '#6190f4' },               //柱图渐变色
                      { offset: 1, color: '#7837fc' }                //柱图渐变色
                    ]
                  ),
                  barBorderRadius: [10, 10, 10, 10]
                }
              },
            }]
          };`
  },
  {
    code: `option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                padding: [8, 10, 8, 10],
                formatter: function (param, ticket) {
                    console.log(param);
                    var marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + param[1].color + ';"></span>';
                    var marker2 = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + param[0].color + ';"></span>';
                    return [
                        param[0].axisValue + '总预算：' + (param[0].value + param[1].value),
                        marker2 + param[0].seriesName + '：' + param[0].value,
                        marker + param[1].seriesName + '：' + param[1].value
        
                    ].join('<br/>')
                },
            },
            legend: {
                icon: "rect",
                itemHeight: 12,
                itemWidth: 12,
                textStyle: {
                    color: '#989db1'
                },
                right: 10,
                data: ['已执行', "未执行"]
            },
            grid: {
                top: "30px",
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块', '板桥地块'],
                    axisLabel: {
                        interval: 0,
                        rotate: -50,
                        color: '#222'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#b4b4b4'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    itemStyle: {
                        color: "#b2b2b2"
                    }
                }
            ],
            series: [
        
                {
                    name: '已执行',
                    type: 'bar',
                    stack: '预算',
                    data: [80, 90, 80, 70, 80, 80, 90, 80, 85, 80, 88],
                    color: '#d4d4d4',
                    barWidth: 24
                },
                {
                    name: '未执行',
                    type: 'bar',
                    stack: '预算',
                    data: [170, 232, 201, 194, 190, 230, 220, 200, 200, 200, 220],
                    color: '#228ce7',
                    barWidth: 24
                }
            ]
        };`
  },
  {
    code: `option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                icon: "rect",
                itemHeight: 12,
                itemWidth: 12,
                textStyle: {
                    color: '#989db1'
                },
                right: 10,
                data: ['邮件营销', '联盟广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [
        
                {
                    name: '邮件营销',
                    type: 'bar',
                    barWidth: 30,
                    stack: '广告',
                    data: [120, 182, 191, 234, 190, 230, 210, 200],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#37a7e7' },
                                    { offset: 1, color: 'rgba(55,167,231,0.4)' }
                                ]
                            ),
        
                            label: {
                                show: true, //开启显示
                                position: 'insideTop', //在上方显示
                                offset: [0, -9],
                                textStyle: {
                                    color: '#38dffd',
        
                                },
                                formatter: "{fz|{c}}",
                                rich: {
                                    fz: {
                                        width: 30,
                                        height: 30,
                                        fontSize: 1,
                                        backgroundColor: '#38dffd',
                                        borderColor: '#fff',
                                        borderWidth: 4,
                                        borderRadius: 15
        
                                    }
                                }
                            }
                        }
                    }
        
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    barWidth: 30,
                    stack: '广告',
                    data: [220, 182, 291, 354, 290, 330, 310, 300],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#5b4ae4' },
                                    { offset: 1, color: 'rgba(91,74,228,0.8)' }
                                ]
                            ),
                            barBorderRadius: [6, 6, 0, 0],
                            label: {
                                show: true, //开启显示
                                position: 'insideTop', //在上方显示
                                offset: [0, -5],
                                textStyle: { //数值样式
                                    color: 'transparent'
                                },
                                borderRadius: '10',
                                formatter: "{fz|{c}}",
                                rich: {
                                    fz: {
                                        width: 30,
                                        height: 30,
                                        fontSize: 1,
                                        backgroundColor: '#774dff',
                                        borderColor: '#fff',
                                        borderWidth: '4',
                                        borderRadius: 15
        
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        };`
  },
  {
    code: `var option = {
        legend: {
            show: false
        },
        color: ['#5d86e5'],
        xAxis: {
            data: ['未完成征地拆迁', '预期用地项目变化', '规划调整', '未供即用', '边角地', '其他', '备注'],
            axisTick: false,
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false },
            axisLabel: {
                interval: 0,
                rotate: 40,
                textStyle: {
                    color: '#445057'
                }
            }
        },
        yAxis: {},
        grid: {
            bottom: 73,
            top: 40,
            right: 40
        },
        series: [
            {
                name: '批而未供未供原因分析',
                type: 'bar',
                stack: 'one',
                barWidth: '30',
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,0,0,0.3)'
                    }
                },
                data: [1, 3, 4, 6, 9, 3, 4],
                label: {
                    show: false
                }
            }
        ]
    }`
  },
  {
    code: `option = {
        color: ['#3b7bdd', '#af8fdc'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['批而未供', '供而未用'],
          left: 'center',
          top: '3%',
          itemWidth: 12,
          itemHeight: 12,
          itemStyle: {
            borderWidth: 0
          },
          icon: 'rect',
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          top: '12%',
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: function (value, index) {
              return value + '%';
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['经开区', '溧阳市', '金坛区', '武进区', '新北区', '钟楼区', '天宁区'],
          axisLabel: {
            color: '#666'
          },
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: '#e3e3e3'
            }
          }
        },
        series: [
          {
            name: '批而未供',
            type: 'bar',
            data: [15, 50, 30, 81, 45, 63, 58],
            barWidth: 30,
            stack: 'percent',
            label: {
              show: false,
              position: 'right',
              itemStyle: {
                color: '#f00'
              }
            }
          },
          {
            name: '供而未用',
            type: 'bar',
            barWidth: 30,
            data: [85, 50, 70, 19, 55, 37, 42],
            barWidth: 16,
            stack: 'percent',
            label: {
              show: false,
              position: 'right'
            }
          }
        ]
      };`
  },
  {
    code: `option = {
        color: ['#3b7bdd', '#af8fdc', '#f8de88'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['供应', '撤销批文', '收回盘活'],
          left: 'center',
          top: '15%',
          itemWidth: 12,
          itemHeight: 12,
          itemStyle: {
            borderWidth: 0
          },
          icon: 'rect',
          textStyle: {
            fontSize: 14
          }
        },
        grid: {
          top: '40%',
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: function (value, index) {
              return value + '%';
            }
          }
        },
        yAxis: {
          type: 'category',
          data: [' '],
          axisLabel: {
            color: '#666'
          },
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: '#e3e3e3'
            }
          }
        },
        series: [
          {
            name: '供应',
            type: 'bar',
            data: [15],
            barWidth: 30,
            stack: 'percent',
            label: {
              show: false,
              position: 'right',
              itemStyle: {
                color: '#f00'
              }
            }
          },
          {
            name: '撤销批文',
            type: 'bar',
            data: [35],
            barWidth: 30,
            stack: 'percent',
            label: {
              show: false,
              position: 'right'
            }
          },
          {
            name: '收回盘活',
            type: 'bar',
            data: [50],
            barWidth: 30,
            stack: 'percent',
            label: {
              show: false,
              position: 'right'
            }
          }
        ]
      };`
  },
  {
    code: `option = {
        legend: {
          show: false
        },
        color: ['#5d86e5'],
        xAxis: {
          data: ['天宁区', '钟楼区', '新北区', '武进区', '金坛区', '溧阳市', '经开区'],
          axisTick: false,
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#445057'
            }
          }
        },
        yAxis: {},
        grid: {
          bottom: '10%',
          top: '15%',
          right: 40
        },
        series: [
          {
            name: '批而未供未供原因分析',
            type: 'bar',
            stack: 'one',
            barWidth: '30',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.3)'
              }
            },
            data: [15, 43, 24, 16, 19, 33, 54],
            label: {
              show: false
            }
          }
        ]
      }`
  },
  {
    code: `option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            },
            formatter: '{b}: {c}'
        },
        color: '#af90dc',
        legend: {
            show: false
        },
        grid: {
            top: '2%',
            left: '1%',
            right: '5%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['闲置土地收回后重新供应', '低效用地盘活', '提供容积率', '增资技改', '新供地中存量国有建设用地', '新供地中集体建设用地', '僵尸企业盘活', '其他', '备注'],
            axisLabel: {
                color: '#444'
            },
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#e3e3e3'
                }
            }
        },
        series: [
            {
                name: '',
                type: 'bar',
                stack: 'total',
                barWidth: 16,
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'right',
                    color: '#af90dc'
                },
                data: [3, 5, 6, 9, 10, 6, 3, 4, 2]
            }
        ]
    }`
  },
  {
    code: `option = {
      backgroundColor: "#fff",
      title: {
          subtext: '单位：份',
          left: 50,
          top: 0,
          subtextStyle: {
              fontSize: 12,
              color: "#7e7e7e"
          }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'none'
          },
          formatter: function (params) {
              return params[0].name + ': ' + params[0].value;
          }
      },
      grid: {
          left: 40,
          right: 14,
          bottom: 30,
          top: 33,
      },
      xAxis: [{
          type: 'category',
          axisTick: {
              show: false
          },
          data: ['1月', '2月', '3月', '4月', '5月', '1月', '2月', '3月', '4月', '5月'],
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#000"
              }
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#333"
              }
          },
      }],
      yAxis: [{
          max: 200,
          type: 'value',
          axisTick: {
              show: false
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: "#000"
              }
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#333"
              }
          },
          splitLine: {
              lineStyle: {
                  color: "#eef1f3"
              }
          }
      }],
      series: [{
          name: 'hill',
          type: 'pictorialBar',
          symbol: "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
          itemStyle: {
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 1,
                      color: '#6392f3'
                  }, {
                      offset: 0,
                      color: '#b89ce5'
                  }],
                  global: false
              }
          },
          emphasis: {
              itemStyle: {
                  opacity: 1
              }
          },
          data: [90, 60, 125, 175, 65, 90, 60, 125, 175, 65],
          z: 10
      }]
  };`
  },
  {
    code: `option = {
      color: ["#f48f96", "#af89f6", "#588ce3", "#6bc6ff", "#f7ce87", "#99534c", "#b0d463", "#e69169"],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: [
        {
          data: ['数据名称1', '数据名称2', '数据名称3', '数据名称4'],
          itemGap: 15,
          icon: "rect",
          right: '5%',
          top: '1%',
          itemWidth: 15,
          itemHeight: 15
        },
        {
          data: ['数据名称5', '数据名称6', '数据名称7', '数据名称8'],
          y: '30',
          itemGap: 15,
          icon: "rect",
          right: '5%',
          top: '7%',
          itemWidth: 15,
          itemHeight: 15
        },
      ],
      grid: {
        left: '4%',
        right: '4%',
        bottom: '4%',
        top:'12%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#333",
          fontSize: 14
        }
      },
      yAxis: {
        type: 'value',
        nameLocation: 'end',
        name: "单位：",
        nameTextStyle: {
          color: "#333",
          fontSize: 14,
          fontWeight: 'normal',
          padding: [0, 0, 0, 50],
        },
        boundaryGap: [0, 0.1],
        axisLabel: {
          show: true,
          // y轴坐标轴字体大小
          fontSize: 12,
          textStyle: {
            color: "#333",
            fontSize: 12
          },
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#999",
          },
        },
        // 分割线
        splitLine: {
          show: true,
          lineStyle: {
            color: "#ccc"
          }
        }
      },
      series: [
        {
          name: '数据名称1',
          type: 'bar',
          barWidth: "40%",
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [10000, 8000, 8000, 4000, 5000, 8000, 10000, 5000, 10000, 8000, 10000, 3000]
        },
        {
          name: '数据名称2',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [5000, 10000, 8000, 5000, 8000, 5000, 7000, 4000, 10000, 9000, 8000, 5000]
        },
        {
          name: '数据名称3',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [5000, 10000, 8000, 10000, 5000, 10000, 10000, 10000, 5000, 8000, 8000, 10000]
        },
        {
          name: '数据名称4',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [8000, 8000, 8000, 10000, 7000, 10000, 1000, 2000, 5000, 5000, 8000, 10000]
        },
        {
          name: '数据名称5',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [8000, 8000, 8000, 10000, 7000, 10000, 1000, 2000, 5000, 5000, 8000, 10000]
        },
        {
          name: '数据名称6',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [8000, 8000, 8000, 10000, 7000, 10000, 1000, 2000, 5000, 5000, 8000, 10000]
        },
        {
          name: '数据名称7',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [8000, 8000, 8000, 10000, 7000, 10000, 1000, 2000, 5000, 5000, 8000, 10000]
        },
        {
          name: '数据名称8',
          type: 'bar',
          stack: 'total',
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [8000, 8000, 8000, 10000, 7000, 10000, 1000, 2000, 5000, 5000, 8000, 10000]
        }
      ]
    };
    
    `
  },
  {
    code: `option = {
      backgroundColor: 'rgb(0,59,129)',
      color: ["#28b1ff", "#1ae562"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        show: true,
        itemGap: 60,
        itemWidth: 30,
        orient: 'horizontal',
        top: '5%',
        textStyle: {
          color: '#fff',
          fontSize: 12,
          padding: [0, 0, 0, 5]
        }
      },
      grid: {
        top: '16%',
        left: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["南京", "徐州", "连云港", "宿迁", "淮安", "盐城", "扬州", "镇江", "泰州", "常州", "无锡", "苏州", "南通"],
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: "#fff", fontSize: 12 },
          },
          axisLine: {
            lineStyle: { color: "#4962b3", type: "solid" },
          },
        },
      ],
      yAxis: [
        {
          max: 70,
          axisLabel: {
            show: true,
            fontSize: 12,
            color: '#4962b3',
            textStyle: {
              color: "#fff", fontSize: 12
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#4962b3",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#4962b3"
            }
          },
          splitNumber: 14
        },
        {
          position: 'right',
          axisLine: {
            show: true,
            lineStyle: {
              color: "#4962b3",
            },
          },
        }
      ],
      series: [
        {
          name: "供给",
          type: "bar",
          data: [10, 69, 22, 10, 19, 32, 10, 19, 32, 30, 19, 12, 50, 49],
          barWidth: '20%',
          barGap: 0
        },
        {
          name: "需求",
          type: "bar",
          data: [30, 19, 12, 20, 59, 52, 10, 19, 42, 10, 39, 32, 50, 29],
          barWidth: '20%',
          barGap: 0
        }
      ],
    };
    `
  },
  {
    code: `option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        // data: [2015, 2016, 2017, 2018, 2019, 2020],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c1c1c1'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#666666',
        },
    
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#c1c1c1'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#e9e9e9'
          }
        },
        axisLabel: {
          show: false,
          color: '#666666'
        }
      },
      grid: {
        left: '1%',
        right: '1%',
        top: '16%',
        bottom: '10',
        containLabel: true
      },
      dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
        // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
        dimensions: ['year', 'value', 'percent'],
        source: [
          { year: '2015', value: 12123, percent: '-0.01%' },
          { year: '2016', value: 14334, percent: '-0.01%' },
          { year: '2017', value: 44654, percent: '-0.01%' },
          { year: '2018', value: 23000, percent: '-0.01%' },
          { year: '2019', value: 21000, percent: '-0.01%' },
          { year: '2020', value: 32323, percent: '-0.01%' },
        ]
      },
    
      series: [{
        barWidth: 30,
        type: 'bar',
        label: {
          show: true,
          formatter: '{value|{@value}}\\n{percent|{@percent}}',
          position: 'top',
          rich: {
            value: {
              color: '#fb6523'
            },
            percent: {
              color: '#1ace7b'
            }
          }
        },
    
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#37ace8' },               //柱图渐变色
                { offset: 1, color: '#1181ea' }                //柱图渐变色
              ]
            ),
            barBorderRadius: [2, 2, 0, 0]
          }
        },
      }]
    };
    `
  },
  {
    code: `var dataAxis = ['南京市', '苏州市', '常州市', '无锡市', '泰州市', '盐城市', '扬州市', '淮安市', '宿迁市', '连云港', '徐州市'];
    var dataArr = [12123, 14334, 54654, 21000, 23000, 32323, 24000, 4567, 34567, 15000, 32334];
    var color1 = '#e1d37d';
    var color2 = '#e8b668';
    option = {
      title: {
        text: '单位：万亩',
        left: 45,
        top: 6,
        textStyle: {
          color: '#666',
          fontSize: 12,
    
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: dataAxis,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c1c1c1'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#666666',
          interval: 0,
          rotate: 45
        },
    
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c1c1c1'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#e9e9e9'
          }
        },
        axisLabel: {
          color: '#666666'
        }
      },
      grid: {
        left: '1%',
        right: '1%',
        top: '16%',
        bottom: '10',
        containLabel: true
      },
      series: [{
        data: dataArr,
        barWidth: 16,
        type: 'bar',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: color1 },               //柱图渐变色
                { offset: 1, color: color2 }                //柱图渐变色
              ]
            ),
            barBorderRadius: [2, 2, 0, 0]
          }
        },
      }]
    };
    `
  },
  {
    code: `var thingArray = [
      { name: "处置完成" },
      { name: "未处置完成" },
      { name: "征收费用1" },
      { name: "征收费用2" }
  ]
  var newArray = thingArray.map((item) => {
      return item.name;
  });
  option = {
      color: ["#3864dc", "#35cce7"],
      title: {
          trigger: 'axis'
      },
      legend: [
          {
              orient: "horizontal",
              icon: "rect",
              data: newArray.slice(0, 2),
              itemWidth: 12,
              itemHeight: 12,
              top: '0',
              left: '18%',
              textStyle: {
                  color: '#b5b2c8'
              },
          },
          {
              orient: "horizontal",
              data: newArray.slice(2, 4),
              top: '0',
              left: '52%',
              textStyle: {
                  color: '#b5b2c8',
              }
          }
      ],
      grid: {
          //		    	top: '15%',
          //		        left: '9%',
          //		        right: '8%',
          //		        bottom: '15%'
          top: '40px',
          left: '45px',
          right: '30px',
          bottom: '40px'
      },
      xAxis: [{
          axisTick: {
              show: false,
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: '#b5b2c8',
              },
              interval: 0,
              rotate: 24
          },
          axisLine: {
              lineStyle: {
                  color: '#b5b2c8'
              }
          },
          type: 'category',
          data: ['灌云区', '赣榆区', '东海县', '灌南县', '徐圩分区', '连云分区', '开发区分区', '高新分区', '海州分区']
      }],
      yAxis: [
          {
              name: '单位：万亩',
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#364d7f',
                  },
              },
              type: 'value',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#b5b2c8'
                  }
              },
              axisTick: {
                  show: false,
              },
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: '#b5b2c8'
                  }
              }
          }
      ],
      series: [
          {
              name: '处置完成',
              type: 'bar',
              barWidth: '24',
              stack: '处置完成',
              data: [2500, 16000, 5000, 10000, 14000, 9000, 12000, 24000, 7000]
          },
          {
              name: '未处置完成',
              type: 'bar',
              barWidth: '24',
              stack: '处置完成',
              data: [17500, 9000, 30000, 20000, 10000, 7000, 10000, 6000, 13000]
          },
          {
              name: "征收费用1",
              type: "line",
              symbol: "none",
              showAllSymbol: true,
              symbolSize: 8,
              lineStyle: {
                  normal: {
                      color: "#fdd18b"
                  },
                  borderColor: "rgba(0,0,0,.4)"
              },
              itemStyle: {
                  color: '#fdd18b',
                  borderColor: "#fdd18b",
                  borderWidth: 2
              },
              label: {
                  show: true
              },
              data: [17500, 16000, 31000, 20000, 13000, 9000, 12000, 24000, 7000]
          },
          {
              name: "征收费用2",
              type: "line",
              symbol: "none",
              showAllSymbol: true,
              symbolSize: 8,
              lineStyle: {
                  normal: {
                      color: "#e06b7b"
                  },
                  borderColor: "rgba(0,0,0,.4)"
              },
              itemStyle: {
                  color: '#e06b7b',
                  borderColor: "#e06b7b",
                  borderWidth: 2
              },
              label: {
                  show: true
              },
              data: [13500, 17000, 27000, 32000, 19000, 10000, 7000, 10000, 6000]
          }
      ]
  };
  `
  },
  {
    code: `var landData = [
      { name: "园林", value: 320 },
      { name: "林地", value: 190 },
      { name: "草地", value: 154 },
      { name: "耕地", value: 310 },
      { name: "交通运输", value: 720 },
      { name: "水利设施", value: 820 },
      { name: "城镇村及工矿", value: 660 },
      { name: "其他土地", value: 540 }
    ];
    var nameArray = landData.map((item) => {
      return item.name;
    });
    var total = landData.reduce((a, b) => {
      return a + b.value * 1;
    }, 0);
    var preArray = {}, areaData = {};
    landData.forEach(function (item) {
      areaData[item.name] = item.value;
    });
    landData.forEach(function (item) {
      preArray[item.name] = (item.value / total).toFixed(3);
    });
    option = {
      backgroundColor: 'rgb(0,59,129)',
      
      legend: [
        {
          orient: "vertical",
          icon: "rect",
          data: nameArray.slice(4, 8),
          left: '60%',
          itemWidth: 12,
          itemHeight: 12,
          top: "bottom",
          itemGap: 18,
          textStyle: {
            rich: {
              name: {
                color: '#9faad4',
                padding: [3, 0, 0, 0],
                fontWeight: '700'
              }
            }
          },
          formatter: item => {
            return ("{name|" + item + ": }{name|" + (areaData[item]).toFixed(2) + "}")
          }
        },
        {
          orient: "vertical",
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          data: nameArray.slice(0, 4),
          left: "0",
          top: "bottom",
          itemGap: 18,
          textStyle: {
            rich: {
              name: {
                color: '#9faad4',
                padding: [3, 0, 0, 0],
                fontWeight: '700'
              }
            }
          },
          formatter: item => {
            return ("{name|" + item + ": }{name|" + (areaData[item]).toFixed(2) + "}")
          }
        }
      ],
      grid: {
        width: '100%',
        top: '20px',
        left: '5px',
        right: '20px',
        bottom: '140px'
      },
      xAxis: {
        type: "value",
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: '园林',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'top',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          labelLine: {
            show: true,
            normal: {
              showAbove: true,
              length: 55,
              length2: 0,
              lineStyle: {
                color: "#fff",
              },
            },
          },
          data: [320]
        },
        {
          name: '林地',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'bottom',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [190]
        },
        {
          name: '草地',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'top',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [154]
        },
        {
          name: '耕地',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'bottom',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [310]
        },
        {
          name: '交通运输',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'top',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [720]
        },
        {
          name: '水利设施',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'bottom',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [820]
        },
        {
          name: '城镇村及工矿',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'top',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [660]
        },
        {
          name: '其他土地',
          type: 'bar',
          barWidth: 28,
          stack: 'total',
          label: {
            show: true,
            position: 'bottom',
            formatter: function (data) {
              return ("{name| " + ((data.value / total) * 100).toFixed(2) + "%}")
            },
            rich: {
              name: {
                color: '#fff'
              }
            }
          },
          data: [540]
        }
      ]
    };
    `
  },
  {
    code: `option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '2%',
        right: '9%',
        bottom: '5%',
        top: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        interval: 1,
        axisLine: {
          show: true,
          lineStyle: {
            color: ''
          }
        },
        axisLabel: {
          color: '#333'
        }
      },
      yAxis: {
        type: 'category',
        data: ['事假', '病假', '年假'],
        axisLine: {
          lineStyle: {
            color: ''
          }
        },
        axisLabel: {
          color: '#333'
        }
      },
      series: [
        {
          type: 'bar',
          stack: 'total',
          barWidth: 24,
          itemStyle: {
            borderRadius: [0, 10, 10, 0]
          },
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#3c89f3'
          }, {
            offset: 1,
            color: '#aa9bf6'
          }]),
          data: [5, 2, 10]
        },
        {
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'right',
            formatter: '{b|剩余}{a|{c}}{b|天}',
            rich: {
              a: {
                color: '#8a77eb',
                fontSize: 14,
                fontWeight: 'bold'
              },
              b: {
                fontSize: 14
              }
            }
    
          },
          barWidth: 16,
          itemStyle: {
            borderRadius: [0, 10, 10, 0]
          },
          color: '#eee',
          data: [20, 18, 5],
          emphasis: {
            focus: 'none',
            itemStyle: {
              color: '#ededed'
            }
          }
        }
      ]
    };
    `
  },
  {
    code: `var attendanceShowData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: [
          '请假人数',
          '缺勤人数'
        ],
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 80,
        top: 15
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '4%',
        top: '13%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        interval: 5,
        axisLine: {
          show: true,
          lineStyle: {
            color: ''
          }
        },
        axisLabel: {
          color: '#333'
        },
        position: 'top'
      },
      yAxis: {
        type: 'category',
        data: attendanceShowData.reverse(),
        axisLine: {
          lineStyle: {
            color: ''
          }
        },
        axisLabel: {
          color: '#333'
        }
      },
      series: [
        {
          name: '请假人数',
          type: 'bar',
          stack: 'total',
          barWidth: 16,
          color: '#409eff',
          data: [5, 2, 10, 18, 5, 6, 3, 2, 3, 11, 1, 8, 4, 5]
        },
        {
          name: '缺勤人数',
          type: 'bar',
          stack: 'total',
          barWidth: 16,
          color: '#d8dbe7',
          data: [20, 18, 5, 6, 3, 2, 3, 11, 1, 8, 4, 5, 12, 2],
          emphasis: {
            focus: 'none',
            itemStyle: {
              color: '#d8dbe7'
            }
          }
        }
      ]
    };
    `
  },
  {
    code: `var xAxisData = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
    var data1 = [1, 3, 4, 6, 9, 3, 4, 2, 1, 3, 3, 4, 2];
    var data2 = [2, 5, 6, 7, 8, 9, 5, 5, 2, 6, 8, 9, 5];
    var data3 = [2, 4, 6, 5, 9, 7, 6, 4, 2, 5, 6, 8, 4];
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };
    option = {
      title: {
        text: '单位：平方米',
        textStyle: {
          fontSize: '12',
          fontWeight: 'normal'
        },
        left: 30,
        top: 15
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['年初耕地面积', '年内减少面积', '年内补划面积'],
        right: '10',
        top: '10',
        itemWidth: 12,
        itemHeight: 12,
        itemStyle: {
          borderWidth: 0
        },
        icon: 'rect',
        textStyle: {
          fontSize: 14
        }
      },
      color: ['#3d7bc8', '#91d6b0', '#45c7eb'],
      xAxis: {
        data: xAxisData,
        axisTick: false,
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#eee'
          }
        },
        splitLine: { show: false },
        splitArea: { show: false },
        axisLabel: {
          color: '#333'
        }
      },
      yAxis: {},
      grid: {
        bottom: 15,
        top: 50,
        right: 20,
        left: 15,
        containLabel: true
      },
      series: [
        {
          name: '年初耕地面积',
          type: 'bar',
          stack: 'one',
          barWidth: '14',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: '年内减少面积',
          type: 'bar',
          barWidth: '14',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: '年内补划面积',
          type: 'bar',
          barWidth: '14',
          stack: 'three',
          emphasis: emphasisStyle,
          data: data3
        }
      ]
    };
    `
  },
  {
    code: `
    var colors = ["#5119e4","#fd6975","#dbdaad","#7f99ea","#3c05fa","#9c65f4","#32a78e","#3ad94d","#748259","#b629e0","#abde87","#6edaf4"];
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return params[0].name + ': ' + params[0].value;
        }
      },
      xAxis: {
        data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行',],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          textStyle: {
            color: '#333'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      color: ['#4587E7', '#35AB33', '#F5AD1D', '#ff7f50', '#da70d6', '#32cd32', '#6495ed'],
      series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '40%',
        symbol: 'triangle',
        itemStyle: {
          normal: {
            opacity: 0.5,
    
            color: function (params) {
              return colors[params.dataIndex];
            }
          },
          emphasis: {
            opacity: 1
          }
        },
        data: [123, 60, 125, 128, 122, 122, 100, 122],
        z: 10
      }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
    
      }]
    };
    `
  },
  {
    code: `option = {
      color: ['#c0504d', '#4f81bd'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          data: ['平均办结时间（工作日）', '规定办结时限（工作日）'],
          left: 'center',
          bottom: '10',
          itemWidth: 12,
          itemHeight: 12,
          itemStyle: {
              borderWidth: 0
          },
          icon: 'rect',
          textStyle: {
              fontSize: 14
          }
      },
      grid: {
          top: '2%',
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
      },
      yAxis: {
          type: 'category',
          data: ['建设项目用地', '供后监管', '勘测定界', '单独选址', '建设项目用地预审', '城镇分批次', '土地整治', '规划审批', '增减挂钩'],
          axisLabel: {
              color: '#666'
          },
          axisTick: false,
          axisLine: {
              lineStyle: {
                  color: '#e3e3e3'
              }
          }
      },
      series: [
          {
              name: '平均办结时间（工作日）',
              type: 'bar',
              data: [15, 22, 6, 42, 8, 43, 5, 7, 9],
              barWidth: 10,
              label: {
                  show: true,
                  position: 'right',
                  itemStyle: {
                      color: '#f00'
                  }
              }
          },
          {
              name: '规定办结时限（工作日）',
              type: 'bar',
              data: [18, 20, 7, 1, 41, 45, 4, 7, 7],
              barWidth: 10,
              label: {
                  show: true,
                  position: 'right'
              }
          }
      ]
  };
  `
  },
  {
    code: `var xAxisData = ['新北区', '金坛区', '天宁区', '钟楼区', '溧阳市', '武进区', '经开区'];
    var data1 = [5, 3, 4, 6, 9, 3, 4, 2, 1, 3];
    var data2 = [7, 5, 6, 7, 8, 9, 5, 5, 2, 5];
    var data3 = [2, 4, 6, 5, 9, 7, 6, 4, 2, 4];
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };
    option = {
      backgroundColor: '#0d376a',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['供应', '撤销批文', '守护盘活'],
        left: 'center',
        top: '15',
        icon: 'rect',
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
    
      xAxis: {
        data: xAxisData,
        axisTick: false,
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#416189',
            type: 'dashed'
          }
        },
        splitLine: { show: false },
        splitArea: { show: false },
        axisLabel: {
          color: '#f7f7f8'
        }
      },
      yAxis: {
        axisLabel: {
          color: '#f7f7f8'
        },
        splitLine: {
          lineStyle: {
            color: '#416189',
            type: 'dashed'
          }
        },
      },
      grid: {
        bottom: 15,
        top: 50,
        right: 20,
        left: 15,
        containLabel: true
      },
      series: [
        {
          name: '供应',
          type: 'bar',
          stack: 'one',
          barWidth: '14',
          emphasis: emphasisStyle,
          data: data1,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#28b1ff' },               //柱图渐变色
                  { offset: 1, color: '#2b8aff' }                //柱图渐变色
                ]
              ),
              barBorderRadius: [2, 2, 0, 0]
            }
          },
        },
        {
          name: '撤销批文',
          type: 'bar',
          barWidth: '14',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data2,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#ffab61' },               //柱图渐变色
                  { offset: 1, color: '#edc556' }                //柱图渐变色
                ]
              ),
              barBorderRadius: [2, 2, 0, 0]
            }
          },
        },
        {
          name: '守护盘活',
          type: 'bar',
          barWidth: '14',
          stack: 'three',
          emphasis: emphasisStyle,
          data: data3,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#72d24c' },               //柱图渐变色
                  { offset: 1, color: '#61e7ff' }                //柱图渐变色
                ]
              ),
              barBorderRadius: [2, 2, 0, 0]
            }
          },
        }
      ]
    }`
  },
  {
    code: `var xAxisData = ['新北区', '金坛区', '天宁区', '钟楼区', '溧阳市', '武进区', '经开区'];
    var data1 = [5, 3, 4, 6, 9, 3, 4, 2, 1, 3];
    var data2 = [7, 5, 6, 7, 8, 9, 5, 5, 2, 5];
    var data3 = [2, 4, 6, 5, 9, 7, 6, 4, 2, 4];
    var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
    };
    option = {
      backgroundColor: '#0d376a',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2年以上', '1~2年', '1年内', '未按时竣工'],
        left: 'center',
        top: '15',
        icon: 'rect',
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      color: ['#4e80f8', '#61e6fa', '#72ce4e', '#dc6175'],
      xAxis: {
        data: xAxisData,
        axisTick: false,
        axisLine: {
          onZero: true,
          lineStyle: {
            color: '#416189',
            type: 'dashed'
          }
        },
        splitLine: { show: false },
        splitArea: { show: false },
        axisLabel: {
          color: '#f7f7f8'
        }
      },
      yAxis: {
        axisLabel: {
          color: '#f7f7f8'
        },
        splitLine: {
          lineStyle: {
            color: '#416189',
            type: 'dashed'
          }
        },
      },
      grid: {
        bottom: 15,
        top: 50,
        right: 20,
        left: 15,
        containLabel: true
      },
      series: [
        {
          name: '2年以上',
          type: 'bar',
          stack: 'one',
          barWidth: '30',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: '1~2年',
          type: 'bar',
          barWidth: '30',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: '1年内',
          type: 'bar',
          barWidth: '30',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: '未按时竣工',
          type: 'bar',
          barWidth: '30',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data3
        }
      ]
    }`
  },
  {
    code: `var yAxisData3 = ['备注', '其他', '僵尸企业盘活', '新供地集中建设用地', '新供地中存量国有建设用地', '增资技改', '提供容积率', '低效用地盘活', '闲置土地收回后重新供应'];
    var seriesData3 = [89, 65, 55, 54, 45, 30, 22, 21, 15];
    option = {
      backgroundColor: '#0d376a',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: ''
      },
      grid: {
        containLabel: true,
        left: '3%',
        right: '8%',
        top: '5%',
        bottom: '5%'
      },
      yAxis: {
        data: yAxisData3,
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          margin: 32,
          fontSize: 14,
          color: '#f7f7f8',
          interval: 0
        },
        axisPointer: {
          label: {
            show: true,
            margin: 8
          }
        }
      },
      xAxis: {
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      series: [{
        name: '排行榜',
        type: 'pictorialBar',
        label: {
          normal: {
            show: true,
            position: 'left',
            textStyle: {
              fontSize: 16,
              fontFamily: 'impact',
              color: "#27a0ff"
            },
            formatter: function (params) {
              return '{a|' + params.value + ' }{b|个}'
            },
            rich: {
              a: {
                fontSize: 18,
                color: "#52e3fe"
              },
              b: {
                fontSize: 12,
                color: "#b9cccf",
              }
            }
          }
        },
        symbolRepeat: true,
        symbolSize: [3, 12],
        barCategoryGap: 10,
        symbol: 'rect',
        color: "#f00",
        color: '#27a1df',
        data: seriesData3
      }]
    };
    //手动计算最后一列label位置
        function calculationLocation(chart) {
          setTimeout(() => {
            //整个图表的宽度
            let chartWidth = chart.getWidth();
            //计算完毕的配置项
            let option = chart.getOption();
            //grid
            let grid = option.grid[0];
            //grid的left、right
            let gLeft = grid.left;
            let gRight = grid.right;
            //计算left和right的距离
            gLeft = (chartWidth * parseFloat(gLeft)) / 100;
            gRight = (chartWidth * parseFloat(gRight)) / 100;
            //label横向偏移的距离
            let x = chartWidth - gLeft - gRight;
            //更新lable的配置之后init配置项，然后重渲染图表
            let label = { ...option.series[0].label, offset: [x - 57, 0] } //57是y轴label宽度
            option.series[0].label = label;
            chart.setOption({ series: option.series });
          },0);
        }
        calculationLocation(myChart);`
  },
  {
    code: `option = {
      backgroundColor: '#0d376a',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: ''
      },
      grid: {
        containLabel: true,
        left: '3%',
        right: '3%',
        top: 15,
        bottom: 15
      },
      yAxis: {
        data: ['姑苏区', '高新区', '吴中区', '常熟市', '昆山市', '工业园', '太仓市', '张家港', '相城区', '吴江区'],
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          margin: 8,
          fontSize: 14,
          color: '#6db3e8'
        },
        axisPointer: {
          label: {
            show: true,
            margin: 8
          }
        }
      },
      xAxis: {
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      series: [{
        name: '排行榜',
        type: 'pictorialBar',
        label: {
          normal: {
            show: true,
            position: 'left',
            offset: [5, 0],
            textStyle: {
              fontSize: 16,
              fontFamily: 'impact',
              color: "#27a0ff"
            },
            formatter: function (params) {
              if (params.dataIndex < 3) {
                return '{a|' + params.value + '%}'
              } else {
                return '{b|' + params.value + '%}'
              }
            },
            rich: {
              a: {
                fontSize: 16,
                fontFamily: 'impact',
                color: "#28f7ff"
              },
              b: {
                fontSize: 16,
                fontFamily: 'impact',
                color: "#27a0ff"
              }
            }
          }
        },
        symbolRepeat: true,
        symbolSize: [3, 12],
        barCategoryGap: 10,
        symbol: 'rect',
        color: "#f00",
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(88,178,255,1)'
        }, {
          offset: 1,
          color: 'rgba(194,240,255,1)'
        }]),
        data: [89, 65, 55, 54, 45, 30, 22, 21, 15, 11]
      }]
    };
    
    //手动计算最后一列label位置
        function calculationLocation(chart) {
          setTimeout(() => {
            //整个图表的宽度
            let chartWidth = chart.getWidth();
            //计算完毕的配置项
            let option = chart.getOption();
            //grid
            let grid = option.grid[0];
            //grid的left、right
            let gLeft = grid.left;
            let gRight = grid.right;
            //计算left和right的距离
            gLeft = (chartWidth * parseFloat(gLeft)) / 100;
            gRight = (chartWidth * parseFloat(gRight)) / 100;
            //label横向偏移的距离
            let x = chartWidth - gLeft - gRight;
            //更新lable的配置之后init配置项，然后重渲染图表
            let label = { ...option.series[0].label, offset: [x - 57, 0] } //57是y轴label宽度
            option.series[0].label = label;
            chart.setOption({ series: option.series });
          },0);
        }
        calculationLocation(myChart);`
  },
  {
    code: `option = {
      backgroundColor: 'rgb(3,57,141)',
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'line'
          }
      },
      legend: {
          icon: "rect",
          itemHeight: 12,
          itemWidth: 12,
          data: ['永久用地', '代征用地'],
          textStyle: {
              color: '#a6a7b1'
          },
          right: 8,
          top: 8
      },
      grid: {
          top: "38px",
          left: '8px',
          right: '8px',
          bottom: '18px',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          //		        position:'top',
          axisLine: {
              lineStyle: {
                  color: '#7d96d7'
              }
  
          },
          splitLine: {
              lineStyle: {
                  color: '#445ea0'
              }
          },
          axisTick: {
              show: false
          }
      },
      yAxis: {
          type: 'category',
          data: ['S10号线', 'S7号线', 'S3号线', '10号线', '4号线', '3号线', '2号线', '1号线'],
          axisLine: {
              lineStyle: {
                  color: '#7d96d7'
              }
  
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              color: '#7ebbfe'
          }
      },
      series: [
          {
              name: '永久用地',
              type: 'bar',
              barWidth: 15,
              label: {
                  normal: {
                      color: '#fff',
                      show: true,
                      textBorderColor: '#333',
                      textBorderWidth: 2
                  }
              },
              barGap: 0,
              data: [118203, 123489, 129034, 104970, 131744, 104970, 154970, 104970],
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                          { offset: 0, color: '#5450f8' },
                          { offset: 0.5, color: '#4573fb' },
                          { offset: 1, color: '#32a1ff' }
                      ]
                  )
              }
          },
          {
              name: '代征用地',
              type: 'bar',
              barGap: 0,
              label: {
                  normal: {
                      color: '#fff',
                      show: true,
                      textBorderColor: '#333',
                      textBorderWidth: 2
                  }
              },
              barWidth: 15,
              data: [119325, 123438, 131000, 121594, 134141, 121807, 104970, 131000],
              itemStyle: {
                  color: '#4afdcd'
              }
          }
      ]
  };`
  },
  {
    code: `// 左上角纵向双侧柱状图
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var data6 = [];
    
    for (var i = 0; i < 7; i++) {
        data1.push((Math.random() * 200).toFixed(2));
        data2.push((-Math.random() * 200).toFixed(2));
        data3.push((Math.random() * 200).toFixed(2));
        data4.push((-Math.random() * 200).toFixed(2));
        data5.push((Math.random() * 200).toFixed(2));
        data6.push((-Math.random() * 200).toFixed(2));
    }
    var emphasisStyle = {
        itemStyle: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };
    option = {
        backgroundColor: 'rgb(0,12,61)',
        title: [{
            text: '实际',
            textStyle: {
                color: '#fcb333',
                fontStyle: 'normal',
                fontSize: '12',
                lineHeight: '12'
            },
            right: '20',
            top: '7%',
        }, {
            right: '20',
            top: '15%',
            subtext: '计划',
            subtextStyle: {
                color: '#9f93ff',
                fontStyle: 'normal',
                fontSize: '12',
                lineHeight: '1200'
            }
        }],
        color: ["#fc7f33", "#f3408c", "#38e9d6", "#3593fc"],
        legend: {
            data: ['新增饮用水源地保护区面积', '饮用水水源地保护水与修复面积', '小流域综合治理面积'],
            orient: 'horizontal',
            top: 10,
            right: "5%",
            icon: 'roundRect',
            itemWidth: 20,
            textStyle: {
                color: "#74acd7"
            }
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: false
        },
        tooltip: {
            formatter: (params) => {
                var dotColor = null;
                if (params.color.length != 7) {
                    dotColor = params.color.colorStops[1].color;
                } else {
                    dotColor = params.color;
                }
                let dot = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + dotColor + ';"></span>'
                return dot + params.seriesName + "：" + Math.abs(params.value) + '公顷' + '<br/>'
            }
        },
        xAxis: {
            data: ["2021", "2022", "2023", "2024", "2025", "2026", "2027"],
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false },
            nameTextStyle: {//修改坐标字体颜色
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            name: "公顷",
            inverse: true,
            splitArea: { show: false },
            nameTextStyle: {//修改坐标字体颜色
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#39406d"
                }
            },
            //y轴上半轴处理成正值
            axisLabel: {
                formatter: function (params) {
                    if (params < 0) {
                        return -params
                    } else {
                        return params
                    }
                }
            }
        },
        grid: {
            top: "10%",
            left: "5%",
            right: 40,
            bottom: "12%"
        },
        series: [
            {
                name: '新增饮用水源地保护区面积',
                type: 'bar',
                stack: 'one',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data1,
                itemStyle: {
                    color: '#0078ff',
                    barBorderRadius: [0, 0, 3, 3]  //柱状角成椭圆形
                },
    
            },
            {
                name: '新增饮用水源地保护区面积',
                type: 'bar',
                stack: 'one',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data2,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00c9f5' },
                            { offset: 1, color: '#0078ff' }
                        ]
                    ),
                    barBorderRadius: [3, 3, 0, 0]  //柱状角成椭圆形
                }
            },
            {
                name: '饮用水水源地保护水与修复面积',
                type: 'bar',
                stack: 'two',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data3,
                itemStyle: {
                    color: '#ae3aff',
                    barBorderRadius: [0, 0, 3, 3]  //柱状角成椭圆形
                }
            },
            {
                name: '饮用水水源地保护水与修复面积',
                type: 'bar',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                stack: 'two',
                emphasis: emphasisStyle,
                data: data4,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#e335c5' },
                            { offset: 1, color: '#ae3aff' }
                        ]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            {
                name: '小流域综合治理面积',
                type: 'bar',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                stack: 'three',
                emphasis: emphasisStyle,
                data: data5,
                itemStyle: {
                    color: '#dd7917',
                    barBorderRadius: [0, 0, 3, 3]
                }
            },
            {
                name: '小流域综合治理面积',
                type: 'bar',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                stack: 'three',
                emphasis: emphasisStyle,
                data: data6,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#f5cd2f' },
                            { offset: 1, color: '#dd7917' }
                        ]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            }
        ]
    };`
  },
  {
    code: `var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    
    for (var i = 0; i < 7; i++) {
        data1.push((Math.random() * 200).toFixed(2));
        data2.push((-Math.random() * 200).toFixed(2));
        data3.push((Math.random() * 200).toFixed(2));
        data4.push((-Math.random() * 200).toFixed(2));
    }
    var emphasisStyle = {
        itemStyle: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };
    option = {
        backgroundColor: 'rgb(0,12,61)',
        color: ["#fc7f33", "#f3408c", "#38e9d6", "#3593fc"],
        legend: {
            data: ['实际农用地', '实际耕地', '计划农用地', '计划耕地'],
            orient: 'horizontal',
            top: 10,
            right: "1%",
            icon: 'roundRect',
            itemWidth: 20,
            textStyle: {
                color: "#74acd7"
            }
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            show: false
        },
        tooltip: {
            formatter: (params) => {
                var dotColor = params.color;
                let dot = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + dotColor + ';"></span>'
                return dot + params.seriesName + "：" + Math.abs(params.value) + '公顷' + '<br/>'
            }
        },
        xAxis: {
            data: ["2021", "2022", "2023", "2024", "2025", "2026", "2027"],
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false },
            nameTextStyle: {//修改坐标字体颜色
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },
        yAxis: {
            name: "公顷",
            inverse: true,
            splitArea: { show: false },
            nameTextStyle: {//修改坐标字体颜色
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#39406d"
                }
            },
            axisLabel: {
                formatter: function (params) {
                    console.log(params);
                    if (params < 0) {
                        return -params
                    } else {
                        return params
                    }
                }
            },
        },
        grid: {
            top: "10%",
            left: "5%",
            right: 40,
            bottom: "12%"
        },
        series: [
            {
                name: '实际农用地',
                type: 'bar',
                stack: 'one',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data1
            },
            {
                name: '实际耕地',
                type: 'bar',
                stack: 'one',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data2
            },
            {
                name: '计划农用地',
                type: 'bar',
                stack: 'two',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                emphasis: emphasisStyle,
                data: data3
            },
            {
                name: '计划耕地',
                type: 'bar',
                barGap: "5%",
                barWidth: 15, //柱条的宽度，不设时自适应。
                stack: 'two',
                emphasis: emphasisStyle,
                data: data4
            }
        ]
    };`
  },
  {
    code: `option = {
      backgroundColor: 'rgb(0,12,61)',
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: (params) => {
              let obj = params.map((item) => {
                  let dotColor = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + ';"></span>'
                  return dotColor + item.name + item.seriesName + "：" + Math.abs(item.value) + '公顷' + '<br/>'
              })
              return obj.join('')
          }
      },
      legend: {
          data: ['计划', '实际'],
          textStyle: {
              color: "#74acd7"
          },
          top: '10'
      },
      grid: {
          left: '8%',
          right: '8%',
          bottom: '5%',
          top: '12%',
          containLabel: true
      },
      xAxis: [
          {
              name: "公顷",
              type: 'value',
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: "#fff"
                  }
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  formatter: function (params) {
                      console.log(params);
                      if (params < 0) {
                          return -params
                      } else {
                          return params
                      }
                  }
              },
              nameTextStyle: {//修改坐标字体颜色
                  color: "#fff"
              },
          }
      ],
      yAxis: [
          {
              type: 'category',
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: "#39406d"
                  }
              },
              data: ['盐碱化土地治理面积', '污染土地治理面积', '退化土地治理面积', '污染土地治理面积'],
              nameTextStyle: {//修改坐标字体颜色
                  color: "#fff"
              },
              axisLine: {
                  lineStyle: {
                      color: "#fff"
                  }
              },
          }
      ],
      series: [
          {
              name: '实际',
              type: 'bar',
              stack: '总量',
              barWidth: 30, //柱条的宽度，不设时自适应。
              label: {
                  show: true,
                  position: 'insideLeft',
                  formatter: '{b}'
              },
              data: [320, 302, 341, 374],
              itemStyle: {
                  color: '#fcb333'
              }
          },
          {
              name: '计划',
              type: 'bar',
              stack: '总量',
              label: {
                  show: true,
                  position: 'insideRight',
                  formatter: '{b}'
  
              },
              data: [-220, -332, -301, -334],
              itemStyle: {
                  color: '#705ff4'
              }
          }
      ]
  };`
  },
  {
    code: `option = {
      backgroundColor: 'rgb(0,12,61)',
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
      },
      color: ["#ff944c", "#fff"],
      grid: {
          top: "15%",
          left: "2%",
          right: "2%",
          bottom: "8%",
          containLabel: true
      },
      legend: {
          show: false,
          data: ['总量', '总量', '平均量'],
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          icon: 'circle',
          itemWidth: 10
      },
      xAxis: [
          {
              type: 'category',
              data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
              nameTextStyle: {//修改坐标字体颜色
                  color: "#fff"
              },
              axisLine: {
                  lineStyle: {
                      color: "#fff"
                  }
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '',
              nameTextStyle: {//修改坐标字体颜色
                  color: "#fff"
              },
              axisLine: {
                  lineStyle: {
                      color: "#fff"
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: "#39406d"
                  }
              }
          }
      ],
      series: [
          {
              name: '总量',
              type: 'bar',
              barWidth: 15, //柱条的宽度，不设时自适应。
              itemStyle: {
                  normal: {
                      color: "#88CEFE",
                  }
              },
              data: [220, 182, 191, 234, 290, 330, 200, 250, 300, 240],
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          { offset: 0, color: '#2dceb4' },
                          { offset: 0.5, color: '#2d81e5' },
                          { offset: 1, color: '#2c65f6' }
                      ]
                  )
              }
          },
          {
              name: '总量',
              type: 'line',
              data: [220, 182, 191, 234, 290, 330, 200, 250, 300, 240]
          },
          {
              name: '平均量',
              lineStyle: {
                  width: 2,
                  type: 'dashed'
              },
              type: 'line',
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
          }]
  };`
  },
  {
    code: `
    option = {
      backgroundColor: 'rgb(0,83,174)',
      color: ['#ff923a', '#52fff9', '#ff923a', '#eaff85', '#f36279', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      angleAxis: {
        type: 'category',
        axisLabel: {
          color: "#fff"
        },
        data: ['栖霞区', '玄武区', '秦淮区', '鼓楼区', '建邺区', '雨花区', '江宁区', '浦口区', '六合区', '溧水区', '高淳区']
      },
      radiusAxis: {},
      polar: {
        radius: ["0%", "50%"],
        center: ["40%", "50%"]
      },
      series: [
        {
          type: 'bar',
          data: [0, 5, 10, 15, 0, 20, 0, 40, 30, 30, 30],
          coordinateSystem: 'polar',
          name: '违法占用',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          data: [0, 10, 30, 20, 0, 40, 0, 60, 50, 20, 40],
          coordinateSystem: 'polar',
          name: '农转用审批',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
          coordinateSystem: 'polar',
          name: '农业产业结构调整',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          data: [20, 20, 20, 0, 0, 20, 20, 0, 0],
          coordinateSystem: 'polar',
          name: '其他',
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        },
    
      ],
      legend: {
        show: true,
        data: ['违法占用', '农转用审批', '存量建设用地', '农业产业结构调整', '其他'],
        textStyle: {
          fontSize: 12,//字体大小
          color: '#ffffff'//字体颜色
        },
        right: 0,
        top: 'center',
        orient: 'vertical'
      },
      title: {
        textStyle: {
          color: '#fff',
          x: 'center',
          y: 'center'
        }
      },
      radiusAxis: {
        axisLabel: { //刻度标签设置
          margin: 0, //刻度与坐标轴之间的距离
          textStyle: {
            color: '#fff'
          }
        },
        nameTextStyle: {
          backgroundColor: "#fff"
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      },
    };`
  },
  {
    code: `var data = [
      [5000, 10000, 6785.71],
      [4000, 10000, 6825],
      [3000, 6500, 4463.33],
      [2500, 5600, 3793.83],
      [2000, 4000, 3060],
      [2000, 4000, 3222.33],
      [2500, 4000, 3133.33],
      [1800, 4000, 3100],
      [2000, 3500, 2750],
      [2000, 3000, 2500],
      [1800, 3000, 2433.33]
    ];
    // prettier-ignore
    const cities = ['栖霞区', '玄武区', '秦淮区', '鼓楼区', '建邺区', '雨花区', '江宁区', '浦口区', '六合区', '溧水区', '高淳区'];
    const barHeight = 50;
    option = {
      legend: {
        show: false,
        top: 'bottom',
        data: ['耕地保有量', '耕地现状']
      },
      grid: {
        top: 100
      },
      angleAxis: {
        type: 'category',
        data: cities
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          const id = params.dataIndex;
          return (
            cities[id] +
            '<br>Lowest：' +
            data[id][0] +
            '<br>Highest：' +
            data[id][1] +
            '<br>Average：' +
            data[id][2]
          );
        }
      },
      radiusAxis: {},
      polar: {
        radius: ["0%", "50%"],
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: 'transparent'
          },
          data: data.map(function (d) {
            return d[0];
          }),
          coordinateSystem: 'polar',
          stack: 'Min Max',
          silent: true
        },
        {
          type: 'bar',
          data: data.map(function (d) {
            return d[1] - d[0];
          }),
          coordinateSystem: 'polar',
          name: '耕地保有量',
          stack: 'Min Max'
        },
        {
          type: 'bar',
          itemStyle: {
            color: 'transparent'
          },
          data: data.map(function (d) {
            return d[2] - barHeight;
          }),
          coordinateSystem: 'polar',
          stack: 'Average',
          silent: true,
          z: 10
        },
        {
          type: 'bar',
          data: data.map(function (d) {
            return barHeight * 2;
          }),
          coordinateSystem: 'polar',
          name: '耕地现状',
          stack: 'Average',
          barGap: '-100%',
          z: 10
        }
      ]
    };
    `
  },
  {
    code: `option = {
      backgroundColor: "rgb(0, 63,89)",
      grid: {
          top: '8%',
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
      },
      tooltip: {
  
      },
      xAxis: {
          type: 'category',
          axisLabel: {//坐标轴文本标签
              show: true,//控制显示与否
              textStyle: {
                  color: '#98b8cf',  //更改坐标轴文字颜色
                  fontSize: 12      //更改坐标轴文字大小
              }
          },
          data: ['茫崖市', '格尔木', '大柴旦', '都兰县', '德令哈', '天峻县', '乌兰县'],
          axisTick: {//展示刻度线
              show: false
          },
          axisLine: {//展示坐标线
              show: true,
              lineStyle: {
                  color: 'white'  //坐标线颜色
              }
          },
          axisPointer: {
              type: 'shadow'
          }
      },
      yAxis: {
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#666',
                  opacity: '0.6'
              }
          },
          axisLabel: {//坐标轴文本标签
              show: true,//控制显示与否
              textStyle: {
                  color: '#98b8cf',  //更改坐标轴文字颜色
                  fontSize: 12      //更改坐标轴文字大小
              }
          },
          axisTick: {//展示刻度线
              show: false
          },
          axisLine: {//展示坐标线
              show: true,
              lineStyle: {
                  color: 'white'  //坐标线颜色
              }
          }
      },
      series: [
          {
              type: 'pictorialBar',
              yAxisIndex: 0,
              barWidth: 30,
              symbol: 'triangle',
              tooltip: {
                  valueFormatter: function (value) {
                      return value + '公顷';
                  }
              },
              data: [1700, 1500, 2200, 1600, 1500, 1900, 1800],
              itemStyle: {
                  normal: {
                      label: {
                          show: true,
                          position: 'top',
                          textStyle: {
                              color: '#fff',
                              fontSize: 12
                          }
                      },
                      //右下左上
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [{ offset: 0.1, color: '#4B8AE3' },
                          { offset: 1, color: '#336190' }]
                      )
                  }
              }
          },
          {
              type: 'pictorialBar',
              barGap: '-30%',
              yAxisIndex: 0,
              barWidth: 30,
              symbol: 'triangle',
              tooltip: {
                  valueFormatter: function (value) {
                      return value + '公顷';
                  }
              },
              data: [800, 600, 300, 700, 1200, 200, 700],
              itemStyle: {
                  normal: {
                      label: {
                          show: true,
                          position: 'top',
                          textStyle: {
                              color: '#fff',
                              fontSize: 12
                          }
                      },
                      //右下左上
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              { offset: 0.3, color: '#3AECA7' },
                              { offset: 1, color: '#1DBAB6' }
                          ]
                      )
                  }
              }
          }
      ]
  };`
  },
  {
    code: `option = {
      backgroundColor: '#00265f',
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          top: '15%',
          right: '3%',
          left: '5%',
          bottom: '12%'
      },
      xAxis: [{
          type: 'category',
          data: ['工作票', '操作票', '抢修', '用电调查', '设备巡视', '现场勘查', '到岗到位'],
          axisLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.12)'
              }
          },
          axisLabel: {
              margin: 10,
              color: '#e2e9ff',
              textStyle: {
                  fontSize: 14
              },
          },
      }],
      yAxis: [{
          axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
          },
          axisLine: {
              show: false
          },
          splitLine: {
              lineStyle: {
                  color: 'rgba(255,255,255,0.12)'
              }
          }
      }],
      series: [{
          type: 'bar',
          data: [300, 450, 770, 203, 255, 188, 156],
          barWidth: '20px',
          itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(0,244,255,1)' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: 'rgba(0,77,167,1)' // 100% 处的颜色
                  }], false),
                  barBorderRadius: [30, 30, 30, 30],
                  shadowColor: 'rgba(0,160,221,1)',
                  shadowBlur: 4,
              }
          },
          label: {
              normal: {
                  show: true,
                  lineHeight: 30,
                  width: 80,
                  height: 30,
                  backgroundColor: 'rgba(0,160,221,0.1)',
                  borderRadius: 200,
                  position: ['-8', '-60'],
                  distance: 1,
                  formatter: [
                      '    {d|●}',
                      ' {a|{c}}     \n',
                      '    {b|}'
                  ].join(','),
                  rich: {
                      d: {
                          color: '#3CDDCF',
                      },
                      a: {
                          color: '#fff',
                          align: 'center',
                      },
                      b: {
                          width: 1,
                          height: 30,
                          borderWidth: 1,
                          borderColor: '#234e6c',
                          align: 'left'
                      },
                  }
              }
          }
      }]
  };`
  },
  {
    code:  `var xData = ['数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称', '数据名称']
    var lineData = [100, 100, 100, 100, 100, 100, 100]
    var lastYearData = [3, 20, 62, 34, 55, 65, 33];
    var thisYearData = [11, 38, 23, 39, 66, 66, 79];
    var timeLineData = [1];
    let legend = ['计划', '实际'];
    var background = 'rgb(0,59,129)'; //背景 
    let textColor = "#fff";
    let lineColor = "rgba(255,255,255,0.2)";
    let colors = [{
        borderColor: "rgba(255,171,97,1)",
        start: "rgba(255,171,97,1)",
        end: "rgba(255,171,97,0.3)"
    },
    {
        borderColor: "rgba(114,210,76,1)",
        start: "rgba(114,210,76,0.3)",
        end: "rgba(114,210,76,1)"
    },
    ];
    
    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 5,
                // itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 20,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '51%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '2%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
    
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding: [30, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    },
                    align: "center"
    
                },
                data: xData.map(function (value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
    
                },
                data: xData
            }],
            series: []
    
        },
        options: []
    }
    
    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [{
            name: "计划",
            type: "bar",
            barWidth: 25,
            stack: "1",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colors[0].start
                    },
                    {
                        offset: 1,
                        color: colors[0].end
                    }
                    ]),
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: lastYearData,
            animationEasing: "elasticOut"
        },
        {
            name: "实际",
            type: "bar",
            stack: "2",
            barWidth: 25,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colors[1].start
                    },
                    {
                        offset: 1,
                        color: colors[1].end
                    }
                    ]),
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: thisYearData,
            animationEasing: "elasticOut"
        }
        ]
    });`
  },
  {
    code: `let chartdata = [
      [7777.77, 6666.66, 5555.55, 4444.44, 3333.33, 2222.22, 1111.11],
      ["泰州市", "海陵区", "高港区", "姜堰区", "兴化市", "靖江市", "泰兴市"],
    ];
    
    var getmydmc = chartdata[1]; //地区
    var getmyd = chartdata[0]; //规模
    var getmydzd = [];
    
    let big = 0;
    getmyd.forEach((el) => {
      if (!(el === undefined || el === "")) {
        if (big < Number(el)) {
          big = Number(el);
        }
      }
    });
    for (let i = 0; i < getmyd.length; i++) {
      getmydzd.push(big * 4);
    }
    //计算最大值
    function calMax(arr) {
      let max = 0;
      arr.forEach((el) => {
        el.forEach((el1) => {
          if (!(el1 === undefined || el1 === "")) {
            if (max < Number(el1)) {
              max = Number(el1);
            }
          }
        });
      });
      let maxint = Math.ceil(max / 9.5);
      //不让最高的值超过最上面的刻度
      let maxval = maxint * 10;
      //让显示的刻度是整数
      return maxval;
    }
    
    var max = Math.ceil(calMax([getmyd]) / 10) * 10;
    option = {
      backgroundColor: '#111b41',
      grid: {
        left: "2%",
        right: "3%",
        bottom: "5%",
        top: "1%",
        containLabel: true,
      },
      tooltip: {
        formatter: (params) => {
          if (params.name !== "") {
            return params.name + " : " + getmyd[params.dataIndex] + '万亩';
          }
        },
        textStyle: {
          align: "left",
        },
      },
      xAxis: [
        {
          type: "value",
          axisLabel: {
            show: false
          },
          min: 0,
          max: max,
          interval: max / 5,
          splitNumber: 5,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "value",
          axisLabel: {
            show: false
          },
          min: 0,
          max: max, // 计算最大值
          interval: max / 10, //  平均分为5份
          splitNumber: 10,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        },
      ],
      yAxis: [
        {
          type: "category",
          axisLabel: {
            formatter: (value, index) => {
              if (value.length >= 12) {
                value = value.slice(0, 12) + '\\n' + value.slice(12);
              }
              if (value.length >= 26) {
                value = value.slice(0, 26) + '\\n' + value.slice(26);
              }
              return value;
            },
            textStyle: {
              color: "#bab9ce",
              fontSize: "12",
              align: "right",
              lineHeight: 18,
            },
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: getmydmc,
        },
        {
          type: "category",
          data: getmyd,
          axisLabel: {
            formatter: (value, index) => {
              if (value.length >= 12) {
                value = value.slice(0, 12) + '\\n' + value.slice(12);
              }
              if (value.length >= 26) {
                value = value.slice(0, 26) + '\\n' + value.slice(26);
              }
              return value + ' 万亩';
            },
            textStyle: {
              color: "#6ed4ff",
              fontSize: "14",
              fontFamily: 'impact',
              lineHeight: 24,
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
        },
      ],
      dataZoom: [
        {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 100,
          orient: "vertical",
          zlevel: 66,
        },
      ],
      series: [
        {
          name: "值",
          type: "bar",
          xAxisIndex: 0,
          itemStyle: {
            normal: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: "#193d9d", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#328eff", // 100% 处的颜色
                  },
                ],
              },
            },
          },
          barWidth: 15,
          data: getmyd,
          z: 0,
        },
        {
          // 分隔
          type: "pictorialBar",
          itemStyle: {
            normal: {
              color: "#131c41",
            },
          },
          symbolRepeat: "fixed",
          symbolMargin: 2,
          symbol: "rect",
          symbolClip: true,
          symbolSize: [2, 15],
          symbolPosition: "start",
          symbolOffset: [-1, 0],
          data: getmydzd,
          z: 66,
          animationEasing: "elasticOut",
        },
        {
          name: "背景",
          type: "bar",
          barWidth: 15,
          barGap: "-100%",
          xAxisIndex: 1,
          data: getmydzd,
          itemStyle: {
            normal: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(24,144,255,0.3)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(99,180,255,0.3)", // 100% 处的颜色
                  },
                ],
              },
            },
          },
          z: 0,
        }
      ]
    }`
  },
  {
    code: `option = {
      backgroundColor: '#111b41',
      title: {
        subtext: '单位：万亩',
        left: '5%',
        top: '-3%',
        subtextStyle: {
          fontSize: 12,
          color: "#b5b2c8"
        }
      },
      grid: {
        top: '5%',
        left: '1%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
      },
      legend: {
        top: '-1%',
        right: '2%',
        textStyle: {
          color: '#fff',
        }
      },
      xAxis: {
        type: 'category',
        data: [
          "泰州市",
          "海陵区",
          "高港区",
          "姜堰区",
          "兴化市",
          "靖江市",
          "泰兴市"
        ],
        axisLabel: {//坐标轴文本标签
          show: true,//控制显示与否
          margin: 10,
          textStyle: {
            color: '#b5b2c8',  //更改坐标轴文字颜色
            fontSize: 12
          }
        },
        axisTick: {//展示刻度线
          show: false
        },
        axisLine: {//展示坐标线
          show: true,
          lineStyle: {
            color: '#b5b2c8'  //坐标线颜色
          }
        },
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
        min: 0,
        max: 3500,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#424863'
          }
        },
        axisLabel: {//坐标轴文本标签
          show: true,//控制显示与否
          textStyle: {
            color: '#b5b2c8',  //更改坐标轴文字颜色
            fontSize: 12      //更改坐标轴文字大小
          }
        },
        axisTick: {//展示刻度线
          show: false
        },
        axisLine: {//展示坐标线
          show: true,
          lineStyle: {
            color: '#b5b2c8'  //坐标线颜色
          }
        }
      },
      series: [
        {
          name: '外业巡查地块',
          type: 'bar',
          yAxisIndex: 0,
          barWidth: 16,
          symbol: 'triangle',
          tooltip: {
            valueFormatter: function (value) {
              return value + '公顷';
            }
          },
          data: [2500, 2300, 2900, 1200, 1860, 3280, 2250],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                1, 1, 1, 0,
                [
                  { offset: 0, color: '#3a3982' }, //渐变头部色
                  { offset: 0.96, color: '#3a3982' },
                  { offset: 0.97, color: '#7a6af5' },
                  { offset: 1, color: '#7a6af5' }
                ]
              )
            }
          }
        },
        {
          name: '慧眼巡查地块',
          type: 'bar',
          yAxisIndex: 0,
          barWidth: 16,
          symbol: 'triangle',
          tooltip: {
            valueFormatter: function (value) {
              return value + '公顷';
            }
          },
          data: [1600, 1000, 2200, 2960, 3080, 2136, 1989],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                1, 1, 1, 0,
                [
                  { offset: 0, color: '#24555a' }, //渐变头部色
                  { offset: 0.96, color: '#24555a' },
                  { offset: 0.97, color: '#55eeba' },
                  { offset: 1, color: '#55eeba' }
                ]
              )
            }
          }
        }
      ]
    };`
  },
  {
    code: `var CubeLeft = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        var xAxisPoint = shape.xAxisPoint;
        var c0 = [shape.x, shape.y];
        var c1 = [shape.x - 9, shape.y - 9];
        var c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
        var c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx
          .moveTo(c0[0], c0[1])
          .lineTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .closePath();
      },
    });
    var CubeRight = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        var xAxisPoint = shape.xAxisPoint;
        var c1 = [shape.x, shape.y];
        var c2 = [xAxisPoint[0], xAxisPoint[1]];
        var c3 = [xAxisPoint[0] + 12, xAxisPoint[1] - 6];
        var c4 = [shape.x + 12, shape.y - 6];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    var CubeTop = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        var c1 = [shape.x, shape.y];
        var c2 = [shape.x + 12, shape.y - 6];
        var c3 = [shape.x + 3, shape.y - 15];
        var c4 = [shape.x - 9, shape.y - 9];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    echarts.graphic.registerShape("CubeLeft", CubeLeft);
    echarts.graphic.registerShape("CubeRight", CubeRight);
    echarts.graphic.registerShape("CubeTop", CubeTop);
    var MAX = [
      33000, 33000, 33000, 33000, 33000, 33000, 33000
    ];
    var VALUE = [
      9999, 14460, 15000, 21990, 14000, 17800, 19990
    ];
    option = {
      backgroundColor: '#111b41',
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params, ticket, callback) {
          var item = params[1];
          return item.name + " : " + item.value;
        },
      },
      title: {
        subtext: '单位：万亩',
        left: '6%',
        top: '-3%',
        subtextStyle: {
          fontSize: '12',
          color: "#b5b2c8"
        }
      },
      grid: {
        left: '1%',
        right: '3%',
        bottom: '3%',
        top: '5%',
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "泰州市",
          "海陵区",
          "高港区",
          "姜堰区",
          "兴化市",
          "靖江市",
          "泰兴市"
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#b5b2c8",
          },
        },
        axisTick: {
          show: false,
          length: 9,
          alignWithLabel: true,
          lineStyle: {
            color: "#000",
          },
        },
        axisLabel: {
          show: true,
          fontSize: 12,
          margin: 10,
          textStyle: {
            color: '#b5b2c8'
          }
        }
      },
      yAxis: {
        boundaryGap: [0, 0.1],
        type: "value",
        min: 0,
        max: 35000,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#b5b2c8",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#424863"
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          fontSize: 12,
        },
        boundaryGap: ["10%", "10%"],
      },
      series: [
        {
          type: "custom",
          renderItem: function (params, api) {
            var location = api.coord([api.value(0), api.value(1)]);
            return {
              type: "group",
              children: [
                {
                  type: "CubeLeft",
                  shape: {
                    api,
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: "rgba(47,102,192,.27)",
                  },
                },
                {
                  type: "CubeRight",
                  shape: {
                    api,
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: "rgba(59,128,226,.27)",
                  },
                },
                {
                  type: "CubeTop",
                  shape: {
                    api,
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: "rgba(72,156,221,.27)",
                  },
                },
              ],
            };
          },
          data: MAX,
        },
        {
          type: "custom",
          renderItem: (params, api) => {
            var location = api.coord([api.value(0), api.value(1)]);
            var color =
              api.value(1) > 33000
                ? "red"
                : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#334fc3",
                  },
                  {
                    offset: 1,
                    color: "#1d3ac4",
                  },
                ]);
            return {
              type: "group",
              children: [
                {
                  type: "CubeLeft",
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: color,
                  },
                },
                {
                  type: "CubeRight",
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: color,
                  },
                },
                {
                  type: "CubeTop",
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0]),
                  },
                  style: {
                    fill: color,
                  },
                },
              ],
            };
          },
          data: VALUE,
        },
      ],
    };
    `
  },
  {
    code: `option = {
      backgroundColor: ' rgb(14, 10, 46)',
      color: ['#94d078', '#73bfdd', '#fac858', '#ef6666'],
      tooltip: {
          trigger: "axis",
      },
      legend: {
          top: '3%',
          itemWidth: 12,
          itemHeight: 8,
          itemGap: 20,//间距
          textStyle: {
              color: '#b6c6cd'
          },
          data: ["居住", "经营", "闲置", "其他"],
      },
      grid: {
          top: '10%',
          left: "1%",
          right: "5%",
          bottom: "0",
          containLabel: true,
      },
      xAxis: [
          {
              type: "value",
              splitLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: "#b6c6cd"
                  }
              },
          },
      ],
      yAxis: [
          {
              type: "category",
              data: ["儒林镇", "朱林镇", "薛埠镇", "直溪镇", "指前镇", "尧塘街道", "金城镇", "东城街道", "西城街道"],
              axisLabel: {
                  show: false,
              },
              splitLine: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
          },
          {
              type: "category",
              data: [],
              axisLabel: {
                  show: false,
              },
              splitLine: {
                  show: false,
              },
              axisLine: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
          },
      ],
      series: [
          {
              name: "居住",
              type: "bar",
              stack: "总量",
              barWidth: 8,
              label: {
                  normal: {
                      show: true,
                      formatter: '{b}',
                      position: 'left',
                      align: 'left',
                      offset: [6, -12],
                      color: '#b6c6cd',
                      fontSize: '10'
                  },
              },
              itemStyle: {
                  normal: {
                      barBorderRadius: 4,
                  }
              },
              data: [320, 302, 301, 334, 390, 330, 320, 120, 240],
          },
          {
              name: "经营",
              type: "bar",
              stack: "总量",
              label: {
                  normal: {
                      show: false,
                      position: "insideRight",
                  },
              },
              itemStyle: {
                  normal: {
                      barBorderRadius: 4,
                  }
              },
              data: [120, 132, 101, 134, 90, 230, 210, 320, 120],
          },
          {
              name: "闲置",
              type: "bar",
              stack: "总量",
              label: {
                  normal: {
                      show: false,
                      position: "insideRight",
                  },
              },
              itemStyle: {
                  normal: {
                      barBorderRadius: 4,
                  }
              },
              data: [220, 182, 191, 234, 290, 330, 310, 320, 120],
          },
          {
              name: "其他",
              type: "bar",
              stack: "总量",
              label: {
                  normal: {
                      show: false,
                      position: "insideRight",
                  },
              },
              itemStyle: {
                  normal: {
                      barBorderRadius: 4,
                  }
              },
              data: [150, 212, 201, 154, 190, 330, 410, 320, 120],
          },
          {
              type: "bar",
              yAxisIndex: 1,
              data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
              barWidth: "8",
              z: 0,
              itemStyle: {
                  barBorderRadius: 4,
                  color: "#eeeeee",
              },
          },
  
      ]
  };`
  },
  {
    code: `option = {
    backgroundColor: ' rgb(14, 10, 46)',
	    color: ["#b49d61", "#ad435c", "#3868c5", "#8793a5"],
	    title: {
	        text: "",
	        show: false
	    },
	    tooltip: {
	        trigger: "axis",
	        axisPointer: {
	            type: "shadow",
	        },
	    },
	    legend: {
	        data: ["预警", "违规", "正常", "误报"],
	        // align: "right",
	        align: "left",
	        padding: [0, 20],
	        itemGap: 48,
	        top: 0,
	        right: 0,
	        textStyle: {
	            fontWeight: 'normal',
	            color: 'white'
	        }
	    },
	    grid: {
	        top: '20',
	        left: "10",
	        right: "10",
	        bottom: "17",
	        containLabel: true,
	    },
	    xAxis: [
	        {
	            type: "category",
	            data: ["三井街道1", "三井街道2", "三井街道", "三井街道", "三井街道", "三井街道", "三井街道", "三井街道", "三井街道"],
	            axisTick: { show: false },
	            axisLabel: {
	                textStyle: { color: "#b4b3c6", fontSize: 14 },
	            },
	            axisLine: {
	                lineStyle: { color: "#e6e6e8", type: "solid" },
	            },
	        },
	    ],
	    yAxis: [
	        {
	            type: "value",
	            name: "单位：",
	            nameLocation: 'end',
	            nameTextStyle: { color: "#b6c6cd", fontSize: 14, padding: [0, 0, -10, 40] },
	            boundaryGap: [0, 0.1],
	            axisLabel: {
	                show: true,
	                fontSize: 12,
	                color: '#666',
	                textStyle: {
	                    color: "#a0a0b2", fontSize: 12
	                },
	            },
	            axisLine: {
	                show: true,
	                lineStyle: {
	                    // color: "#f6f6f6",
	                    color: "#fff",
	                },
	            },
	            splitLine: {
	                show: true,
	                lineStyle: {
	                    color: "#475667"
	                }
	            }
	        },
	    ],
	    series: [
	        {
	            name: "预警",
	            type: "bar",
	            barWidth: 10,
	            barGap: '70%',
	            data: [20000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000],
	            label: {
	                show: false,
	                fontWeight: 'normal',
	                position: 'top',
	                color: "#555"
	            },
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#e6c36c' // 0% 处的颜色
	                    }, {
	                        offset: 1,
	                        color: '#262721' // 100% 处的颜色
	                    }], false),
	                    barBorderRadius: [30, 30, 0, 0],
	                }
	            },
	        },
	        {
	            name: "违规",
	            type: "bar",
	            barWidth: 10,
	            barGap: '70%',
	            data: [9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000,],
	            label: {
	                show: false,
	                fontWeight: 'normal',
	                position: 'top',
	                color: "#555"
	            },
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#b83248' // 0% 处的颜色
	                    }, {
	                        offset: 1,
	                        color: '#1e1a1d' // 100% 处的颜色
	                    }], false),
	                    barBorderRadius: [30, 30, 0, 0],
	                }
	            },
	        },
	        {
	            name: "正常",
	            type: "bar",
	            barWidth: 10,
	            barGap: '70%',
	            data: [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000],
	            label: {
	                show: false,
	                fontWeight: 'normal',
	                position: 'top',
	                color: "#555"
	            },
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#339fb7' // 0% 处的颜色
	                    }, {
	                        offset: 1,
	                        color: '#0f1b1b' // 100% 处的颜色
	                    }], false),
	                    barBorderRadius: [30, 30, 0, 0],
	                }
	            },
	        },
	        {
	            name: "误报",
	            type: "bar",
	            barWidth: 10,
	            barGap: '70%',
	            data: [16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000, 16000],
	            label: {
	                show: false,
	                fontWeight: 'normal',
	                position: 'top',
	                color: "#555"
	            },
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#888888' // 0% 处的颜色
	                    }, {
	                        offset: 1,
	                        color: '#111919' // 100% 处的颜色
	                    }], false),
	                    barBorderRadius: [30, 30, 0, 0],
	                }
	            },
	        },
	
	    ],
	};`
  }
]
barDemoJS.forEach(v => {
  v.id = genId()
})
export default barDemoJS  