import genId from './random.js'
let lineDemoJS = [
    {
        code: `const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
        option = {
            backgroundColor: '#fff',
            title: {
                text: '全国6月销售统计',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 400
                },
                left: 'center',
                top: '5%'
            },
            legend: {
                icon: 'circle',
                top: '5%',
                right: '5%',
                itemWidth: 6,
                itemGap: 20,
                textStyle: {
                    color: '#556677'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    label: {
                        show: true,
                        backgroundColor: '#fff',
                        color: '#556677',
                        borderColor: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetY: 0
                    },
                    lineStyle: {
                        width: 0
                    }
                },
                backgroundColor: '#fff',
                textStyle: {
                    color: '#5c6c7c'
                },
                padding: [10, 10],
                extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
            },
            grid: {
                top: '15%'
            },
            xAxis: [{
                type: 'category',
                data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
                axisLine: {
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#556677'
                    },
                    // 默认x轴字体大小
                    fontSize: 12,
                    // margin:文字到x轴的距离
                    margin: 15
                },
                axisPointer: {
                    label: {
                        // padding: [11, 5, 7],
                        padding: [0, 0, 10, 0],
                        /*
            除了padding[0]建议必须是0之外，其他三项可随意设置
            
            和CSSpadding相同，[上，右，下，左]
            
            如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同
            
            padding[2]的10:
            
            10 = 文字距下边线的距离 + 下边线的宽度
                        
            如：UI图中文字距下边线距离为7 下边线宽度为2
            
            则padding: [0, 0, 9, 0]
                        
                        */
                        // 这里的margin和axisLabel的margin要一致!
                        margin: 15,
                        // 移入时的字体大小
                        fontSize: 12,
                        backgroundColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#fff' // 0% 处的颜色
                            }, {
                                // offset: 0.9,
                                offset: 0.86,
                                /*
        0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                                
                                */
                                color: '#fff' // 0% 处的颜色
                            }, {
                                offset: 0.86,
                                color: '#33c0cd' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#33c0cd' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                type: 'value',
                position: 'right',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#556677'
                    },
                    formatter: '{value}'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#DCE2E8'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                    name: 'Adidas',
                    type: 'line',
                    data: [10, 10, 30, 12, 15, 3, 7],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#9effff'
                            },
                            {
                                offset: 1,
                                color: '#9E87FF'
                            }
                        ]),
                        shadowColor: 'rgba(158,135,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[0],
                            borderColor: colorList[0]
                        }
                    }
                }, {
                    name: 'Nike',
                    type: 'line',
                    data: [5, 12, 11, 14, 25, 16, 10],
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                                offset: 0,
                                color: '#73DD39'
                            },
                            {
                                offset: 1,
                                color: '#73DDFF'
                            }
                        ]),
                        shadowColor: 'rgba(115,221,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[1],
                            borderColor: colorList[1]
                        }
                    }
                },
                {
                    name: '老北京布鞋',
                    type: 'line',
                    data: [150, 120, 170, 140, 500, 160, 110],
                    symbolSize: 1,
                    yAxisIndex: 1,
                    symbol: 'circle',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#fe9a8b'
                            },
                            {
                                offset: 1,
                                color: '#fe9a8b'
                            }
                        ]),
                        shadowColor: 'rgba(254,154,139, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: colorList[2],
                            borderColor: colorList[2]
                        }
                    }
                }
            ]
        };`
    },
    {
        code: `var option = {
            grid: {
              left: 40,
              right: 25,
              bottom: 36,
              top: 40
            },
            title: {
              show: false,
              subtext: '单位：份',
              left: 50,
              top: 7,
              subtextStyle: {
                fontSize: 12,
                color: "#7e7e7e"
              }
            },
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
            xAxis: [
              {
                boundaryGap: false,
                data: ["1月",
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
                  "12月"],
                nameTextStyle: {
                  color: "#000"
                },
                axisLine: {
                  lineStyle: {
                    color: "#000"
                  }
                },
                type: "category",
                axisTick: { show: false },
                axisLabel: {
                  textStyle: { color: "#707070", fontSize: 12 },
                },
                axisLine: {
                  lineStyle: { color: "#e6e6e8", type: "solid" },
                },
              }
            ],
            yAxis: [
              {
                nameLocation: 'end',
                name: "单位：份",
                boundaryGap: [0, 0.1],
                nameTextStyle: {
                  color: "#7e7e7e",
                  fontSize: 12,
                  padding: [0, 0, -10, 80]
                },
                type: "value",
                min: 0,
                max: 200,
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#7e7e7e",
                  },
                },
                splitLine: {
                  show: true,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: true,
                  fontSize: 12,
                },
                boundaryGap: ["10%", "10%"],
              }
            ],
            series: [{
              type: 'line',
              symbolSize: 0,
              itemStyle: {
                color: '#b58ee1'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#b58ee1'
                  },
                  {
                    offset: 1,
                    color: 'white'
                  }
                ])
              },
              data: [140, 175, 155, 160, 155, 175, 40, 125, 145, 125, 175, 175],
            }]
          };`
    },
    {
        code: `var option = {
            color: ["#2e6aea"],
            title: {
                show: false,
                text: "全市订签订出让合同统计",
                x: "left",
                top: "10%",
                textStyle: { color: "#2D527C", fontSize: "16", fontWeight: "bold" },
            },
            legend: {
                show: false,
                top: "14%",
            },
            grid: {
                left: 10,
                right: 13,
                top: 40,
                bottom: 16,
                containLabel: true,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            xAxis: {
                axisTick: { show: false },
                axisLabel: {
                    textStyle: { color: "#707070", fontSize: 12 },
                },
                axisLine: {
                    lineStyle: { color: "#e6e6e8", type: "solid" },
                },
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            },
            yAxis: {
                nameLocation: 'end',
                name: "单位：份",
                nameTextStyle: { color: "#7e7e7e", fontSize: 12, padding: [0, 0, -10, 80] },
                boundaryGap: [0, 0.1],
                type: 'value',
                max: 200,
                axisLabel: {
                    show: true,
                    fontSize: 12,
                    color: '#707070',
                    textStyle: { color: "#7e7e7e", fontSize: 12 },
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
            series: [
                {
                    name: "份数",
                    type: "line",
                    symbolSize: 16,
                    data: [130, 120, 120, 70, 125, 180, 125, 125, 90, 110, 125, 120],
                }
            ],
        };
        `
    },
    {
        code: `option = {
            backgroundColor: 'rgb(27,68,103)',
            color: ["#6c8ce7", "#3981f0", "#3ad2fe", "#deb96a", "#de7d6a"],
            tooltip: {
                trigger: "axis",
            },
            legend: [
                {
                    orient: "vertical",
                    icon: "rect",
                    data: ["出口1", "出口4"],
                    itemWidth: 18,
                    itemHeight: 12,
                    top: "2%",
                    left: "5%",
                    textStyle: {
                        color: "#869eb1",
                    },
                },
                {
                    orient: "vertical",
                    icon: "rect",
                    data: ["出口2", "出口5"],
                    itemWidth: 18,
                    itemHeight: 12,
                    top: "2%",
                    left: "40%",
                    textStyle: {
                        color: "#869eb1",
                    },
                },
                {
                    orient: "vertical",
                    icon: "rect",
                    data: ["出口3"],
                    itemWidth: 18,
                    itemHeight: 12,
                    top: "2%",
                    right: "5%",
                    textStyle: {
                        color: "#869eb1",
                    },
                },
            ],
            grid: {
                top: "26%",
                left: "3%",
                right: "3%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: [
                {
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        interval: 1,
                        textStyle: {
                            color: "#97a5ae",
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#364d7f",
                        },
                    },
                    type: "category",
                    data: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                    ],
                },
            ],
            yAxis: [
                {
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#364d7f",
                        },
                    },
                    type: "value",
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#97a5ae",
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                },
            ],
            series: [
                {
                    name: "出口1",
                    type: "line",
                    //				      	symbol: "circle",
                    symbol: "none",
                    showAllSymbol: true,
                    //				      	symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: "#6c8ce7",
                            lineStyle: {
                                color: "#6c8ce7",
                                width: 2,
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: "rgba(108,140,231,0)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(108,140,231,0.8)",
                                    },
                                ]),
                            },
                        },
                    },
                    //				      	label: {
                    //				          	show: true
                    //				      	},
                    data: [
                        2.2, 2.4, 2.8, 2.65, 2.5, 2.2, 2.95, 2.65, 2.7, 2.6, 2.75, 2.15,
                        2.5, 2.4, 2.2, 2.75, 2.75, 2.4, 2.5, 2.55, 2.45, 2.4, 2.7, 2.95,
                        2.65, 2.85, 2.9, 2.65, 2.65, 2.65, 2.75, 2.55, 2.35,
                    ],
                },
                {
                    name: "出口2",
                    type: "line",
                    symbol: "none",
                    showAllSymbol: true,
                    itemStyle: {
                        normal: {
                            color: "#3981f0",
                            lineStyle: {
                                color: "#3981f0",
                                width: 2,
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: "rgba(57,129,240,0)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(57,129,240,0.8)",
                                    },
                                ]),
                            },
                        },
                    },
                    data: [
                        1.8, 2.2, 1.8, 1.75, 2.2, 1.9, 2.05, 2, 2.1, 2.2, 2.05, 2.05, 2.1,
                        2.1, 2, 2.05, 2.05, 2.1, 2.2, 2.15, 2.35, 2.3, 2.2, 2.25, 2.35,
                        2.4, 2.2, 2.25, 2.25, 2.4, 2.2, 2.25, 1.95,
                    ],
                },
                {
                    name: "出口3",
                    type: "line",
                    symbol: "none",
                    showAllSymbol: true,
                    itemStyle: {
                        normal: {
                            color: "#3ad2fe",
                            lineStyle: {
                                color: "#3ad2fe",
                                width: 2,
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: "rgba(58,210,254,0)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(58,210,254,0.8)",
                                    },
                                ]),
                            },
                        },
                    },
                    data: [
                        1.4, 1.7, 1.7, 1.65, 1.8, 1.7, 1.85, 1.85, 1.9, 1.8, 1.95, 1.75,
                        1.9, 1.9, 1.8, 1.95, 1.85, 1.9, 2, 2.05, 1.75, 1.9, 1.6, 2.15,
                        1.75, 2.1, 1.8, 2.05, 1.65, 1.5, 1.8, 2.15, 1.95,
                    ],
                },
                {
                    name: "出口4",
                    type: "line",
                    symbol: "none",
                    showAllSymbol: true,
                    itemStyle: {
                        normal: {
                            color: "#deb96a",
                            lineStyle: {
                                color: "#deb96a",
                                width: 2,
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: "rgba(222,185,106,0)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(222,185,106,0.8)",
                                    },
                                ]),
                            },
                        },
                    },
                    data: [
                        0.8, 0.9, 1.3, 1.25, 1.2, 1.3, 1.4, 1.25, 1.3, 1.1, 1.05, 1.25,
                        1.4, 1.3, 1.2, 1.25, 1.25, 1.5, 1.4, 1.15, 1.25, 1.2, 1.1, 1.35,
                        1.45, 1.6, 1.5, 1.15, 0.95, 1.4, 0.9, 1.65, 1.15,
                    ],
                },
                {
                    name: "出口5",
                    type: "line",
                    symbol: "none",
                    showAllSymbol: true,
                    itemStyle: {
                        normal: {
                            color: "#de7d6a",
                            lineStyle: {
                                color: "#de7d6a",
                                width: 2,
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: "rgba(222,125,106,0)",
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(222,125,106,0.8)",
                                    },
                                ]),
                            },
                        },
                    },
                    data: [
                        0.8, 0.6, 1, 0.65, 1, 0.8, 0.95, 0.75, 1, 0.6, 0.95, 0.75, 1, 0.7,
                        0.9, 0.85, 0.95, 1, 0.9, 1, 1, 1, 1, 0.85, 0.75, 0.6, 0.8, 0.95,
                        0.75, 0.7, 0.6, 0.85, 0.95,
                    ],
                },
            ],
        };`
    },
    {
        code: `option = {
            color: ["#6c8ce7", "#3981f0", "#3ad2fe", "#deb96a", "#de7d6a"],
            tooltip: {
              trigger: "axis",
            },
            legend: [
              {
                orient: "vertical",
                icon: "rect",
                data: ["出口1", "出口4"],
                itemWidth: 18,
                itemHeight: 12,
                top: "2%",
                left: "5%",
                textStyle: {
                  color: "#869eb1",
                },
              },
              {
                orient: "vertical",
                icon: "rect",
                data: ["出口2", "出口5"],
                itemWidth: 18,
                itemHeight: 12,
                top: "2%",
                left: "40%",
                textStyle: {
                  color: "#869eb1",
                },
              },
              {
                orient: "vertical",
                icon: "rect",
                data: ["出口3"],
                itemWidth: 18,
                itemHeight: 12,
                top: "2%",
                right: "5%",
                textStyle: {
                  color: "#869eb1",
                },
              },
            ],
            grid: {
              top: "26%",
              left: "3%",
              right: "3%",
              bottom: "3%",
              containLabel: true,
            },
            xAxis: [
              {
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: true,
                  interval: 1,
                  textStyle: {
                    color: "#97a5ae",
                  },
                },
                axisLine: {
                  lineStyle: {
                    color: "#364d7f",
                  },
                },
                type: "category",
                data: [
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                ],
              },
            ],
            yAxis: [
              {
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: "#364d7f",
                  },
                },
                type: "value",
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#97a5ae",
                  },
                },
                axisTick: {
                  show: false,
                },
                axisLine: {
                  show: false,
                },
              },
            ],
            series: [
              {
                name: "出口1",
                type: "line",
                //				      	symbol: "circle",
                symbol: "none",
                showAllSymbol: true,
                //				      	symbolSize: 8,
                itemStyle: {
                  normal: {
                    color: "#6c8ce7",
                    lineStyle: {
                      color: "#6c8ce7",
                      width: 2,
                    },
                  },
                },
                //				      	label: {
                //				          	show: true
                //				      	},
                data: [
                  2.2, 2.4, 2.8, 2.65, 2.5, 2.2, 2.95, 2.65, 2.7, 2.6, 2.75, 2.15,
                  2.5, 2.4, 2.2, 2.75, 2.75, 2.4, 2.5, 2.55, 2.45, 2.4, 2.7, 2.95,
                  2.65, 2.85, 2.9, 2.65, 2.65, 2.65, 2.75, 2.55, 2.35,
                ],
              },
              {
                name: "出口2",
                type: "line",
                symbol: "none",
                showAllSymbol: true,
                itemStyle: {
                  normal: {
                    color: "#3981f0",
                    lineStyle: {
                      color: "#3981f0",
                      width: 2,
                    },
                  },
                },
                data: [
                  1.8, 2.2, 1.8, 1.75, 2.2, 1.9, 2.05, 2, 2.1, 2.2, 2.05, 2.05, 2.1,
                  2.1, 2, 2.05, 2.05, 2.1, 2.2, 2.15, 2.35, 2.3, 2.2, 2.25, 2.35,
                  2.4, 2.2, 2.25, 2.25, 2.4, 2.2, 2.25, 1.95,
                ],
              },
              {
                name: "出口3",
                type: "line",
                symbol: "none",
                showAllSymbol: true,
                itemStyle: {
                  normal: {
                    color: "#3ad2fe",
                    lineStyle: {
                      color: "#3ad2fe",
                      width: 2,
                    },
                  },
                },
                data: [
                  1.4, 1.7, 1.7, 1.65, 1.8, 1.7, 1.85, 1.85, 1.9, 1.8, 1.95, 1.75,
                  1.9, 1.9, 1.8, 1.95, 1.85, 1.9, 2, 2.05, 1.75, 1.9, 1.6, 2.15,
                  1.75, 2.1, 1.8, 2.05, 1.65, 1.5, 1.8, 2.15, 1.95,
                ],
              },
              {
                name: "出口4",
                type: "line",
                symbol: "none",
                showAllSymbol: true,
                itemStyle: {
                  normal: {
                    color: "#deb96a",
                    lineStyle: {
                      color: "#deb96a",
                      width: 2,
                    },
                  },
                },
                data: [
                  0.8, 0.9, 1.3, 1.25, 1.2, 1.3, 1.4, 1.25, 1.3, 1.1, 1.05, 1.25,
                  1.4, 1.3, 1.2, 1.25, 1.25, 1.5, 1.4, 1.15, 1.25, 1.2, 1.1, 1.35,
                  1.45, 1.6, 1.5, 1.15, 0.95, 1.4, 0.9, 1.65, 1.15,
                ],
              },
              {
                name: "出口5",
                type: "line",
                symbol: "none",
                showAllSymbol: true,
                itemStyle: {
                  normal: {
                    color: "#de7d6a",
                    lineStyle: {
                      color: "#de7d6a",
                      width: 2,
                    },
                  },
                },
                data: [
                  0.8, 0.6, 1, 0.65, 1, 0.8, 0.95, 0.75, 1, 0.6, 0.95, 0.75, 1, 0.7,
                  0.9, 0.85, 0.95, 1, 0.9, 1, 1, 1, 1, 0.85, 0.75, 0.6, 0.8, 0.95,
                  0.75, 0.7, 0.6, 0.85, 0.95,
                ],
              },
            ],
          };`
    },
    {
        code: `option = {
          backgroundColor: 'rgb(0,59,129)',
            grid: {
              left: '14%',
              right: '3%',
              top: '15%',
              bottom: '10%',
            },
            color: ["#ffb500", "#fff"],
            xAxis: [
              {
                boundaryGap: true,
                data: ["2018", "2019", "2020", "2021", "2022"],
                axisLine: {
                  lineStyle: {
                    color: "#000"
                  }
                },
                type: "category",
                axisTick: { show: false },
                axisLabel: {
                  textStyle: { color: "#fff", fontSize: 12 },
                },
                axisLine: {
                  lineStyle: { color: "#4962b3", type: "solid" },
                }
              }
            ],
            yAxis: [
              {
                type: "value",
                min: 0,
                max: 1000,
                axisLabel: {
                  show: true,
                  fontSize: 12,
                  color: '#707070',
                  textStyle: { color: "#fff", fontSize: 12 },
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
                }
              },
              {
                position: 'right',
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: "#4962b3",
                  },
                }
              }
            ],
            series: [{
              type: 'line',
              symbolSize: 0,
              itemStyle: {
                color: '#b58ee1'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#ffb500'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,0.1)'
                  }
                ])
              },
              data: [530, 220, 820, 400, 725],
            },
            {
              type: "line",
              symbol: 'circle',
              symbolSize: 12,
              data: [530, 220, 820, 400, 725],
            }]
          };`
    },
    {
        code: `option = {
            backgroundColor: 'rgb(0,59,129)',
            color: ['#28b1ff', '#2856ff', '#ffb500'],
            legend: {
              show: true,
              itemGap: 25,
              orient: 'horizontal',
              top: '3%',
              textStyle: {
                color: '#fff',
                fontSize: 12,
                padding: [0, 0, 0, 5]
              }
            },
            grid: {
              left: '14%',
              right: '3%',
              top: '15%',
              bottom: '10%',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            xAxis: {
              axisTick: { show: false },
              axisLabel: {
                textStyle: { color: "#fff", fontSize: 12 },
              },
              axisLine: {
                lineStyle: { color: "#4962b3", type: "solid" },
              },
              data: ["2018", "2019", "2020", "2021", "2022"],
            },
            yAxis: [{
              type: 'value',
              max: 1000,
              axisLabel: {
                show: true,
                fontSize: 12,
                color: '#707070',
                textStyle: { color: "#fff", fontSize: 12 },
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
              }
            }, {
              position: 'right',
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#4962b3",
                },
              }
            }],
            series: [
              {
                name: "转让",
                type: "line",
                symbol: 'circle',
                symbolSize: 12,
                data: [530, 220, 820, 400, 725],
              },
              {
                name: "出租",
                type: "line",
                symbol: 'circle',
                symbolSize: 12,
                data: [430, 320, 720, 60, 425],
              },
              {
                name: "抵押",
                type: "line",
                symbol: 'circle',
                symbolSize: 12,
                data: [330, 720, 420, 860, 925],
              }
            ],
          };
          `
    },
    {
      code: `option = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['行政审批', '会议系统', '知识管理', '系统运维'],
    axisLine: {
      lineStyle: {
        color: '#e4e4e4'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#333'
    },
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#e4e4e4'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#333'
    }
  },
  grid: {
    top: 25,
    bottom: 15,
    left: '3%',
    right: '9%',
    containLabel: true
  },
  series: [
    {
      data: [932, 620, 1000, 500],
      type: 'line',
      smooth: true,
      symbolSize: 0,//拐点大小
      color: '#266ef3',
      itemStyle: {
        normal: {
          areaStyle: {        // 系列级个性化折线样式
            width: 4,
            type: 'solid',
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#ffffff'
            }, {
              offset: 1,
              color: '#cce5ff'
            }]),//线条渐变色
          }
        }
      }
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
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
    
        grid: {
            top: 50,
            bottom: 15,
            left: '3%',
            right: '3%',
            containLabel: true
        },
        legend: {
            data: ['金额', '面积'],
            icon: 'rect',
            itemWidth: 12,
            itemHeight: 12,
            top: 16,
            // itemStyle:{
            //     color:'#f00'
            // },
            itemGap: 70
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                    type: 'shadow'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#e4e4e4'
                    }
                },
                axisLabel: {
                    color: '#333'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：万元',
                interval: 500,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e4e4e4'
                    }
                },
                axisLabel: {
                    color: '#333'
                },
                nameTextStyle: {
                    color: '#333',
                    align: 'left'
                }
            },
            {
                type: 'value',
                name: '单位：m²',
                interval: 500,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#e4e4e4'
                    }
                },
                axisLabel: {
                    color: '#333'
                },
                nameTextStyle: {
                    color: '#333',
                    align: 'right'
                }
            }
        ],
        series: [
            {
                name: '金额',
                type: 'bar',
                data: [
                    200.0, 400.9, 700.0, 203.2, 1250.6, 1706.7, 135.6
                ],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#bdc6fc'
                        }, {
                            offset: 1,
                            color: '#8394fa'
                        }]),
                    }
                },
                barWidth: '30%'
            },
            {
                name: '面积',
                type: 'line',
                color: '#f5944c',
                yAxisIndex: 1,
                data: [322.0, 642.2, 433.3, 243.5, 633.3, 1033.2, 540.3],
                symbolSize: 0,//拐点大小
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#f5944c',
                            type: 'solid',
                            width: 3
                        }
                    }
                }
            }
        ]
    };
    `
    },
    {
      code: `option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                lineStyle: {
                    color: '#e4e4e4'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#333'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#e4e4e4'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#333'
            }
        },
        grid: {
            top: 15,
            bottom: 15,
            left: '2%',
            right: '3%',
            containLabel: true
        },
        series: [
            {
                data: [434, 3234, 322, 532, 652, 323, 543, 1044, 123, 323, 432, 324],
                type: 'line',
                color: '#74dcd8',
                symbolSize: 0,//拐点大小
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3,
                            type: 'solid'
                        }
                    }
                }
            },
            {
                data: [932, 620, 1000, 500, 1100, 323, 543, 1344, 3323, 1212, 3212, 921],
                type: 'line',
                symbolSize: 0,
                color: '#b58ee1',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3,
                            type: 'solid'
                        }
                    }
                }
            }
        ]
    };
    `
    },
    {
      code: `option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['行政审批', '会议系统', '知识管理', '公共资产管理', '系统运维与优化'],
            axisLine: {
                lineStyle: {
                    color: '#e4e4e4'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#333'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#e4e4e4'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#333'
            }
        },
        grid: {
            top: 15,
            bottom: 15,
            left: '2%',
            right: '3%',
            containLabel: true
        },
        series: [
            {
                data: [932, 620, 1000, 500, 1100],
                type: 'line',
                smooth: true,
                symbolSize: 0,//拐点大小
                itemStyle: {
                    normal: {
    
                        lineStyle: {        // 系列级个性化折线样式
                            width: 4,
                            type: 'solid',
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#5be2ff'
                            }, {
                                offset: 0.5,
                                color: '#5a9bf8'
                            }, {
                                offset: 1,
                                color: '#6369ed'
                            }]),//线条渐变色
                        }
                    }
                }
            }
        ]
    };
    `
    },
    {
      code: `option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
    
        grid: {
            bottom: 15,
            top: 20,
            right: 5,
            left: 15,
            containLabel: true
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                color: '#394b97',
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(58,77,233,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(58,77,233,0.1)'
                        }
                    ])
                },
            }
        ]
    };
    `
    },
    {
      code: `option = {
        xAxis: {
            type: 'category',
            data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#dbdbdb'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['出让面积', '出让金额'],
            itemWidth: 12,
            itemHeight: 12,
            itemStyle: {
                borderWidth: 0
            },
            icon: 'rect',
            textStyle: {
                fontSize: 14
            },
            top: '10'
        },
        grid: {
            top: 50,
            right: 10,
            left: 10,
            bottom: 20,
            containLabel: true
        },
        yAxis: [
            {
                type: 'value',
                name: '万亩'
            },
            {
                type: 'value',
                name: '亿元',
                splitLine: {
                    show: false
                }
            }
        ],
        tooltip: {
            trigger: 'axis'
        },
    
        // color: '#4f81bd',
        series: [
            {
                data: [1000, 1043, 590, 2431, 3233, 2432, 434, 1234, 3232, 2020, 1800, 1308],
                symbol: 'circle',
                symbolSize: 0,
                name: '出让面积',
                color: '#6ec9bf',
                lineStyle: {
                    color: '#6ec9bf',
                    width: 3
                },
                type: 'line'
            },
            {
                data: [9, 23, 43, 6, 16, 25, 21, 27, 34, 54, 23, 11],
                symbol: 'circle',
                symbolSize: 0,
                color: '#394d97',
                name: '出让金额',
                yAxisIndex: 1,
                lineStyle: {
                    color: '#394d97',
                    width: 3
                },
                type: 'line'
            },
        ]
    };
    `
    },
    {
      code: `option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        grid: {
            top: "5%",
            left: '3%',
            right: '8%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
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
                    color:'#333'
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
                axisLabel:{
                    color:'#333'
                }
            }
        ],
        series: [
            {
                name: '规划',
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                areaStyle: {
                    color: 'rgba(55,239,255, 0.2)'
                },
                data: [50, 60, 80, 113, 50, 60, 80, 113, 50, 60, 80, 113],
                itemStyle: {
                    color: "#19c6eb"
                }
            },
            {
                name: '耕地',
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                areaStyle: {
                    color: 'rgba(66,207,33, 0.2)'
                },
                data: [40, 50, 70, 40, 40, 50, 70, 40, 40, 50, 70, 40],
                itemStyle: {
                    color: "#4d61ec"
                }
            },
            {
                name: '利用',
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                areaStyle: {
                    color: 'rgba(243,158,39, 0.2)'
                },
                data: [10, 10, 24, 14, 10, 10, 24, 14, 10, 10, 24, 14],
                itemStyle: {
                    color: "#feaa29"
                }
            },
            {
                name: '未知',
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                areaStyle: {
                    color: 'rgba(243,158,39, 0.2)'
                },
                data: [15, 15, 34, 24, 15, 10, 34, 14, 20, 20, 24, 14],
                itemStyle: {
                    color: "#50b840"
                }
            }
        ]
    };`
    },
    {
      code: `option = {
        backgroundColor: 'rgb(21,43,78)',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "20",
            right: "20",
            bottom: "20",
            top: "50",
            containLabel: true
        },
    
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
                nameTextStyle: {//修改坐标字体颜色
                    color: "#dadadf"
                },
                axisLabel: {
                    color: '#a7a6b8'
                },
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
    
                axisTick: {
                    show: false
                }
    
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位：（亩）（万元）',
                nameTextStyle: {//修改坐标字体颜色
                    color: "#5bb4e7",
                    align: 'left',
                    padding: [0, 8, 0, 120]
                    // left:'50'
                },
                axisLabel: {
                    color: '#a7a6b8'
                },
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                },
                axisTick: {
                    show: false
                }
            },
            {
                type: 'value',
                nameTextStyle: {//修改坐标字体颜色
                    color: "#dadadf"
                },
                axisLabel: {
                    color: '#a7a6b8'
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                },
                axisTick: {
                    show: false
                },
    
            }
        ],
        series: [
            {
                name: '违法',
                type: 'line',
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                data: [220, 150, 191, 234, 290, 240, 310],
                itemStyle: {
                    color: "#4eefde"
                }
            }, {
                name: '违法',
                type: 'line',
                yAxisIndex: 1,
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                data: [120, 182, 101, 134, 150, 300, 200],
                itemStyle: {
                    color: "#e4306f"
                }
            }
        ]
    }`
    },
    {
      code: `option = {
        backgroundColor: 'rgb(21,43,78)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: "20",
          right: "20",
          bottom: "20",
          top: "50",
          containLabel: true
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
            data: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
            nameTextStyle: {//修改坐标字体颜色
              color: "#dadadf"
            },
            axisLabel: {
              color: '#a7a6b8'
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
      
            axisTick: {
              show: false
            }
      
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位：（亩）（万元）',
            nameTextStyle: {//修改坐标字体颜色
              color: "#5bb4e7",
              align: 'left',
              padding: [0, 8, 0, 120]
              // left:'50'
            },
            axisLabel: {
              color: '#a7a6b8'
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisTick: {
              show: false
            }
          },
          {
            type: 'value',
            nameTextStyle: {//修改坐标字体颜色
              color: "#dadadf"
            },
            axisLabel: {
              color: '#a7a6b8'
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisTick: {
              show: false
            },
      
          }
        ],
        series: [
          {
            name: '合法',
            type: 'bar',
            barWidth: 20, //柱条的宽度，不设时自适应。
            data: [12000, 13000, 6000, 15000, 10040, 9150, 10100],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#6ccdb6' },
                  { offset: 0.5, color: '#4d88dc' },
                  { offset: 1, color: '#3e67ed' }
                ]
              ),
              barBorderRadius: [1, 1, 1, 1]
            }
          }, {
            name: '违法',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'circle',     //设定为实心点
            symbolSize: 10,   //设定实心点的大小
            data: [11000, 15000, 6000, 9000, 800, 8500, 9500],
            itemStyle: {
              color: "#deb433"
            }
          }
        ]
      };`
    },
    {
      code: `option = {
        backgroundColor: 'rgb(10,65,148)',
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "5%",
            right: "5%",
            bottom: "50px",
            top: "45px"
        },
        legend: {
            icon: "rect",
            itemHeight: 12,
            itemWidth: 12,
            data: ['总面积', '总块数'],
            textStyle: {
                color: '#a6a7b1'
            },
            right: 20,
            top: 8
    
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
                    color: '#7ebbfe'
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
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#445ea0"
                    }
                },
                axisLabel: {
                    color: '#7ebbfe'
                },
                axisTick: {
                    show: false
                }
            },
            {
                type: 'value',
                nameTextStyle: {//修改坐标字体颜色
                    color: "#dadadf"
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#413e5a"
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}',
                    color: '#7ebbfe'
                }
            }
        ],
        series: [
            {
                name: '总面积',
                type: 'bar',
                barWidth: 15, //柱条的宽度，不设时自适应。
                data: [10, 15, 25, 47, 32, 16, 44, 44, 38, 58, 43, 34],
                //			             itemStyle: {
                //				                color: "#2c65f6"
                //				            }
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#40e5ff' },
                            { offset: 1, color: ' #24a0ff' }
                        ]
                    )
                }
            }, {
                name: '总块数',
                type: 'line',
                yAxisIndex: 1,
                data: [0.1, 0.1, 0.3, 0.3, 0.4, 0.2, 0.3, 0.5, 0.5, 0.7, 0.3, 0.4],
                symbolSize: 12,
                itemStyle: {
                    color: "#ffb375"
                }
            }
        ]
    };`
    },
    {
      code: `option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '3%',
          left: '2%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
      
        xAxis: {
          type: 'value',
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: '#e4e4e4'
            }
          },
          axisLabel: {
            color: '#333'
          },
          splitLine: {
            lineStyle: {
              color: '#e4e4e4'
            }
          }
        },
        yAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二'],
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: '#e4e4e4'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        series: [
          {
            name: '温度',
            type: 'line',
            data: [120, 132, 101, 134, 150, 130, 100, 120, 132, 101],
            color: '#47ba75',
            symbolSize: 10, //折线点的大小
          },
          {
            name: '湿度',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191],
            color: '#e9bd52',
            symbolSize: 10, //折线点的大小
          }
        ]
      };
      `
    },
    {
      code: `option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          subtext: '单位：亩',
          left: '40'
        },
        xAxis: {
          type: 'category',
          data: ['一季度', '二季度', '三季度', '四季度'],
          axisLine: {
            lineStyle: {
              color: '#2b3243'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            show: false
          }
        },
        grid: {
          top: 50,
          bottom: 15,
          left: '6%',
          right: '6%',
          containLabel: true
        },
        series: [
          {
            data: [20.01, 21.15, 23.77, 25.98],
            type: 'line',
            color: '#3f7ef3',
            symbolSize: 0,//拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3,
                  type: 'solid',
                  color: '#3f7ef3',
                },
                areaStyle: {
                  color: 'rgba(63,126,243,0.2)'
                }
              }
            },
      
            label: {
              show: true,
              color: '#3f7ef3'
      
            }
          }
        ]
      };`
    },
    {
      code: `var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (param) {
            console.log(param);
            var resultTooltip = '';
            resultTooltip =
              "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
              "<div style='text-align:center;'>" +
              param[0].name +
              '</div>' +
              "<div style='padding-top:5px;'>" +
              "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " +
              param[0].color +
              ";'></span>" +
              "<span style=''> " +
              param[0].seriesName +
              ': </span>' +
              "<span style='color:" +
              param[0].color +
              "'>" +
              param[0].value +
              '</span></span><span>万元</span>' +
              "<div style='padding-top:2px;'>" +
              "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " +
              param[1].color +
              ";'></span>" +
              "<span style=''> " +
              param[1].seriesName +
              ': </span>' +
              "<span style='color:" +
              param[1].color +
              "'>" +
              param[1].value +
              '</span><span>万元</span>' +
              '</div>' +
              '</div>';
            return resultTooltip;
          },
        },
        grid: {
          top: '20%',
          left: '4%',
          right: '2%',
          bottom: '13%',
        },
        legend: {
          icon: 'roundRect',
          orient: 'horizontal',
          top: '4%',
          right: '5%',
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 50,
          // textStyle: {
          //     color: '#FFFFFF'
          // }
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月'
            ],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false, //不显示刻度
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgb(148,159,167)",
                fontSize: 11
              }
            },
            boundaryGap: false,
            axisPointer: {
              //轴指示器
              type: 'shadow',
              z: 1,
              shadowStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255,79,79,0)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,79,79,1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
              },
            },
          },
        ],
        yAxis: [
          {
            name: "万元",
            nameTextStyle: {
              color: "#BBB8CE",
              fontSize: 11
            },
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgb(148,159,167)",
                fontSize: 11
              }
            },
            splitLine: {
              show: true,
              width: 0.05,
              lineStyle: {
                type: 'solid',
                color: 'rgba(187, 187, 187, 0.45)',
              },
            },
            axisTick: {
              show: false, //不显示刻度
            },
            axisLine: {
              show: false,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '指标买入支付资金',
            type: 'line',
            data: [800, 400, 1100, 700, 1000, 600, 400, 350, 1050, 400, 700],
            lineStyle: {
              normal: {
                width: 8,
                // color: '#FF4F4F',
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255,79,79, 1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,79,79, 0.5)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                shadowColor: 'rgba(255,79,79, 1)',
                shadowBlur: 12,
                shadowOffsetY: 6,
              },
            },
            symbol: 'emptyCircle',
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
            itemStyle: {
              normal: {
                color: 'rgba(255,79,79, 1)',
                shadowColor: 'rgba(255,79,79, 1)',
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: '#F8F8FF',
              },
            },
      
            smooth: true,
          },
          {
            name: '指标售出收入资金',
            type: 'line',
            data: [700, 300, 1000, 600, 900, 500, 300, 250, 950, 300, 600],
            lineStyle: {
              normal: {
                width: 8,
                // color: '#3374EB',
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(51,116,235,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(51,116,235,0.5)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                shadowColor: 'rgba(51,116,235,1)',
                shadowBlur: 12,
                shadowOffsetY: 6,
              },
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: 'rgba(51,116,235,1)',
                shadowColor: 'rgba(51,116,235, 1)',
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: '#F8F8FF',
              },
            },
            smooth: true,
          },
        ],
      };
      `
    }
]
lineDemoJS.forEach(v => {
    v.id = genId()
  })
export default lineDemoJS