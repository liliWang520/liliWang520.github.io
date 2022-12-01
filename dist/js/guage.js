import genId from './random.js'
let guageDemoJS = [
    {
        code: `option = {
            series: [{
                type: 'gauge',
                progress: {
                    show: true,
                    width: 5
                },
                axisLine: {
                    lineStyle: {
                        width: 5
                    }
                },
                radius: '50%',
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 5,
                    lineStyle: {
                        width: 1,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 10,
                    color: '#999',
                    fontSize: 10
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 10,
                    itemStyle: {
                        borderWidth: 4
                    }
                },
                grid: {
                    top: '2%',
                    left: '3%',
                    right: '4%',
                    bottom: '12%',
                    containLabel: true
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 18,
                    offsetCenter: [0, '70%']
                },
                data: [{
                    value: 70
                }]
            }]
        };
        `
    },
    {
        code: `var _panelImageURL = '/img/custom-gauge-panel.png';
var _valOnRadianMax = 100;
var _outerRadius = 90;
var _innerRadius = 75;
var _pointerInnerRadius = 20;
var _insidePanelRadius = 60;

function renderItem(params, api) {
  var valOnRadian = api.value(1);
  var coords = api.coord([api.value(0), valOnRadian]);
  var polarEndRadian = coords[3];
  var imageStyle = {
    image: _panelImageURL,
    x: params.coordSys.cx - _outerRadius,
    y: params.coordSys.cy - _outerRadius,
    width: _outerRadius * 2,
    height: _outerRadius * 2
  };

  return {
    type: 'group',
    children: [{
      type: 'image',
      style: imageStyle,
      clipPath: {
        type: 'sector',
        shape: {
          cx: params.coordSys.cx,
          cy: params.coordSys.cy,
          r: _outerRadius,
          r0: _innerRadius,
          startAngle: 0,
          endAngle: -polarEndRadian,
          transition: 'endAngle',
          enterFrom: { endAngle: 0 }
        }
      }
    }, {
      type: 'image',
      style: imageStyle,
      clipPath: {
        type: 'polygon',
        shape: {
          points: makePionterPoints(params, polarEndRadian)
        },
        extra: {
          polarEndRadian: polarEndRadian,
          transition: 'polarEndRadian',
          enterFrom: { polarEndRadian: 0 }
        },
        during: function (apiDuring) {
          apiDuring.setShape(
            'points',
            makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
          );
        }
      }
    }, {
      type: 'circle',
      shape: {
        cx: params.coordSys.cx,
        cy: params.coordSys.cy,
        r: _insidePanelRadius
      },
      style: {
        fill: '#fff',
        shadowBlur: 25,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(76,107,167,0.4)'
      }
    }, {
      type: 'text',
      extra: {
        valOnRadian: valOnRadian,
        transition: 'valOnRadian',
        enterFrom: { valOnRadian: 0 }
      },
      style: {
        text: makeText(valOnRadian),
        fontSize: 26,
        fontWeight: 600,
        x: params.coordSys.cx,
        y: params.coordSys.cy,
        fill: 'rgb(0,50,190)',
        align: 'center',
        verticalAlign: 'center',
        enterFrom: { opacity: 0 }
      },
      during: function (apiDuring) {
        apiDuring.setStyle('text', makeText(apiDuring.getExtra('valOnRadian')));
      }
    }]
  };
}

function convertToPolarPoint(renderItemParams, radius, radian) {
  return [
    Math.cos(radian) * radius + renderItemParams.coordSys.cx,
    -Math.sin(radian) * radius + renderItemParams.coordSys.cy
  ];
}

function makePionterPoints(renderItemParams, polarEndRadian) {
  return [
    convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
    convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian + Math.PI * 0.03),
    convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
  ];
}

function makeText(valOnRadian) {
  // Validate additive animation calc.
  if (valOnRadian < -10) {
    alert('illegal during val: ' + valOnRadian);
  }
  return (valOnRadian / _valOnRadianMax * 100).toFixed(0) + '%';
}

option = {
  dataset: {
    source: [[1, 75]]
  },
  tooltip: {
    show: false
  },
  angleAxis: {
    type: 'value',
    startAngle: 0,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: { show: false },
    min: 0,
    max: _valOnRadianMax
  },
  radiusAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: { show: false }
  },
  polar: {},
  series: [{
    type: 'custom',
    coordinateSystem: 'polar',
    renderItem: renderItem
  }]
};
`
    },
    {
        code: `option = {
            series: [
                {
                    color: '#ff6f6f',
                    type: 'gauge',
                    radius: '55%',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false
                    },
                    axisLine: {
                        lineStyle: {
                            width: 8
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: [89],
                    title: {
                        fontSize: 30
                    },
                    detail: {
                        fontSize: 50,
                        color: 'auto',
                        formatter: '{value}%',
                        offsetCenter: [0, 0]
                    }
                }
            ]
        }`
    },
    {
        code: `
      var data = 33.5;
      option = {
        backgroundColor: 'rgb(21,43,78)',
        tooltip: {
          show: false,
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: '占比',
          type: 'pie',
          avoidLabelOverlap: false,
          clockWise: false,
          radius: ['40%', '50%'],
          label: {
            normal: {
              formatter: '{c}%',
              show: false,
              position: 'center'
            }
          },
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: data,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#059bdc'
              }, {
                offset: 0.5, color: '#05e077'
              }, {
                offset: 1, color: '#cee817'
              }]),
            },
            label: { show: true, fontSize: '16', color: '#fffb0f' }
          }, {
            value: 100 - data,
            hoverAnimation: false,
            itemStyle: { color: '#374480' }
          }],
        }]
      };`
    },
    {
        code: `option = {
        series: [
            {
                color: '#ff6f6f',
                type: 'gauge',
                radius: '55%',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false
                },
                axisLine: {
                    lineStyle: {
                        width: 18
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                data: [77],
                title: {
                    fontSize: 30
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#059bdc'
                    }, {
                        offset: 0.5, color: '#05e077'
                    }, {
                        offset: 1, color: '#cee817'
                    }]),
                },
                detail: {
                    fontSize: 50,
                    color: 'auto',
                    formatter: '{value}%',
                    offsetCenter: [0, 0]
                }
            }
        ]
    }`
    },
    {
        code: `var imgUrl = '/img/liquidFill.png'
      option = {
          backgroundColor: 'rgb(9,29,55)',
          series: [{
              name: '水波球',
              type: 'liquidFill',
              radius: '86',
              data: [0.90],
              color: [{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#20dd9d' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#20dd9d' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
              }],
              label: {
                  normal: {
                      formatter: function (params) {
                          console.log(params);
                          return parseInt(params.value * 100) + '\\n' + '{ms|%}';
                      },
                      textStyle: {
                          color: '#fff',
                          insideColor: '#f00',
                          fontSize: 24,
                          lineHeight: 30,
                          fontFamily: 'impact',
                          fontWeight: 'normal'
                      },
                      rich: {
                          ms: {
                              fontSize: 12,
                              lineHeight: 24
                          }
                      }
                  },
                  show: true
              },
              backgroundStyle: {
                  borderWidth: 0, //内边框宽度
                  borderColor: '#207adc', //背景内边框
                  color: 'transparent', //背景颜色
                  // shadowColor: '#0ff', //阴影
                  shadowBlur: 0, //阴影模糊
              },
              outline: {
                  borderDistance: 0, //边框距离
                  itemStyle: {
                      borderWidth: 0,
                      borderColor: '#f00',
                      shadowBlur: 0,
                      // shadowColor: '#0ff'
                  }
              }
          }],
          graphic: {
              elements: [{
                  type: "image",
                  z: 3,
                  style: {
                      image: imgUrl,
                      width: '132',
                      height: '130'
                  },
                  left: 'center',
                  top: '42.6%',
              }]
          },
      };`
    },
    {
        code: `let value = 0.45;
      let data = [value, value, value];
      option = {
          backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
              offset: 0,
              color: '#431ab8'
          }, {
              offset: 1,
              color: '#471bba'
          }]),
          title: {
              text: (value * 100).toFixed(0) + '{a|%}',
              textStyle: {
                  fontSize: 50,
                  fontFamily: 'Microsoft Yahei',
                  fontWeight: 'normal',
                  color: '#bcb8fb',
                  rich: {
                      a: {
                          fontSize: 28,
                      }
                  }
              },
              x: 'center',
              y: '35%'
          },
          graphic: [{
              type: 'group',
              left: 'center',
              top: '60%',
              children: [{
                  type: 'text',
                  z: 100,
                  left: '10',
                  top: 'middle',
                  style: {
                      fill: '#aab2fa',
                      text: '使用占比',
                      font: '20px Microsoft YaHei'
                  }
              }]
          }],
          series: [{
              type: 'liquidFill',
              radius: '50%',
              center: ['50%', '50%'],
              //  shape: 'roundRect',
              data: data,
              backgroundStyle: {
                  color: {
                      type: 'linear',
                      x: 1,
                      y: 0,
                      x2: 0.5,
                      y2: 1,
                      colorStops: [{
                          offset: 1,
                          color: 'rgba(68, 145, 253, 0)'
                      }, {
                          offset: 0.5,
                          color: 'rgba(68, 145, 253, .25)'
                      }, {
                          offset: 0,
                          color: 'rgba(68, 145, 253, 1)'
                      }],
                      globalCoord: false
                  },
              },
              outline: {
                  borderDistance: 0,
                  itemStyle: {
                      borderWidth: 20,
                      borderColor: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(69, 73, 240, 0)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(69, 73, 240, .25)'
                          }, {
                              offset: 1,
                              color: 'rgba(69, 73, 240, 1)'
                          }],
                          globalCoord: false
                      },
                      shadowBlur: 10,
                      shadowColor: '#000',
                  }
              },
              itemStyle: {
                  color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 1,
                          color: 'rgba(58, 71, 212, 0)'
                      }, {
                          offset: 0.5,
                          color: 'rgba(31, 222, 225, .2)'
                      }, {
                          offset: 0,
                          color: 'rgba(31, 222, 225, 1)'
                      }],
                      globalCoord: false
                  },
              },
              label: {
                  normal: {
                      formatter: '',
                  }
              }
          },]
      };`
    },
    {
        code: `let value = 0.45;
      let data = [value, value, value];
      option = {
          backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
              offset: 0,
              color: '#431ab8'
          }, {
              offset: 1,
              color: '#471bba'
          }]),
          title: {
              text: (value * 100).toFixed(0) + '{a|%}',
              textStyle: {
                  fontSize: 50,
                  fontFamily: 'Microsoft Yahei',
                  fontWeight: 'normal',
                  color: '#bcb8fb',
                  rich: {
                      a: {
                          fontSize: 28,
                      }
                  }
              },
              x: 'center',
              y: '35%'
          },
          graphic: [{
              type: 'group',
              left: 'center',
              top: '60%',
              children: [{
                  type: 'text',
                  z: 100,
                  left: '10',
                  top: 'middle',
                  style: {
                      fill: '#aab2fa',
                      text: '使用占比',
                      font: '20px Microsoft YaHei'
                  }
              }]
          }],
          series: [{
              type: 'liquidFill',
              radius: '50%',
              center: ['50%', '50%'],
               shape: 'roundRect',
              data: data,
              backgroundStyle: {
                  color: {
                      type: 'linear',
                      x: 1,
                      y: 0,
                      x2: 0.5,
                      y2: 1,
                      colorStops: [{
                          offset: 1,
                          color: 'rgba(68, 145, 253, 0)'
                      }, {
                          offset: 0.5,
                          color: 'rgba(68, 145, 253, .25)'
                      }, {
                          offset: 0,
                          color: 'rgba(68, 145, 253, 1)'
                      }],
                      globalCoord: false
                  },
              },
              outline: {
                  borderDistance: 0,
                  itemStyle: {
                      borderWidth: 20,
                      borderColor: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(69, 73, 240, 0)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(69, 73, 240, .25)'
                          }, {
                              offset: 1,
                              color: 'rgba(69, 73, 240, 1)'
                          }],
                          globalCoord: false
                      },
                      shadowBlur: 10,
                      shadowColor: '#000',
                  }
              },
              itemStyle: {
                  color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                          offset: 1,
                          color: 'rgba(58, 71, 212, 0)'
                      }, {
                          offset: 0.5,
                          color: 'rgba(31, 222, 225, .2)'
                      }, {
                          offset: 0,
                          color: 'rgba(31, 222, 225, 1)'
                      }],
                      globalCoord: false
                  },
              },
              label: {
                  normal: {
                      formatter: '',
                  }
              }
          },]
      };`
    },
    {
        code: `option = {
        series: [{
            type: 'liquidFill',
            name: '贴补资金剩余',
            data: [0.40],
            radius: '50%',
            color: ['#1890FF'],
            backgroundStyle: {
                color: '#fff'
            },
            label: {
                show: true,
                //						formatter: '{a}\\n34%',
                color: '#000',
                insideColor: '#333',
                fontSize: 22,
                fontWeight: '400',
                position: ['50%', '40%']
            },
            outline: {
                borderDistance: 2,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#1890FF'
                }
            }
        }]
    };`
    },
    {
        code: `option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                //          restore: {},
                //          saveAsImage: {}
            }
        },
        series: [{
            name: '业务指标',
            type: 'gauge',
            radius: '100%',
            axisLabel: {
                formatter: '{value}%',
            },
            splitNumber: 5, //仪表盘刻度的分割段数,默认10
            splitLine: {
                length: 15, //分隔线线长
            },
            axisLine: {
                lineStyle: {
                    width: 15, //轴线宽度。
                    color: [
                        [1, '#379EFD']
                    ]
                }
            },
            axisTick: {
                distance: -15,
                length: 5,
                lineStyle: {
                    color: '#fff',
                    width: 1
                }
            },
            splitLine: {
                distance: -15,
                length: 15,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            detail: {
                fontSize: 12,
                color: '#000',
                formatter: '{value}%',
                //						offsetCenter: [0, '30%'], //相对于仪表盘中心的偏移位置
            },
            data: [{
                label: {
    
                    fontSize: 12,
                },
                value: 50,
                name: '跳出率'
            }]
        }]
    };
    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
    }, 2000);`
    },
    {
        code: `option = {
            series: [
              {
                name: '土地利用规划',
                type: 'gauge',
                z: 3,
                min: -50,
                max: 50,
                splitNumber: 5,
                radius: '80%',
                startAngle: 150,
                endAngle: 30,
                center: ['50%', '50%'],
                data: [{ value: 0, name: '耕地保有量' }],
                axisLine: {
                  lineStyle: {
                    width: 8,
                    color: [[0.5, '#F00'], [1, '#38b024']]
                  }
                },
                axisTick: {
                  length: 12,
                  lineStyle: {
                    color: 'auto'
                  }
                },
                axisLabel: {
                  textStyle: {
                    fontSize: '0%'
                  }
                },
                splitLine: {
                  length: 15,
                  lineStyle: {
                    color: 'auto'
                  }
                },
                title: {
                  offsetCenter: [0, '-30%'],
                  textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    fontStyle: 'normal'
                  }
                },
                detail: {
                  textStyle: {
                    fontWeight: 'bolder',
                    fontSize: 16
                  },
                  offsetCenter: [0, '10%']
                },
                pointer: {
                  length: '60%',
                  width: 4
                }
              }
            ]
          };
          `
    }
]

guageDemoJS.forEach(v => {
    v.id = genId()
})
export default guageDemoJS


