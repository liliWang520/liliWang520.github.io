import genId from './random.js'
let pieDemoJS = [
  {
    code: `var colorArr = ['#38c26f', '#228ce7','#ffc73f'];
    option = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['25%', '50%'],
          label: {
            normal: {
              width: 200,
              formatter: function (params) {
                var str = null;
                if (params.dataIndex == 0) {
                  str = '{blackPoint1|●}' + '{ab| ' + params.data.name + '}\\n{area| 个数(幅)}{xljsyd|' + params.data.num + '}\\n{area| 面积(万平方米)}{xljsyd|' + params.data.value + '}';
                } else if (params.dataIndex == 1) {
                  str = '{blackPoint2|●}' + '{ab| ' + params.data.name + '}\\n{area| 个数(幅)}{dtcbyd|' + params.data.num + '}\\n{area| 面积(万平方米)}{dtcbyd|' + params.data.value + '}';
                } else {
                  str = '{blackPoint3|●}' + '{ab| ' + params.data.name + '}\\n{area| 个数(幅)}{jyxyd|' + params.data.num + '}\\n{area| 面积(万平方米)}{jyxyd|' + params.data.value + '}';
                }
                return str
              },
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              padding: [5, 5, 5, 5],
              rich: {
                ab: {
                  color: '#000',
                  lineHeight: 30,
                  align: 'left',
                  fontSize: 16,
                },
                area: {
                  fontSize: 14,
                  color: '#333',
                  align: 'left',
                  lineHeight: 33
                },
    
                xljsyd: {
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#38c26f',
                  padding: [2, 4],
                  align: 'right',
                  borderRadius: 2
                },
                dtcbyd: {
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#228ce7',
                  padding: [2, 4],
                  align: 'right',
                  borderRadius: 2
                },
                jyxyd: {
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#ffc73f',
                  padding: [2, 4],
                  align: 'right',
                  borderRadius: 2
                },
                blackPoint1: {
                  color: '#38c26f',
                  fontSize: 24,
                  lineHeight: 30,
                  align: 'left'
                },
                blackPoint2: {
                  color: '#228ce7',
                  fontSize: 24,
                  lineHeight: 30,
                  align: 'left'
                },
                blackPoint3: {
                  color: '#ffc73f',
                  fontSize: 24,
                  lineHeight: 30,
                  align: 'left'
                }
              }
            }
          },
          labelLine: {
            lineStyle: {
              color: '#cccccc'
            },
            smooth: 0,
            length: 0,
            length2: 50
          },
          data: [
            { value: 4000, name: '13条线路建设用地', num: 361 },
            { value: 3866.67, name: '地铁储备用地', num: 33 },
            { value: 2000, name: '经营性用地', num: 39 }
          ],
          itemStyle: {
            color: function (params) {
              var colorList = colorArr
              return colorList[params.dataIndex];
            },
            emphasis: {
              opacity: 1,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
          },
        }
      ]
    };
    `
  },
  {
    code: `var echartData = [
        {
            name: "社会经济数据",
            value: "84",
        },
        {
            name: "规划管控数据",
            value: "132",
        },
        {
            name: "超图服务",
            value: "179",
        }
    ];
    var total = echartData.reduce((a, b) => {
        return a + b.value * 1;
    }, 0);
    var option = {
        backgroundColor: "#fff",
        color: ["#3f7ef3", "#f6d778", "#b18bde", "#F8456B", "#00FFFF", "#4AEAB0"],
        title: [
            {
                text: "{name|" + "总量" + "}\\n{val|" + total + "}",
                top: "center",
                left: "center",
                textStyle: {
                    rich: {
                        name: {
                            fontSize: 12,
                            fontWeight: "normal",
                            color: "#707070",
                            padding: [10, 0],
                        },
                        val: {
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#000",
                        },
                    },
                },
            },
            {
                text: "单位：个",
                show: false,
                top: 20,
                left: 20,
                textStyle: {
                    fontSize: 14,
                    color: "#666666",
                    fontWeight: 400,
                },
            },
        ],
        series: [
            {
                type: "pie",
                radius: ["35%", "65%"],
                center: ["50%", "50%"],
                data: echartData,
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        borderColor: "white",
                        borderWidth: 2,
                    },
                },
                labelLine: {
                    normal: {
                        length: -20,
                        length2: 0,
                        lineStyle: {
                            color: "transparent",
                        },
                    },
                },
                label: {
                    position: 'outside',
                    percentPrecision: 1,
                    align: 'center',
                    formatter: name => {
                        if (name.name === "社会经济数据") {
                            return ("{name1|" + name.percent.toFixed(1) + "%}")
                        } else if (name.name === "规划管控数据") {
                            return ("{name2|" + name.percent.toFixed(1) + "%}")
                        } else {
                            return ("{name3|" + name.percent.toFixed(1) + "%}")
                        }
                    },
                    rich: {
                        name1: {
                            color: '#3f7ef3',
                            align: 'center',
                            borderWidth: 1,
                            borderRadius: 20,
                            shadowBlur: 10,
                            shadowColor: '#eff5fa',
                            backgroundColor: 'white',
                            fontSize: 12,
                            width: 40,
                            height: 40,
                            lineHeight: 40,
                        },
                        name2: {
                            color: '#f6d778',
                            align: 'center',
                            borderWidth: 1,
                            borderRadius: 20,
                            shadowBlur: 10,
                            shadowColor: '#eff5fa',
                            backgroundColor: 'white',
                            fontSize: 12,
                            width: 40,
                            height: 40,
                            lineHeight: 40,
                        },
                        name3: {
                            color: '#b18bde',
                            align: 'center',
                            borderWidth: 1,
                            borderRadius: 20,
                            shadowBlur: 10,
                            shadowColor: '#eff5fa',
                            backgroundColor: 'white',
                            fontSize: 12,
                            width: 40,
                            height: 40,
                            lineHeight: 40,
                        },
                    },
                },
            },
        ],
        legend: {
            orient: "vertical",
            top: "middle",
            right: 34,
            itemWidth: 46,
            itemGap: 30,
            textStyle: {
                color: "#000",
                fontSize: 14,
                fontWeight: 'bold'
            },
            icon: "circle",
        },
    };`
  },
  {
    code: `
    var trafficWay = [
      {
        name: "现状数据",
        value: 20,
      },
      {
        name: "规划管控数据",
        value: 10,
      },
      {
        name: "管理数据",
        value: 30,
      },
      {
        name: "社会经济数据",
        value: 40,
      },
      {
        name: "超图服务",
        value: 40,
      },
    ];
    var color = [
      "#b0d463",
      "#83cdf6",
      "#99534c",
      "#ebc065",
      "#e69169",
      "#ff5b00",
      "#ff3000",
    ];
    var data = [];
    for (var i = 0; i < trafficWay.length; i++) {
      data.push(
        {
          value: trafficWay[i].value,
          name: trafficWay[i].name,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 10,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
        },
        {
          value: 2,
          name: "",
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              color: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 0)",
              borderWidth: 0,
            },
          },
        }
      );
    }
    function generateData(totalNum, bigvalue, smallvalue, color) {
      let dataArr = [];
      for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: bigvalue,
            itemStyle: {
              normal: {
                color: color,
                borderWidth: 0,
              }
            }
          });
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: smallvalue,
            itemStyle: {
              normal: {
                color: "rgb(0,0,0,0)",
                borderWidth: 0,
              }
            }
          });
        }
    
      }
      return dataArr;
    }
    
    let threeData = generateData(8, 40, 5, '#c7cad3');
    var seriesOption = [
      {
        name: "",
        type: "pie",
        radius: ["54%", "58%"],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
          borderRadius: 0,
          normal: {
            // borderWidth: 5,
            borderColor: "#fff",
            label: {
              show: false
            },
            labelLine: {
              length: 30,
              length2: 100,
              show: true,
              color: "#00ffff",
            },
    
          },
        },
        data: data,
      },
      {
        type: 'pie',
        name: '旋转圆',
        zlevel: 20,
        silent: true,
        center: ['50%', '50%'],
        radius: ['44%', '45%'],
        hoverAnimation: false,
        startAngle: 90,
        data: threeData,
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
      }
    ];
    
    option = {
      color: color,
      title: {
        text: ["{name|党员人数\\n}" + "{value|" + 28 + "}"],
        top: "center",
        left: 'center',
        textStyle: {
          color: "#333",
          fontSize: 14,
          fontWeight: "400",
          rich: {
            name: {
              fontSize: 14,
              fontWeight: "400",
              color: "#333",
            },
            value: {
              fontSize: 28,
              fontWeight: 'bold',
              align: 'center',
              padding: [15, 0, 0, 0]
            }
          }
        }
      },
      tooltip: {
        show: true,
      },
      legend: {
        icon: "circle",
        orient: "vertical",
        data: ["现状数据", "规划管控数据", "管理数据", "社会经济数据", "超图服务"],
        right: '1%',
        bottom: 'center',
        align: "left",
        textStyle: {
          color: "#fff",
        },
        itemGap: 20,
        itemWidth: 10,
        itemHeight: 10,
        // 
        textStyle: {
          padding: [10, 10, 10, 10],
          color: '#333'
        }
      },
      toolbox: {
        show: false,
      },
      series: seriesOption,
    };
    `
  },
  {
    code: `option = {
        color: ['#5d86e5', '#af8fdc', '#e08b5d', '#b1dafb'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          right: '30',
          top: 'center',
          orient: 'vertical',
          itemWidth: 12,
          itemHeight: 12,
          itemStyle: {
            borderWidth: 0
          },
          icon: 'rect',
          textStyle: {
            fontSize: 14,
            color: '#445057'
          }
        },
        series: [
          {
            name: '各类办件状态统计',
            type: 'pie',
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: '#fff',
              borderWidth: 0
            },
            center: ['35%', '55%'],
            radius:['0%', '50%'],
            label: {
              show: true,
              position: 'outside', //标签的位置
              textStyle: {
                fontSize: 14,    //文字的字体大小
                color: '#445057'
              },
              formatter: '{b}\\n{c}'
            },
            labelLine: {
              show: true,
              length: 15,
              length2: 15
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
      
            data: [
              { value: 100, name: '2年以上' },
              { value: 150, name: '1-2年' },
              { value: 172, name: '1年内' },
              { value: 124, name: '未按时竣工' }
            ]
          }
        ]
      };`
  },
  {
    code: `option = {
      title: {
        text: '问题数量',//主标题文本
        subtext: '1829',//副标题文本
        left: 'center',
        top: '47%',
        textStyle: {
          fontFamily: "Helvetica Neue",
          fontSize: 14,
          color: '#666666',
        },
        subtextStyle: {
          fontSize: 22,
          color: '#333',
          align: 'center',
          fontFamily: "Impact",
        }
      },
      legend: {
        data: [
          '未处理',
          '已处理',
          '已关闭'
    
        ],
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 120,
        top: 15
      },
      series: [
        {
          type: 'pie',
          radius: ['0%', '30%'],
          center: ['50%', '55%'],
          label: {
            show: false
          },
          itemStyle: {
            color: function (params) {
              var colorList = ['#fff'];
              return colorList[params.dataIndex]
            },
            shadowBlur: 30,   // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
            shadowOffsetX: 0, // 阴影水平方向上的偏移距离
            shadowColor: 'rgba(235,236,239,1)' // 阴影颜色
          },
          emphasis: {
            scale: false,
            focus: 'none',
          },
          data: [
            { value: 0, name: '0' }
          ]
        },
        {
          type: 'pie',
          radius: ['45%', '80%'],
          labelLine: {
            length: -20,
            length2: -5
          },
          emphasis: {
            scale: false,
            focus: 'none',
          },
          center: ['50%', '55%'],
          label: {
            // formatter: ' {per|{d}%}  ',
            formatter: function (params) {
              // debugger
              var str = parseInt(params.percent) + '% / ' + params.value + '件' + '}';
              if (params.dataIndex == 0) {
                str = '{perColor1|' + str;
              } else if (params.dataIndex == 1) {
                str = '{perColor2|' + str;
              } else {
                str = '{perColor3|' + str;
              }
              return str;
            },
            backgroundColor: '#fff',
            borderColor: '#8C8D8E',
            height: 46,
            width: 120,
            borderWidth: 0,
            borderRadius: 30,
            shadowColor: '#ddd',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 50,
            textAlign: 'center',
            rich: {
              perColor1: {
                color: '#7abefd',
                lineHeight: 46,
                align: 'center',
                fontSize: 16,
                fontFamily: 'impact'
              },
              perColor2: {
                color: '#b58ee1',
                lineHeight: 46,
                align: 'center',
                fontSize: 16,
                fontFamily: 'impact'
              },
              perColor3: {
                color: '#3f7ef3',
                lineHeight: 46,
                align: 'center',
                fontSize: 16,
                fontFamily: 'impact'
              }
            }
          },
          itemStyle: {
            color: function (params) {
              //自定义颜色
              var colorList = ['#7abefd', '#b58ee1', '#3f7ef3'];
              return colorList[params.dataIndex]
            }
          },
    
          data: [
            { value: 899, name: '未处理' },
            { value: 1347, name: '已处理' },
            { value: 6736, name: '已关闭' }
          ]
        }
      ]
    };`
  },
  {
    code: `var data = {
      value: 76,
      name: "违章比",
  };
  var mainColor = "#9685f6", mainText = '耕地', mainPercent = "68.2", mainMix = "65";
  var option = {
      backgroundColor: "#fff",
      tooltip: {
          show: false,
          trigger: "item",
      },
      title: {
          text: "{a|" + mainPercent + "%}\\n{b|" + mainText + "}\\n{c|面积：1002.3亩}",
          x: "center",
          y: "26%",
          textStyle: {
              fontSize: 20,
              color: 'black',
              rich: {
                  a: {
                      color: mainColor,
                      fontSize: 20,
                      align: "center",
                      height: 38,
                      fontFamily: 'Impact'
                  },
                  b: {
                      color: "black",
                      fontSize: 15,
                      height: 24,
                      align: "center",
                      fontWeight: 'bold'
                  },
                  c: {
                      color: "#447edf",
                      fontSize: 15,
                      align: "center",
                      fontWeight: 'bold'
                  },
              },
          },
      },
      series: [
          {
              type: "pie",
              hoverAnimation: false,
              label: {
                  show: false,
              },
              center: ["50%", "50%"],
              radius: ["0%", "60%"],
              startAngle: 180,
              data: [
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: new echarts.graphic.LinearGradient(
                              0, 0, 0, 1,
                              [
                                  { offset: 1, color: '#f8fdff' },
                                  { offset: 0, color: '#d4e3ed' }
                              ]
                          )
                      },
                  },
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "transparent",
                      },
                  },
              ],
          },
          {
              type: "pie",
              hoverAnimation: false,
              show: false,
              label: {
                  show: false,
              },
              center: ["50%", "50%"],
              radius: ["96%", "100%"],
              startAngle: 180,
              data: [
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "#d6e3ec",
                      },
                  },
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "transparent",
                      },
                  },
              ],
          },
          {
              type: "pie",
              hoverAnimation: false,
              label: {
                  show: false,
                  position: "inside",
                  color: "#fff",
              },
              center: ["50%", "50%"],
              radius: ["50%", "50%"],
              startAngle: 180,
              data: [
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "rgba(255, 255, 255, 0.2)",
                      },
                  },
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "transparent",
                      },
                  },
              ],
          }, {
              type: "pie",
              label: {
                  show: true,
                  position: 'center',
                  fontFamily: 'Impact'
              },
              center: ["50%", "50%"],
              radius: ["70%", "90%"],
              startAngle: 180,
              data: [
                  {
                      name: "",
                      value: mainMix,
                      itemStyle: {
                          color: mainColor,
                      },
                  },
                  {
                      name: "",
                      value: 100 - mainMix,
                      itemStyle: {
                          color: "#dde5eb",
                      },
                  },
                  {
                      name: "",
                      value: 100,
                      itemStyle: {
                          color: "transparent",
                      },
                  },
              ],
          },
      ],
  };
  `
  },
  {
    code: `option = {
      color: ['#fddd7a', '#b58ee1', '#3f7ef3', '#d6d6d6'],
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },
      calculable: true,
      series: [
        {
          name: "",
          type: "pie",
          radius: [50, 110],
          center: ["50%", "50%"],
          data: [
            { value: 31, name: "开工放样", },
            { value: 38, name: "竣工验收" },
            { value: 45, name: "用地建房" },
            { value: 54, name: "用地建房2" }
          ],
          label: {
            show: false
          },
    
        },
      ],
    };`
  },
  {
    code: `option = {
      color: ['#70d2ee', '#b1eafa', '#9090fa', '#604dd2', '#d6d6d6', '#5db1ff', '#98d2ff', '#ffed89', '#fdbc4a'],
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
      },
      calculable: true,
      series: [
        {
          name: "",
          type: "pie",
          radius: [40, 80],
          center: ["50%", "50%"],
          data: [
            { value: 31, name: "开工放样", },
            { value: 38, name: "竣工验收" },
            { value: 45, name: "用地建房" },
            { value: 54, name: "用地建房2" },
            { value: 32, name: "用地建房3" },
            { value: 12, name: "用地建房4" },
            { value: 58, name: "用地建房5" },
            { value: 65, name: "用地建房6" },
            { value: 45, name: "用地建房7" },
          ],
          label: {
            percentPrecision: 1,
            formatter: param => {
              var before = "{name|" + param.name + "\\n" + "}"
              return (before + "{name" + param.dataIndex + "|" + param.percent.toFixed(1) + "%}")
            },
            rich: {
              name: {
                color: '#000',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 12,
                lineHeight: 20,
              },
              name0: {
                color: '#70d2ee',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name1: {
                color: '#b1eafa',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name2: {
                color: '#9090fa',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name3: {
                color: '#604dd2',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name4: {
                color: '#d6d6d6',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name5: {
                color: '#5db1ff',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name6: {
                color: '#98d2ff',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name7: {
                color: '#ffed89',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
              name8: {
                color: '#fdbc4a',
                borderWidth: 1,
                borderRadius: 20,
                fontSize: 14,
                lineHeight: 20,
              },
            },
          },
          labelLine: {
            length: 10,
            length2: 35,
            maxSurfaceAngle: 80
          },
        },
      ],
    };
    `
  },
  {
    code: `option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
    
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['20%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          color: ['#dd515e', '#c4dd76', '#aee5db', '#ef8e53'],
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
              color: '#666'
            }
          },
          roseType: 'area',
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '组织生活' },
            { value: 310, name: '组织建议' },
            { value: 234, name: '特色党建' },
            { value: 300, name: '三会一课' }
          ]
        }
      ]
    };
    `
  },
  {
    code: `let dataArr = [
      { value: 78, name: '网上申请合同数', textStyle: { color: '#28b1ff' } },
      { value: 22, name: '线下申请合同数', textStyle: { color: '#1ae562' } },
    ];
    option = {
      backgroundColor: 'rgb(0,59,129)',
      tooltip: {
        trigger: 'item'
      },
      color: ['#28b1ff', '#1ae562'],
      legend: {
        data: [{
          name: '网上申请合同数',
          textStyle: {
            color: '#28b1ff'
          }
        }, {
          name: '线下申请合同数',
          textStyle: {
            color: '#1ae562'
          }
        }],
        orient: 'vertical',
        right: '5%',
        top: '5%',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          color: 'auto',
          fontSize: 14,
          padding: [0, 0, 0, 5],
          rich: {
            name: {
              fontSize: 14,
              color: '#fff'
            },
            b: {
              fontSize: 14,
              color: 'auto',
              fontWeight: 'bold'
            },
            v: {
              fontSize: 14,
              color: 'auto',
              fontWeight: 'bold'
            }
          }
        },
        icon: 'rect',
        formatter: name => {
          var data = dataArr;
          var total = 0;
          var tarValue;
          for (var i = 0; i < data.length; i++) {
            total += data[i].value;
            if (data[i].name == name) {
              tarValue = data[i].value;
            }
          }
          var v = tarValue;
          var b = Math.round((tarValue / total) * 100);
          return '{name|' + name + '}' + '   ' + "{b| " + b + "%}" + ' ' + "{v| " + v + "万平方米}";
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['35%', '55%'],
          center: ['35%', '62%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          data: dataArr
        }, {
          type: 'pie',
          radius: ['55%', '65%'],
          center: ['35%', '62%'],
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(255,255,255,0.2)",
              },
            },
          ],
        }
      ]
    };`
  },
  {
    code:  `option = {
      tooltip: {
        show: false
      },
      backgroundColor: 'rgb(0,59,129)',
      color: ['#f86464', '#f88f21', '#edf049', '#33a7fe', '#19db7b', '#8c70f8'],
      grid: {
        top: '5%',
        bottom: '5%',
        right: '5%',
        left: '5%'
      },
      legend: {
        orient: 'vertical',
        left: '3%',
        top: 'middle',
        itemGap: 20,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        icon: 'rect'
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          left: '14%',
          data: [
            { value: 1048, name: '商服用地' },
            { value: 735, name: '工矿仓储' },
            { value: 580, name: '住宅用地' },
            { value: 484, name: '交通运输' },
            { value: 300, name: '水利设施' },
            { value: 300, name: '公共服务' }
          ],
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              formatter: '{b|{b}}\\n{d|{d}%}  {c|{c}万平方米}',
              rich: {
                b: {
                  color: '#fff',
                  fontSize: 12,
                  align: 'center',
                  padding: [0, 0, 5, 0]
                },
                c: {
                  fontSize: 12,
                  color: '#10d0f5',
                  fontWeight: '700'
                },
                d: {
                  fontSize: 12,
                  color: '#10d0f5',
                  fontWeight: '700'
                }
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              length: 10,
              length2: 20,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            }
          }
        }
      ]
    };`
  },
  {
    code: `var pieData = [
      { name: "数据名称1", value: 289 },
      { name: "数据名称2", value: 50 },
      { name: "数据名称3", value: 45 },
      { name: "数据名称4", value: 36 },
      { name: "数据名称5", value: 35 },
      { name: "数据名称6", value: 72 },
      { name: "数据名称7", value: 36 },
    ];
    var valArray = {};
    pieData.forEach(function (item) {
      valArray[item.name] = item.value;
    })
    var all = pieData.reduce((a, b) => {
      return a + b.value * 1;
    }, 0);
    
    option = {
      color: ["#0e63db", "#f6af4f", "#7a6af5", '#65ebf3', '#e06b7b', '#38b5f0', '#fadeb5'],
      title: [
        {
          text: "{val|" + all + "}",
          top: "middle",
          left: "34%",
          textStyle: {
            rich: {
              val: {
                fontSize: 18,
                fontFamily: "impact",
                color: "#6acdf7"
              }
            }
          }
        }
      ],
      tooltip: {
        show: true
      },
      grid: {
        top: '40px',
        left: '100px',
        right: '30px',
        bottom: '40px'
      },
      legend: {
        icon: "circle",
        orient: "vertical",
        top: "middle",
        //		        right: '5%',
        right: '50px',
        itemWidth: 30,
        itemGap: 16,
        textStyle: {
          rich: {
            name1: {
              color: '#d0dddb',
              fontSize: '15',
              padding: [20, 0, 5, 0]
            },
            name2: {
              color: '#6ed4ff',
              fontSize: '15',
              fontFamily: 'impact'
            }
          },
        }
      },
      series: [
        {
          type: "pie",
          radius: ["48%", "84%"],
          center: ["36%", "50%"],
          data: pieData,
          hoverAnimation: false,
          labelLine: {
            show: false
          },
          label: {
            show: false
          }
        },
        // 边框的设置
        {
          radius: ["0%", "66%"],
          center: ["36%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(24,67,145,0.8)",
              },
            },
          ],
        },
        // 内边框的设置
        {
          radius: ["0%", "32%"],
          center: ["36%", "50%"],
          type: "pie",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 1,
              itemStyle: {
                color: "rgba(21,57,125,0.6)",
              },
            },
          ],
        },
      ]
    };
    `
  },
  {
    code:  `option = {
      series: [
        {
          name: "行政审批",
          type: 'pie',
          radius: '50%',
          selectedMode: 'single',
          selectedOffset: 5,
          select: {
            itemStyle: {
              borderWidth: 15,
              borderColor: '#35bbf9'
            }
          },
          data: [
            { value: 30, name: 'Search Engine', selected: true },
            { value: 70, name: 'Direct' }
          ],
          color: ['#35bbf9', '#e4f1f5'],
          label: {
            show: false
          },
          silent: true
        }
      ]
    };
    `
  },
  {
    code: `option = {
      color: ['#ffc937', '#394b97', '#bbf8f6', '#55bfb4', '#45c7eb', '#91d6b0', '#3d7bc8', '#914fff'],
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
      },
    
      series: [
        {
          type: 'pie',
          radius: [75, 120],
          center: ['50%', '50%'],
          // roseType: 'area',
          data: [
            { value: 90, name: '肥瘦肉肥瘦肉发热分1' },
            { value: 85, name: '肥瘦肉肥瘦肉发热2分' },
            { value: 80, name: '肥瘦肉肥瘦肉发热3分' },
            { value: 75, name: '肥瘦肉肥瘦肉发4热分' },
            { value: 70, name: '肥瘦肉肥瘦肉发5热分' },
            { value: 65, name: '肥瘦肉肥瘦肉发6热分' },
            { value: 60, name: '肥瘦肉肥瘦肉发7热分发热分' },
            { value: 55, name: '肥瘦肉肥瘦肉发8热分' }
          ],
          itemStyle: {
            // borderRadius: ['20%', '50%'],
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            normal: {
              show: true,
              color: '#7f7f7f',
              fontSize: 14,
              lineHeight: 20,
              lineStyle: {
                color: '#7f7f7f'
              },
              formatter: function (params) {
                // debugger
                var newParamsName = "";// 最终拼接成的字符串
                var oldParamsName = params.data.name;
                var paramsNameNumber = oldParamsName.length;// 实际标签的个数
                var provideNumber = 5;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";// 表示每一次截取的字符串
                    var start = p * provideNumber;// 开始截取的位置
                    var end = start + provideNumber;// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = oldParamsName.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = oldParamsName.substring(start, end) + "\\n";
                    }
                    newParamsName += tempStr;// 最终拼成的字符串
                  }
    
                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
              }
            }
    
          },
          labelLine: {
            length: 5,
            length2: 5,
            lineStyle: {
              color: '#7f7f7f'
            }
          }
        }
      ]
    };
    `
  },
  {
    code: `option = {
      color: ['#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646'],
      tooltip: {
          trigger: 'item'
      },
      backgroundColor: 'rgb(0,59,129)',
      legend: {
          right: '5',
          top: 'center',
          orient: 'vertical',
          itemWidth: 12,
          itemHeight: 12,
          itemStyle: {
              borderWidth: 0
          },
          icon: 'rect',
          textStyle: {
              fontSize: 12
          },
          formatter: ' {name}'
      },
      series: [
          {
              name: '历史办件业务类型统计',
              type: 'pie',
              radius: ['36%', '76%'],
              avoidLabelOverlap: false,
              itemStyle: {
                  borderRadius: 0,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              center: ['36%', '50%'],
              label: {
                  show: true,
                  position: 'inner', //标签的位置
                  textStyle: {
                      fontWeight: 300,
                      fontSize: 12,    //文字的字体大小
                      color: '#fff'
                  },
                  formatter: function (params) {
                      return Math.round(params.percent) + '%';
                  }
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '16',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  { value: 1048, name: '建设用地供地' },
                  { value: 735, name: '供后监管' },
                  { value: 580, name: '勘测定界' },
                  { value: 484, name: '建设用地报批' },
                  { value: 300, name: '建设用地项目预审' },
                  { value: 300, name: '临时用地' }
              ]
          }
      ]
  };`
  },
  {
    code: `var imgUrl = '/img/pie-bg.png'
    option = {
        tooltip: {
            show: false
        },
        backgroundColor: 'rgb(0,59,129)',
        color: ['#ef7a8d', '#b58ee1', '#4e80f8', '#a6dcfe', '#ee9c53', '#fddd7a', '#3bdcd3'],
        legend: [
            {
                data: ['国士空间全域综合整治项目', '工矿废弃地复星项目', '矿山生态修复项目', '生产建设损毁土地复星项目', '生态整治试点项目', '耕地占补平衡', '增减挂钩'],
                icon: "rect",
                left: '2%',
                bottom: '0',
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        ],
        series: [
            {
                type: 'pie',
                radius: ['51%', '66%'],
                center: ['50%', '42%'],
                data: [
                    { value: 100, name: '国士空间全域综合整治项目' },
                    { value: 150, name: '工矿废弃地复星项目' },
                    { value: 109, name: '矿山生态修复项目' },
                    { value: 192, name: '生产建设损毁土地复星项目' },
                    { value: 205, name: '生态整治试点项目' },
                    { value: 179, name: '耕地占补平衡' },
                    { value: 0, name: '增减挂钩' },
                ],
                label: {
                    normal: {
                        show: true,
                        formatter: '{b|{b}}\\n{d|{d}%}',
                        rich: {
                            b: {
                                color: '#fff',
                                fontSize: 12,
                                align: 'center',
                                padding: [0, 0, 5, 0]
                            },
                            c: {
                                fontSize: 12,
                                color: '#10d0f5',
                                fontWeight: '700'
                            },
                            d: {
                                fontSize: 12,
                                color: '#baeaf3',
                                fontWeight: '700'
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 0,
                        length2: 60,
                        lineStyle: {
                            color: '#3874b5',
                            width: 2
                        }
                    }
                }
            }
        ],
        graphic: {
            elements: [{
                type: "image",
                z: 3,
                style: {
                    image: imgUrl,
                    width: '380',
                    height: '380'
                },
                left: 'center',
                top: '19%',
            }]
        },
    
    };`
  },
  {
    code: `option = {
      color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3'],
      tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}'
      },
  
      series: [
          {
              type: 'pie',
              radius: [50, 150],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                  { value: 90, name: '肥瘦肉肥瘦肉发热分1' },
                  { value: 85, name: '肥瘦肉肥瘦肉发热2分' },
                  { value: 80, name: '肥瘦肉肥瘦肉发热3分' },
                  { value: 75, name: '肥瘦肉肥瘦肉发4热分' },
                  { value: 70, name: '肥瘦肉肥瘦肉发5热分' },
                  { value: 65, name: '肥瘦肉肥瘦肉发6热分' },
                  { value: 60, name: '肥瘦肉肥瘦肉发7热分发热分' },
                  { value: 55, name: '肥瘦肉肥瘦肉发8热分' }
              ],
              itemStyle: {
                  borderRadius: [0, 10],
                  borderColor: '#fff',
                  borderWidth: 1
              },
              label: {
                  normal: {
                      show: true,
                      color: '#7f7f7f',
                      fontSize: 14,
                      lineHeight: 20,
                      lineStyle: {
                          color: '#7f7f7f'
                      },
                      formatter: function (params) {
                          // debugger
                          var newParamsName = "";// 最终拼接成的字符串
                          var oldParamsName = params.data.name;
                          var paramsNameNumber = oldParamsName.length;// 实际标签的个数
                          var provideNumber = 5;// 每行能显示的字的个数
                          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                          // 条件等同于rowNumber>1
                          if (paramsNameNumber > provideNumber) {
                              for (var p = 0; p < rowNumber; p++) {
                                  var tempStr = "";// 表示每一次截取的字符串
                                  var start = p * provideNumber;// 开始截取的位置
                                  var end = start + provideNumber;// 结束截取的位置
                                  // 此处特殊处理最后一行的索引值
                                  if (p == rowNumber - 1) {
                                      // 最后一次不换行
                                      tempStr = oldParamsName.substring(start, paramsNameNumber);
                                  } else {
                                      // 每一次拼接字符串并换行
                                      tempStr = oldParamsName.substring(start, end) + "\n";
                                  }
                                  newParamsName += tempStr;// 最终拼成的字符串
                              }
  
                          } else {
                              // 将旧标签的值赋给新标签
                              newParamsName = params;
                          }
                          //将最终的字符串返回
                          return newParamsName
                      }
                  }
  
              },
              labelLine: {
                  length: 5,
                  length2: 5,
                  lineStyle: {
                      color: '#7f7f7f'
                  }
              }
          }
      ]
  };`
  },
  {
    code: `option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}:<br/> {c} ({d}%)',
        backgroundColor: "rgba(24,39,56,0.8)"
      },
      color: ['#875eff', '#f2b836', '#422e86', "#876f46", "#b7903b", "#d0a337"],
      legend: {
        show: false
      },
      series: [
        {
          name: '一级行业',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner'
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 60,
              name: '未核'
            },
            {
              value: 30,
              name: '已核'
            }
    
          ]
        },
        {
    
          type: 'pie',
          radius: ['30%', '60%'],
          label: {
            show: false,
            formatter: '{a|{a}}{abg|}\\n{hr|}\\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            padding: [0, 0],
            rich: {
              a: {
                color: '#999',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              b: {
                fontSize: 12,
                lineHeight: 33
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2
              }
            }
          },
          data: [
            { value: 60, name: '未核总数' },
            { value: 10, name: '合法' },
            { value: 10, name: '违法' },
            { value: 10, name: '实地未变化' }
          ]
        }
      ]
    }`
  },
  {
    code: `option = {
    backgroundColor: 'rgb(6,43,111)',
    tooltip: {
        show: false
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '40%'],
            avoidLabelOverlap: false,
            color: ["#ffc73f", '#4afdcd', '#4484fa'],
            roseType: 'radius',
            label: {
                width: 230,
                formatter: function (params) {
                    var str = '{ab|' + params.data.name + '}\\n{area|个数}{areaval|' + params.data.num + '}\\n{area|面积(平方米)}{areaval|' + params.data.value + '}';
                    return str;
                },
                backgroundColor: {
                    image: '/img/jttdzl-bt.png'
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [15, 15, 15, 15],
                rich: {
                    ab: {
                        color: '#2accdc',
                        lineHeight: 30,
                        align: 'center',
                        fontSize: 16,
                        fontWeight: 700
                    },
                    area: {
                        fontSize: 14,
                        color: '#b7d9ff',
                        align: 'left',
                        lineHeight: 33
                    },
                    areaval: {
                        fontSize: 20,
                        fontWeight: 900,
                        color: '#2accdc',
                        padding: [2, 4],
                        align: 'right',
                        borderRadius: 2
                    }
                }
            },
            labelLine: {
                length: 15,
                length2: 30,
                smooth: false
            },
            data: [
                { value: 20, name: '经营性用地', num: "15615", area: "1515" },
                { value: 30, name: '储备用地', num: "1455", area: "587" },
                { value: 50, name: '线路建设用地', num: "554", area: "564" }
            ]
        }
    ]
};
`
  },
  {
    code: `option = {
      backgroundColor: 'rgb(0,12,61)',
      legend: {
          right: "5%",
          top: "5%",
          icon: 'roundRect',
          itemWidth: 20,
          textStyle: {
              color: "#74acd7"
          }
      },
      graphic: [{//环形图中间添加文字
          type: 'text',//通过不同top值可以设置上下显示
          left: '18%',
          top: 'center',
          style: {
              text: "计划",
              textAlign: 'center',
              fill: '#b2bef3',//文字的颜色
              width: 30,
              height: 30,
              fontSize: 18,
              color: "#4d4f5c",
              fontFamily: "Microsoft YaHei"
          }
      },
      {//环形图中间添加文字
          type: 'text',//通过不同top值可以设置上下显示
          left: '48%',
          top: 'center',
          style: {
              text: "验收",
              textAlign: 'center',
              fill: '#b2bef3',//文字的颜色
              width: 30,
              height: 30,
              fontSize: 18,
              color: "#4d4f5c",
              fontFamily: "Microsoft YaHei"
          }
      },
      {//环形图中间添加文字
          type: 'text',//通过不同top值可以设置上下显示
          left: '78%',
          top: 'center',
          style: {
              text: "结余",
              textAlign: 'center',
              fill: '#b2bef3',//文字的颜色
              width: 30,
              height: 30,
              fontSize: 18,
              color: "#4d4f5c",
              fontFamily: "Microsoft YaHei"
          }
      }],
      dataset: {
          source: [
              ['type', '计划', '验收', '结余'],
              ['中央', 86.5, 56.4, 55.1],
              ['地方', 67.5, 73.4, 76.1],
              ['其他', 56.1, 65.2, 66.5]
          ]
      },
      tooltip: {
          showContent: true,//默认值true，tooltip主体内容显示策略，只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为false，
          trigger: 'item',//默认值'item'，触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
  
      },
      grid: {
          left: 0,
          right: 0,
          bottom: 20,
          top: 80,
          containLabel: true
      },
  
      series: [{
          type: 'pie',
          radius: [30, 80],
          center: ['20%', 'center'],
          roseType: 'area',
          encode: {
              itemName: 'type',
              value: '计划'
          },
          itemStyle: {
              normal: {
                  color: function (params) {
                      //自定义颜色
                      var colorList = [
                          '#38e9d6', '#3054c9', '#fc7f33'
                      ];
                      return colorList[params.dataIndex]
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 5,
                  length2: 5
              }
          }
      }, {
          type: 'pie',
          radius: [30, 70],
          center: ['50%', 'center'],
          roseType: 'area',
          encode: {
              itemName: 'type',
              value: '验收'
          },
          itemStyle: {
              normal: {
                  color: function (params) {
                      //自定义颜色
                      var colorList = [
                          '#38e9d6', '#3054c9', '#fc7f33'
                      ];
                      return colorList[params.dataIndex]
                  }
              }
          },
          labelLine: {
              normal: {
                  length: 5,
                  length2: 5
              }
          }
      }, {
          type: 'pie',
          radius: [30, 80],
          center: ['80%', 'center'],
          roseType: 'area',
          encode: {
              itemName: 'type',
              value: '结余'
          },
          itemStyle: {
              normal: {
                  color: function (params) {
                      //自定义颜色
                      var colorList = [
                          '#38e9d6', '#3054c9', '#fc7f33'
                      ];
                      return colorList[params.dataIndex]
                  }
              }
          },
          labelLine: {
              normal: {
                  length1: 5,
                  length2: 5
              }
          }
      }]
  };`
  },
  {
    code: `option = {
      backgroundColor: 'rgb(0,59,129)',
      tooltip: {
          show: false
      },
      color: ['#2a2ac7', '#3657c8', '#53b1f9'],
      legend: {
          left: 'center',
          top: 20,
          itemGap: 20,
          textStyle: {
              color: '#fff',
              fontSize: 12
          }
      },
      series: [
          {
              type: 'pie',
              radius: '55%',
              // top: '6%',
              data: [
                  { value: 1048, name: '供地盘活' },
                  { value: 735, name: '转让盘活' },
                  { value: 580, name: '增容改进' }
              ],
              label: {
                  normal: {
                      show: true,
                      formatter: '{b|{b}}\\n{d|{d}%}',
                      rich: {
                          b: {
                              color: '#fff',
                              fontSize: 12,
                              align: 'center',
                              padding: [0, 0, 5, 0]
                          },
                          c: {
                              fontSize: 12,
                              color: '#10d0f5',
                              fontWeight: '700'
                          },
                          d: {
                              fontSize: 12,
                              color: '#baeaf3',
                              fontWeight: '700'
                          }
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: true,
                      length: 20,
                      length2: 50,
                      lineStyle: {
                          color: '#3874b5',
                          width: 2
                      }
                  }
              }
          }
      ]
  };`
  },
  {
    code: `var echartData = [
      { name: "农用地", value: 134 },
      { name: "建设用地", value: 30 },
      { name: "未利用", value: 43 }
    ];
    var valArray = {};
    echartData.forEach(function (item) {
      valArray[item.name] = item.value;
    })
    var total = echartData.reduce((a, b) => {
      return a + b.value * 1;
    }, 0);
    option = {
      backgroundColor: '#111b41',
      color: ["#0e63db", "#f6af4f", "#7a6af5"],
      title: [
        {
          text: "{name|" + "总量" + "}\\n{val|" + total + "}\\n{unit|" + "万亩" + "}",
          top: "center",
          left: "30%",
          textStyle: {
            rich: {
              name: {
                fontSize: 12,
                fontWeight: "normal",
                color: "#b5b2c8",
                padding: [0, 0, 10, 0]
              },
              val: {
                fontSize: 18,
                fontFamily: "impact",
                color: "#6acdf7",
                padding: [0, 0, 10, 0]
              },
              unit: {
                fontSize: 12,
                color: "#6acdf7"
              }
            },
          },
        }
      ],
      tooltip: {
        show: true
      },
      legend: {
        icon: "circle",
        orient: "vertical",
        top: "middle",
        right: '10%',
        itemWidth: 30,
        itemGap: 20,
        formatter: item => {
          return ("{name1|" + item + "}" + "\\n{name2|" + valArray[item] + "}{unit|" + "万亩" + "}")
        },
        textStyle: {
          rich: {
            name1: {
              color: '#fff',
              fontSize: '16',
              padding: [25, 0, 5, 0]
            },
            name2: {
              color: '#6ed4ff',
              fontSize: '16',
              fontFamily: 'impact'
            },
            unit: {
              color: '#6ed4ff',
              fontSize: '16',
              padding: [4, 0, 0, 2]
            }
          },
        }
      },
      series: [
        {
          type: "pie",
          radius: ["18%", "36%"],
          center: ["32%", "50%"],
          data: echartData,
          hoverAnimation: false,
          labelLine: {
            normal: {
              length: -20,
              length2: 0,
              lineStyle: {
                color: "transparent",
              },
            },
          },
          label: {
            position: 'outside',
            percentPrecision: 1,
            align: 'center',
            formatter: name => {
              if (name.name === "农用地") {
                return ("{name1|" + name.percent.toFixed(2) + "%}")
              } else if (name.name === "建设用地") {
                return ("{name2|" + name.percent.toFixed(2) + "%}")
              } else {
                return ("{name3|" + name.percent.toFixed(2) + "%}")
              }
            },
            rich: {
              name1: {
                color: '#fff',
                align: 'center',
                borderWidth: 1,
                borderRadius: 18,
                shadowBlur: 10,
                fontWeight: '700',
                shadowColor: 'rgba(63,82,126,0.3)',
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 1,
                    color: 'rgb(63,82,126,0.7)'
                  }, {
                    offset: 0,
                    color: 'rgb(63,82,126,0.2)'
                  }],
                },
                fontSize: 12,
                width: 50,
                height: 36,
                lineHeight: 36
              },
              name2: {
                color: '#fff',
                align: 'center',
                borderWidth: 1,
                borderRadius: 18,
                shadowBlur: 10,
                fontWeight: '700',
                shadowColor: 'rgba(255,255,255,0.3)',
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 1,
                    color: 'rgb(63,82,126,0.7)'
                  }, {
                    offset: 0,
                    color: 'rgb(63,82,126,0.1)'
                  }],
                },
                fontSize: 12,
                width: 50,
                height: 36,
                lineHeight: 36
              },
              name3: {
                color: '#fff',
                align: 'center',
                borderWidth: 1,
                borderRadius: 18,
                shadowBlur: 10,
                fontWeight: '700',
                shadowColor: 'rgba(255,255,255,0.3)',
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                    offset: 1,
                    color: 'rgb(63,82,126,0.7)'
                  }, {
                    offset: 0,
                    color: 'rgb(63,82,126,0.2)'
                  }],
                },
                fontSize: 12,
                width: 50,
                height: 36,
                lineHeight: 36
              },
            },
          },
        },
      ]
    };`
  }
]

pieDemoJS.forEach(v => {
  v.id = genId()
})
export default pieDemoJS