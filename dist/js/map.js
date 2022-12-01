import genId from './random.js'
let mapDemoJS = [
    {
        code: `var dataUrl = "./data/jiangsu/320000.json";
        $.ajax({
            async: false,
            url: dataUrl,
            type: 'GET',
            timeout: 30000,
            success: function (geoJson) {
                echarts.registerMap("jiangsusheng", geoJson);
                option = {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}： {c}",
                    },
                    visualMap: {
                        min: 800,
                        max: 50000,
                        text: ["高", "低"],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ["#8dc1f1", "#0e31a4"],
                        },
                        textStyle: {
                            color: "#fff",
                        },
                        left: 40,
                        bottom: 40,
                    },
                    geo: [
                        // 叠地图
                        {
                            map: "jiangsusheng",
                            top: "9%",
                            left: "9%",
                            aspectScale: 0.9,
                            zlevel: 4,
                            itemStyle: {
                                color: "#2760c3", // 背景
                                borderWidth: "1", // 边框宽度
                                borderColor: "#2760c3", // 边框颜色
                                shadowColor: "#2760c3",
                            },
                            emphasis: {
                                disabled: true,
                            },
                        },
                    ],
                    series: [
                        {
                            map: "jiangsusheng",
                            name: "",
                            type: "map",
                            zlevel: 6,
                            aspectScale: 0.9,
                            top: "7%",
                            selectedMode: false,
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    borderColor: "#37ebfd",
                                    shadowColor: "#64b2df",
                                    shadowBlur: 8,
                                    areaColor: {
                                        type: "radial",
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.8,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "rgba(255, 0, 0, 0.5)", // 0% 处的颜色
                                            },
                                        ],
                                        globalCoord: false, // 缺省为 false
                                    },
                                },
                            },
                            label: {
                                show: true,
                                color: "#fff",
                                itemStyle: {
                                    color: "#fff",
                                },
                            },
                            data: [
                                { name: "南京市", value: 20057.34 },
                                { name: "无锡市", value: 15477.48 },
                                { name: "徐州市", value: 31686.1 },
                                { name: "常州市", value: 6992.6 },
                                { name: "苏州市", value: 44045.49 },
                                { name: "南通市", value: 40689.64 },
                                { name: "连云港市", value: 37659.78 },
                                { name: "淮安市", value: 45180.97 },
                                { name: "盐城市", value: 55204.26 },
                                { name: "扬州市", value: 21900.9 },
                                { name: "镇江市", value: 4918.26 },
                                { name: "泰州市", value: 5881.84 },
                                { name: "宿迁市", value: 4178.01 },
                            ],
                            emphasis: {
                                disabled: false,
                                itemStyle: {
                                    areaColor: "#102a7d",
                                },
                                label: {
                                    show: true,
                                    color: "#fff",
                                    itemStyle: {
                                        color: "#2a4a69",
                                    },
                                },
                            },
                        },
                    ],
                };
            }
        })
        `
    },
    {
        code: `var dataUrl = "./data/gansu/621000.json";
        var dataArr = [
            { name: "合水县", hx: "2323", nt: "345", bj: "75", gd: "42", itemStyle: { normal: { areaColor: '#d2eefc' } } },
            { name: "正宁县", hx: "346565", nt: "435", bj: "75", gd: "75", itemStyle: { normal: { areaColor: '#b5e6eb' } } },
            { name: "宁县", hx: "23545", nt: "8768", bj: "75", gd: "75", itemStyle: { normal: { areaColor: '#c1e4f5' } } },
            { name: "镇原县", hx: "6774", nt: "566", bj: "42", gd: "45", itemStyle: { normal: { areaColor: '#b5e6eb' } } },
            { name: "西峰区", hx: "23617", nt: "2121", bj: "24", gd: "95", itemStyle: { normal: { areaColor: '#b3fcf8' } } },
            { name: "庆城县", hx: "75675", nt: "345", bj: "77", gd: "41", itemStyle: { normal: { areaColor: '#b0dffa' } } },
            { name: "环县", hx: "78978", nt: "89", bj: "75", gd: "25", itemStyle: { normal: { areaColor: '#c1e4f5' } } },
            { name: "华池县", hx: "78978", nt: "789", bj: "75", gd: "35", itemStyle: { normal: { areaColor: '#b5e6eb' } } }
        
        ];
        $.ajax({
            async: false,
            type: 'get',
            url: dataUrl,
            dataType: 'json',
            success: function (geoJson) {
        
                echarts.registerMap('qingyangshi', geoJson);
                option = {
                    tooltip: {
                        trigger: "item",
                        show: false
                    },
                    geo: [
                        {
                            map: 'qingyangshi',
                            top: '7.5%',
                            left: '10%',
                            aspectScale: 1,
                            zlevel: 4,
                            itemStyle: {
                                color: '#7091a7', // 背景
                                borderWidth: '1', // 边框宽度
                                borderColor: '#7cdcf8', // 边框颜色
                                shadowColor: '#75afc7',
                            }
                        },
                        {
                            map: 'qingyangshi',
                            top: '8%',
                            left: '10.5%',
                            aspectScale: 1,
                            zlevel: 3,
                            itemStyle: {
                                color: '#a5b8c7', // 背景
                                borderWidth: '1', // 边框宽度
                                borderColor: '#a6c8d8', // 边框颜色
                                shadowColor: '#75afc7',
                            }
                        },
                        {
                            map: 'qingyangshi',
                            top: '8.5%',
                            left: '11%',
                            aspectScale: 1,
                            zlevel: 2,
                            itemStyle: {
                                color: '#c0cdd8', // 背景
                                borderWidth: '1', // 边框宽度
                                borderColor: '#c1e1ee', // 边框颜色
                                shadowColor: '#75afc7',
                            }
                        }
        
                    ],
                    series: [
                        {
                            type: 'map',
                            zlevel: 6,
                            aspectScale: 1,
                            top: '7%',
                            itemStyle: {
                                normal: {
                                    // areaColor: '#b5e6eb',
                                    borderWidth: 1,
                                    borderColor: '#60b9e0',
                                    shadowColor: '#7fdcf8',
                                    shadowBlur: 3
                                }
        
                            },
                            label: {
                                show: true,
                                color: '#2a4a69',
                                itemStyle: {
                                    color: '#2a4a69'
                                }
                            },
                            // selectedMode:false,
                            select: {
                                itemStyle: {
                                    areaColor: "#5eaaf0",
                                },
                                label: {
                                    show: true,
                                    color: '#fff',
                                    itemStyle: {
                                        color: '#2a4a69'
                                    },
        
                                    width: 320,
                                    height: 240,
                                    backgroundColor: {
                                        image: '/img/map-3.png'
                                    },
                                    padding: [10, 20, 10, 20],
                                    position: ['30%', '20%'],
                                    formatter: function (params) {
                                        var top = '{name|' + params.data.name + '}{unit|单位：亩}\\n';
                                        var arr = [
                                            '{listStyle|生态保护红线面积：}{listWord|' + params.data.hx + '}',
                                            '{listStyle|永久基本农田面积：}{listWord|' + params.data.nt + '}',
                                            '{listStyle|城镇开发边界面积：}{listWord|' + params.data.bj + '}',
                                            '{listStyle|耕地面积：}{listWord|' + params.data.gd + '}'
                                        ]
                                        return top + arr.join('\\n');
        
                                    },
                                    rich: {
                                        name: {
                                            color: '#2a7bff',
                                            fontSize: 18,
                                            lineHeight: 30,
                                            align: 'left'
                                        },
                                        unit: {
                                            color: '#666666',
                                            align: 'right',
                                            fontSize: 12
                                        },
                                        listStyle: {
                                            color: '#333333',
                                            fontSize: 14,
                                            lineHeight: 28,
                                            align: 'left'
                                        },
                                        listWord: {
                                            color: '#faa831',
                                            fontSize: 20,
                                            lineHeight: 28,
                                            align: 'right',
                                            fontFamily: 'Impact'
                                        }
                                    }
                                },
                            },
                            map: 'qingyangshi',
                            data: dataArr,
                            emphasis: {
                                disabled: true,
                                itemStyle: {
                                    areaColor: '#5eaaf0',
                                },
                                // focus: 'self',
                                label: {
                                    show: true,
                                    color: '#fff',
                                    itemStyle: {
                                        color: '#2a4a69'
                                    },
        
                                    width: 320,
                                    height: 240,
                                    backgroundColor: {
                                        // image: '../images/map-3.png'
                                        image: '/img/map-3.png'
                                    },
                                    padding: [10, 20, 10, 20],
                                    position: ['30%', '20%'],
                                    formatter: function (params) {
                                        var top = '{name|' + params.data.name + '}{unit|单位：亩}\\n';
                                        var arr = [
                                            '{listStyle|生态保护红线面积：}{listWord|' + params.data.hx + '}',
                                            '{listStyle|永久基本农田面积：}{listWord|' + params.data.nt + '}',
                                            '{listStyle|城镇开发边界面积：}{listWord|' + params.data.bj + '}',
                                            '{listStyle|耕地面积：}{listWord|' + params.data.gd + '}'
                                        ]
                                        return top + arr.join('\\n');
        
                                    },
                                    rich: {
                                        name: {
                                            color: '#2a7bff',
                                            fontSize: 18,
                                            lineHeight: 30,
                                            align: 'left'
                                        },
                                        unit: {
                                            color: '#666666',
                                            align: 'right',
                                            fontSize: 12
                                        },
                                        listStyle: {
                                            color: '#333333',
                                            fontSize: 14,
                                            lineHeight: 28,
                                            align: 'left'
                                        },
                                        listWord: {
                                            color: '#faa831',
                                            fontSize: 20,
                                            lineHeight: 28,
                                            align: 'right',
                                            fontFamily: 'Impact'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        })`
    },
    {
        code: `var dataUrl = "./data/guizhou/520000.json";
        $.ajax({
            async: false,
            url: dataUrl,
            type: 'GET',
            timeout: 30000,
            success: function (geoJson) {
                echarts.registerMap("GZ", geoJson);
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (p / km2)'
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    visualMap: {
                        min: 800,
                        max: 60000,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    },
                    series: [
                        {
                            name: '贵州省人口密度',
                            type: 'map',
                            map: 'GZ',
                            label: {
                                show: true
                            },
                            layoutSize: 500,
        
                            zoom: 1.15,
                            roam: true,
                            scaleLimit: {
                                min: 1.15,
                                max: 5,
                            },
                            data: [
                                { name: '贵阳市', value: 2057.34 },
                                { name: '六盘水市', value: 1477.48 },
                                { name: '遵义市', value: 31686.1 },
                                { name: '安顺市', value: 6992.6 },
                                { name: '毕节市', value: 44045.49 },
                                { name: '铜仁市', value: 4689.64 },
                                { name: '黔西南布依族苗族自治州', value: 37659.78 },
                                { name: '黔东南苗族侗族自治州', value: 4580.97 },
                                { name: '黔南布依族苗族自治州', value: 55204.26 }
                            ]
                        }
                    ]
                }
            }
        })
        `
    },
    {
        code: `var dataUrl = "./data/jiangsu/320400.json";
        $.ajax({
            async: false,
            url: dataUrl,
            type: 'GET',
            timeout: 30000,
            success: function (geoJson) {
                echarts.registerMap('CZ', geoJson);
                option = {
                    backgroundColor: '#1a2f84',
                    tooltip: {},
                    geo: {
                        tooltip: {
                            show: false
                        },
                        type: 'map',
                        map: 'CZ',
                        roam: true,
                        itemStyle: {
                            areaColor: '#1a2f84',
                            borderColor: '#cefbff',
                            borderWidth: 3
                        },
                        label: {
                            show: true,
                            color: '#cdf9ff',
                            itemStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: '#1a2f84',
                            },
                            focus: 'self',
                            label: {
                                color: '#fff',
                            }
                        }
                    },
        
                    series: [
                        {
                            tooltip: {
                                show: true
                            },
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            geoIndex: 0,
                            symbolSize: 20,
                            itemStyle: {
                                color: '#b02a02'
                            },
                            symbol: 'image:/./data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAYAAAAMq2gFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEI1RDQ4MjU5NkJCMTFFQjk5QkM4MzZDRDVBRjQ2Q0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEI1RDQ4MjY5NkJCMTFFQjk5QkM4MzZDRDVBRjQ2Q0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QjVENDgyMzk2QkIxMUVCOTlCQzgzNkNENUFGNDZDQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QjVENDgyNDk2QkIxMUVCOTlCQzgzNkNENUFGNDZDQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmn1R54AAAT4SURBVHjatFZ7TJVlGP99l8PlHA6XcwKhISo0ETVxKTE2DClnuoSQP0pzqYuimc6cZq0/LFxtbV6SytG05izX1loZbjkvKxGhMYUsMxEv4I0CDnGCA4fb4fvenvc7h8P5DnA8p8u7/fa9t+f3e5/3eb/3fQTGGO5TZhKKCEsJswlWT38XoZFwmlBJuB6IRAgglEd4B/Y7i9jVM0BLHZitGRjocY9GxkBISANScyBkPA5YptVQ7w5CdbBCEYRyQql69HWBXTmJYIowZxnE4l2c7CBhC2EwkJCF8J16/vMc9Yc9gMoQUhEFiE+8BjF7bR21VhDsEwkZCWfUuoPZytkP9as1J0BcsArCdNqmpIe1PtZ2Gex2HdSfvgTrtenmS4s3Q8wpPU9V2lP0+wt9otQfflGp2q1fZMZyyE+WAWFRWlup+YisBEi5m9wThvswcvJtqE36LZbyt0PKWv8pVV/SeHwCXzJybheYpHohpOdDLtjjFeFFtd+A2uVzwGhMLtyrzfW15Vyc08PtFXrXdWKrwGSaJDMNMEfDUFA+LgzSI89p8C+GFfsAk9lrz7k4J+fm4zIhU+1synXdPD4myw3nraG27G2z7jsYPPo8mLPDHTfTFEQUH4EQO82zAgPE+Wvgqq8Y8544pc7SXDF+VianLh5pOaVzm0NKXTymyhQMVK4CU/sQ8ew3Gnh9oHK1Nub1lmz8eTg31+BCi5TOeh+X3RCiEr0ESsdFqMOdiFj5BcSEuRp4XR22aWPe0xmVNI5HsV3gQ4/xvZmlOJvdcdEV1ScwYW5DV8+Yk1TXbORwHxtlHI/S38I/6VzIqgzRtSWp+gm99yAb3V5J8ZkQ4mei79RqGPP2a3391ZsgPZBBmDdm47gH1Y8HnJs0tGhrq/C7BVytJyBPyfK2Tcu+hrNqHZy1G7W2nLQQpvzPxtkwyW9nROa9Gf7oPrYwSe23+U0IQ1zRBQjhFr2njha3l9Gpun42ZMdflY/Sgof1NMYExD7d0MYPQ5MYlwZmYHpIQ3DUrh3/H5GAvwgvjh/XaTb+PGKsNvcaF6qR47PGHUsOl+Nn9JwronjdnPQeVXpvoKdmJVw9FyfkkBO07a/hW5c54mj8xV69JODFHJ64HIa4BRAjk91ncqAVLnsDhjoCPyOWvO8hR8+ezw/DJarUhicX5A62HfNOiExZD0PMHDibP6bvPE1oxHEZI11u78RwK8KnFtIVIpE3V2BK26B9B+4eHnvYEgu5SC3XGL29+cVX1X46UYDnNrdkfYUwSx7UoXYIBisE0TDhihkFn7nsJJyIYXs17PXPeP5eAYlL25nnqTjr+0wccN6tKHXcLMN/UaIfKoMp5RX+2r484cPXe3tvtuPWe/9OZMabME/fNunDB0+Gc7y3tSK759ZbfGNClBAQM2MnzMkbuchTnkxp0uQkkrCPJydd10qE/q5vg5IwWotgTT80mpxsHfUk2HRrt6Ntf1b3vR0BRWKn7kR00uYGqm7ngQ81rxuNW7397huze20HJpxgTngBlpT3m6jK/8y+f5JAjpYMQkPb9SXGIWe9biAsMhMPzjrHtyiH8GvATCyI7b9K2GCOLwETmA68j8qr9xNx/3DkUZA41G37gDVfitLQbSunLnYkWPtQhIyEy3+2bWOdv2/hIo0E0/8hxJFB6CM4CXNDsZVD/CO1eHnStN9CMfxbgAEAlb0eLFSVUowAAAAASUVORK5CYII=',
                            encode: {
                                tooltip: 2
                            },
                            data: [
                                [119.921468, 31.952029, 1000],
                                [119.981259, 31.884846, 200],
                                [119.848166, 31.979354, 300],
                                [119.906232, 31.893308, 777],
                                [119.839255, 31.843752, 546],
                                [119.97551, 31.859947, 203],
                                [119.823157, 31.902734, 223],
                            ]
                        }
                    ]
                }
            }
        });
        `
    },
    {
        code: `let mapUrl = "./data/jiangsu/";

        // 地图
        var changzhou = mapUrl + '320400.json';
        var tianning = mapUrl + '320402.json';
        var zhonglou = mapUrl + '320404.json';
        var xinbei = mapUrl + '320411.json';
        var wujin = mapUrl + '320412.json';
        var jintan = mapUrl + '320413.json';
        var liyang = mapUrl + '320481.json';
        
        echarts.extendsMap = function (chart, opt) {
            // 实例
            var cityMap = {
                "天宁区": tianning,
                "钟楼区": zhonglou,
                "新北区": xinbei,
                "武进区": wujin,
                "金坛区": jintan,
                "溧阳市": liyang
            }
        
            var defaultOpt = {
                mapName: 'china',     // 地图展示
                goDown: false,        // 是否下钻
                bgColor: '#404a59',   // 画布背景色
                activeArea: [],       // 区域高亮,同echarts配置项
                data: [],
                // 下钻回调(点击的地图名、实例对象option、实例对象)
                callback: function (name, option, instance) {
                    console.log('callback');
                }
            };
            if (opt) opt = this.util.extend(defaultOpt, opt);
        
            // 层级索引
            var name = [opt.mapName];
            var idx = 0;
            var pos = {
                leftPlus: 115,
                leftCur: 150,
                left: 198,
                top: 50
            };
        
            var line = [[0, 0], [8, 8], [0, 16]];
            // style
            var style = {
                font: '18px "Microsoft YaHei", sans-serif',
                textColor: '#333',
                lineColor: 'transparent'
            };
        
            var handleEvents = {
                /**
                 * i 实例对象
                 * o option
                 * n 地图名
                 */
                resetOption: function (i, o, n) {
                    console.log('ion', i, o, n);
                    var breadcrumb = this.createBreadcrumb(n);
                    var j = name.indexOf(n);
                    var l = o.graphic.length;
                    if (j < 0) {
                        o.graphic.push(breadcrumb);
                        o.graphic[0].children[0].shape.x2 = 145;
                        o.graphic[0].children[1].shape.x2 = 145;
                        if (o.graphic.length > 2) {
                            for (var x = 0; x < opt.data.length; x++) {
                                if (n === opt.data[x].name) {
                                    o.series[0].data = handleEvents.initSeriesData(n)
                                    break;
                                } else o.series[0].data = [];
                            }
                        }
                        name.push(n);
                        idx++;
                    } else {
                        console.log("o.graphic", o.graphic);
                        o.graphic.splice(j + 2, l);
                        if (o.graphic.length <= 2) {
                            o.graphic[0].children[0].shape.x2 = 60;
                            o.graphic[0].children[1].shape.x2 = 60;
                            o.series[0].data = handleEvents.initSeriesData(n);
                        }
                        name.splice(j + 1, l);
                        idx = j;
                        pos.leftCur -= pos.leftPlus * (l - j - 1);
                    }
                    o.series[0].map = n;
                    o.series[0].zoom = 0.4;
                    i.clear();
                    i.setOption(o);
                    this.zoomAnimation();
                },
        
                /**
                 * name 地图名
                 */
                createBreadcrumb: function (name) {
                    var breadcrumb = {
                        type: 'group',
                        id: name,
                        // left: pos.leftCur + pos.leftPlus,
                        // top: pos.top + 3,
                        // 整个的位置
                        left: 85,
                        top: 8,
                        children: [{
                            // 字的位置
                            show: false,
                            type: 'polyline',
                            left: -90,
                            top: 21,
                            shape: {
                                points: line
                            },
                            style: {
                                stroke: '#333',
                                key: name
                            },
                            onclick: function () {
                                console.log(1643);
                                var name = this.style.key;
                                handleEvents.resetOption(chart, option, name);
                            }
                        }, {
                            // 镇的字位置
                            type: 'text',
                            left: -68,
                            top: 25,
                            style: {
                                text: name,
                                textAlign: 'center',
                                fill: style.textColor,
                                font: style.font
                            },
                            onclick: function () {
                                var name = this.style.text;
                                console.log('1656');
                                handleEvents.resetOption(chart, option, name);
                            }
                        }]
                    }
                    pos.leftCur += pos.leftPlus;
                    return breadcrumb;
                },
                zoomAnimation: function () {
                    var count = null;
                    var zoom = function (per) {
                        if (!count) count = per;
                        count = count + per;
                        chart.setOption({
                            series: [
                                {
                                    zoom: count
                                }
                            ]
                        });
                        if (count < 1) window.requestAnimationFrame(function () {
                            zoom(0.2);
                        });
                    };
                    window.requestAnimationFrame(function () {
                        zoom(0.4);
                    });
                },
                initSeriesData: function (name) {
                    console.log(opt.data)
                    if (name == "常州市") {
                        return opt.data;
                    } else {
                        for (var i = 0; i < opt.data.length; i++) {
                            if (name == opt.data[i].name && opt.data[i].children.length > 0) {
                                return opt.data[i].children
                            }
                        }
                    }
                }
            };
            option = {
                graphic: [
                    {
                        // 整个的线
                        type: 'group',
                        // left: pos.left,
                        // top: pos.top - 4,
                        left: 0,
                        top: 0,
                        children: [
                            {
                                // 下面的线
                                type: 'line',
                                left: 0,
                                top: -20,
                                // left: 100,
                                // top: 100,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }, {
                                type: 'line',
                                left: 0,
                                top: 20,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }
                        ]
                    }, {
                        id: name[idx],
                        type: 'group',
                        left: 20,
                        top: 0,
                        children: [{
                            type: 'polyline',
                            left: 90,
                            top: -12,
                            shape: {
                                points: line
                            },
                            style: {
                                stroke: 'transparent',
                                key: name[0]
                            },
                            onclick: function () {
                                console.log('click');
                                var name = this.style.key;
                                handleEvents.resetOption(chart, option, name);
                            }
                        }, {
                            type: 'text',
                            left: 0,
                            // top: 'middle',
                            top: 0,
                            style: {
                                text: name[0] === '常州市' ? '常州市' : name[0],
                                textAlign: 'center',
                                fill: style.textColor,
                                font: style.font
                            },
                            // 点击标题触发
                            onclick: function () {
                                console.log('click');
                                handleEvents.resetOption(chart, option, '常州市');
                            }
                        }]
                    }
                ],
                visualMap: {
                    min: 0,
                    max: 10000,
                    text: ['高', '低'],
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['#a5ccf3', '#f8ec6b', '#d75e38']
                    },
                    textStyle: {
                        color: '#333'
                    },
                    left: 40,
                    bottom: 40
                },
                series: [
                    {
                        name: '',
                        type: 'map',
                        zlevel: 6,
                        aspectScale: 0.9,
                        top: '7%',
                        selectedMode: false,
                        itemStyle: {
                            normal: {
                                areaColor: {
                                    type: "radial",
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(255, 0, 0, 0.5)", // 0% 处的颜色
                                        }],
                                    globalCoord: false, // 缺省为 false
                                },
                            }
        
                        },
                        label: {
                            show: true,
                            color: '#333',
                            itemStyle: {
                                color: '#333'
                            }
                        },
                        map: opt.mapName,
                        // data: handleEvents.initSeriesData(params.name),
                        data: changzhouDataArr,
                        emphasis: {
                            disabled: false,
                            itemStyle: {
                                areaColor: '#dc7f17',
                            },
                            label: {
                                show: true,
                                color: '#fff',
                                itemStyle: {
                                    color: '#2a4a69'
                                },
                            }
                        }
                    }
                ]
            };
        
            // chart.setOption(option);
            // 添加事件 点击事件
            chart.on('click', function (params) {
                var _self = this;
                if (opt.goDown && params.name !== name[idx]) {
                    if (cityMap[params.name]) {
                        console.log('para', params.name, cityMap[params.name]);
                        var url = cityMap[params.name];
                        $.get(url, function (response) {
                            console.log("res", response);
                            curGeoJson = response;
                            echarts.registerMap(params.name, response);
                            handleEvents.resetOption(_self, option, params.name);
                        });
                    }
                }
            });
            return chart;
        };
        // 地图数据 level 代指颜色层级
        var changzhouDataArr = [
            {
                name: "天宁区", value: 5000, children: [
                    { name: "雕庄街道", value: 4576 },
                    { name: "青龙街道", value: 5476 },
                    { name: "茶山街道", value: 3476 },
                    { name: "红海街道", value: 5476 },
                    { name: "天宁街道", value: 5476 },
                    { name: "兰陵街道", value: 4376 },
                    { name: "郑陆镇", value: 76 }
                ]
            },
            {
                name: "钟楼区", value: 5555, children: [
                    { name: "五星街道", value: 4576 },
                    { name: "永红街道", value: 5476 },
                    { name: "北港街道", value: 3476 },
                    { name: "红海街道", value: 5476 },
                    { name: "西林街道", value: 5476 },
                    { name: "南大街街道", value: 4376 },
                    { name: "荷花池街道", value: 76 },
                    { name: "新闸街道", value: 76 },
                    { name: "邹区镇", value: 76 }
                ]
            },
            {
                name: "新北区", value: 5980, children: [
                    { name: "河海街道", value: 4576 },
                    { name: "三井街道", value: 5476 },
                    { name: "龙虎塘街道", value: 3476 },
                    { name: "新桥街道", value: 5476 },
                    { name: "薛家镇", value: 5476 },
                    { name: "罗溪镇", value: 4376 },
                    { name: "西夏墅镇", value: 76 },
                    { name: "春江街道", value: 76 },
                    { name: "孟河镇", value: 76 },
                    { name: "奔牛镇", value: 76 }
                ]
            },
            { name: "武进区", value: 6980 , children: [
                    { name: "阳湖街道", value: 4576 },
                    { name: "马杭街道", value: 5476 },
                    { name: "新城街道", value: 5476 },
                    { name: "鸣凰街道", value: 5476 },
                    { name: "南夏墅街道", value: 5476 },
                    { name: "西湖街道", value: 9765 },
                    { name: "湖塘镇", value: 8675 },
                    { name: "牛塘镇", value: 5476 },
                    { name: "洛阳镇", value: 5476 },
                    { name: "遥观镇", value: 3234 },
                    { name: "横林镇", value: 5476 },
                    { name: "横山桥镇", value: 5476 },
                    { name: "郑陆镇", value: 5476 },
                    { name: "雪堰镇", value: 8476 },
                    { name: "前黄镇", value: 3476 },
                    { name: "礼嘉镇", value: 5476 },
                    { name: "邹区镇", value: 9476 },
                    { name: "嘉泽镇", value: 2476 },
                    { name: "湟里镇", value: 5476 }
                ]},
            {
                name: "金坛区", value: 5980, children: [
                    { name: "直溪镇", value: 4576 },
                    { name: "金城镇", value: 5476 },
                    { name: "东城街道", value: 5476 },
                    { name: "儒林镇", value: 5476 },
                    { name: "长荡湖", value: 5476 },
                    { name: "钱资荡", value: 9765 },
                    { name: "西城街道", value: 8675 },
                    { name: "薛埠镇", value: 5476 },
                    { name: "尧塘镇", value: 5476 },
                    { name: "朱林镇", value: 3234 },
                    { name: "指前镇", value: 5476 }
                ]
            },
            {
                name: "溧阳市", value: 5980, children: [
                    { name: "昆仑街道", value: 4576 },
                    { name: "溧城镇", value: 5476 },
                    { name: "古县街道", value: 5476 },
                    { name: "埭头镇", value: 5476 },
                    { name: "上黄镇", value: 5476 },
                    { name: "戴埠镇", value: 9765 },
                    { name: "天目湖镇", value: 8675 },
                    { name: "别桥镇", value: 5476 },
                    { name: "上兴镇", value: 5476 },
                    { name: "竹箦镇", value: 3234 },
                    { name: "南渡镇", value: 5476 },
                    { name: "社渚镇", value: 5476 }
                ]
            }]
        
        // // 主地图注册
        $.ajax({
            async: false,
            type: 'get',
            url: changzhou,
            dataType: 'json',
            success: function (geoJson) {
                echarts.registerMap('常州市', geoJson);
                var myChart1 = echarts.extendsMap(myChart, {
                    // bgColor: '#154e90', // 画布背景色 画布颜色
                    mapName: '常州市',    // 地图名
                    goDown: true,       // 是否下钻
                    data: changzhouDataArr,
                    // 下钻回调
                    callback: function (name, option, instance) {
                        // console.log(name, option, instance);
                    },
                });
            }
        })`
    },
    {
        code: `var mapUrl = "./data/jiangsu/";
        var imgUrl = '/img/label-bg.png';
        // 地图
        var changzhou = mapUrl + '320400.json';
        var tianning = mapUrl + '320402.json';
        var zhonglou = mapUrl + '320404.json';
        var xinbei = mapUrl + '320411.json';
        var wujin = mapUrl + '320412.json';
        var jintan = mapUrl + '320413.json';
        var liyang = mapUrl + '320481.json';
        var geoCoordMap = {};
        $.ajax({
            async: false,
            type: 'get',
            url: changzhou,
            dataType: 'json',
            success: function (getJSON) {
                if (getJSON.features.length > 0) {
                    for (var i = 0; i < getJSON.features.length; i++) {
                        geoCoordMap[getJSON.features[i].properties.name] = [getJSON.features[i].properties.center[0] - 0.08, getJSON.features[i].properties.center[1]];
                    }
                }
            }
        })
        
        echarts.extendsMap = function (chart, opt) {
            var cityMap = {
                "天宁区": tianning,
                "钟楼区": zhonglou,
                "新北区": xinbei,
                "武进区": wujin,
                "金坛区": jintan,
                "溧阳市": liyang
            }
            //散点图颜色分级
            var levelColorMap = {
                '1': 'rgba(107, 199, 245, .8)',
                '2': 'rgba(230, 198, 105, .7)',
                '3': 'rgba(236, 97, 92, 1)'
            };
        
            var defaultOpt = {
                mapName: 'china',     // 地图展示
                goDown: false,        // 是否下钻
                bgColor: '#404a59',   // 画布背景色
                activeArea: [],       // 区域高亮,同echarts配置项
                data: [],
                // 下钻回调(点击的地图名、实例对象option、实例对象)
                callback: function (name, option, instance) {
                    console.log('callback');
                }
            };
            if (opt) opt = this.util.extend(defaultOpt, opt);
        
            // 层级索引
            var name = [opt.mapName];
            var idx = 0;
            var pos = {
                leftPlus: 115,
                leftCur: 150,
                left: 198,
                top: 50
            };
        
            var line = [[0, 0], [8, 11], [0, 22]];
            // style
            var style = {
                font: '18px "Microsoft YaHei", sans-serif',
                textColor: '#eee',
                // lineColor: 'rgba(147, 235, 248, .8)'
                lineColor: 'transparent'
            };
        
            var handleEvents = {
                /**
                 * i 实例对象
                 * o option
                 * n 地图名
                 */
                resetOption: function (i, o, n) {
        
                    console.log('ion', i, o, n);
                    var breadcrumb = this.createBreadcrumb(n);
                    var j = name.indexOf(n);
                    var l = o.graphic.length;
                    if (j < 0) {
                        o.graphic.push(breadcrumb);
                        o.graphic[0].children[0].shape.x2 = 145;
                        o.graphic[0].children[1].shape.x2 = 145;
                        if (o.graphic.length > 2) {
                            for (var x = 0; x < opt.data.length; x++) {
                                if (n === opt.data[x].name) {
                                    o.series[0].data = handleEvents.initSeriesData(o.dataS);
                                    break;
                                } else o.series[0].data = [];
                            }
                        }
                        name.push(n);
                        idx++;
                    } else {
                        console.log("o.graphic", o.graphic);
                        o.graphic.splice(j + 2, l);
                        if (o.graphic.length <= 2) {
                            o.graphic[0].children[0].shape.x2 = 60;
                            o.graphic[0].children[1].shape.x2 = 60;
                            o.series[0].data = handleEvents.initSeriesData(opt.data);
                        }
                        name.splice(j + 1, l);
                        idx = j;
                        pos.leftCur -= pos.leftPlus * (l - j - 1);
                    }
                    o.geo[0].map = n;
                    o.geo[0].zoom = 0.4;
                    o.geo[1].map = n;
                    o.geo[1].zoom = 0.4;
                    o.geo[2].map = n;
                    o.geo[2].zoom = 0.4;
                    i.clear();
                    i.setOption(o);
                    this.zoomAnimation();
                    // opt.callback(n, o, i);
                },
        
                /**
                 * name 地图名
                 */
                createBreadcrumb: function (name) {
                    console.log(1574);
                    var cityToPinyin = {
                        "毕节市": "nanchang",
                        "景德镇市": "jingdezhen",
                        "萍乡市": "pingxiang",
                        "九江市": "jiujiang",
                        "新余市": "xinyu",
                        "鹰潭市": "yingtan",
                        "赣州市": "ganzhou",
                        "吉安市": "jian",
                        "宜春市": "yichun",
                        "抚州市": "fuzhou",
                        "上饶市": "shangrao",
        
                    };
                    var breadcrumb = {
                        type: 'group',
                        id: name,
                        // left: pos.leftCur + pos.leftPlus,
                        // top: pos.top + 3,
                        // 整个的位置
                        left: 70,
                        top: 7,
                        children: [{
                            // 字的位置
                            show: false,
                            type: 'polyline',
                            left: -90,
                            top: -5,
                            shape: {
                                points: line
                            },
                            style: {
                                stroke: '#fff',
                                key: name
                            },
                            onclick: function () {
                                console.log(1643);
                                var name = this.style.key;
                                handleEvents.resetOption(chart, option, name);
                            }
                        }, {
                            // 镇的字位置
                            type: 'text',
                            left: -68,
                            top: -0,
                            style: {
                                text: name,
                                textAlign: 'center',
                                fill: style.textColor,
                                font: style.font
                            },
                            onclick: function () {
                                var name = this.style.text;
                                console.log('1656');
                                handleEvents.resetOption(chart, option, name);
                            }
                        }, {
                            type: 'text',
                            left: -108,
                            top: 50,
                            style: {
                                name: name,
                                text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                                // text: "",
                                textAlign: 'center',
                                fill: style.textColor,
                                font: '12px "Microsoft YaHei", sans-serif',
                            },
                            onclick: function () {
                                console.log(1671, this.style);
                                var name = this.style.name;
                                handleEvents.resetOption(chart, option, name);
                            }
                        }]
                    }
        
                    pos.leftCur += pos.leftPlus;
        
                    return breadcrumb;
                },
        
                // 设置effectscatter
                initSeriesData: function (data) {
                    console.log(1653, "initSeriesData");
                    var temp = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        // debugger
        
                        if (geoCoord) {
                            temp.push({
                                name: data[i].XJQYMC,
                                level: data[i].level,
                                region: data[i].name,
                                data: data[i].value,
                                value: geoCoord // 坐标
                            });
                        }
                    }
                    return temp;
                },
        
                zoomAnimation: function () {
                    var count = null;
                    var zoom = function (per) {
                        if (!count) count = per;
                        count = count + per;
                        chart.setOption({
                            geo: [
                                {
                                    zoom: count
                                },
                                {
                                    zoom: count
                                },
                                {
                                    zoom: count
                                }
                            ]
                        });
                        if (count < 1) window.requestAnimationFrame(function () {
                            zoom(0.2);
                        });
                    };
                    window.requestAnimationFrame(function () {
                        zoom(0.4);
                    });
                }
            };
            option = {
                backgroundColor: 'rgb(8,26,75)',
                graphic: [
                    {
                        // 整个的线
                        type: 'group',
                        // left: pos.left,
                        // top: pos.top - 4,
                        left: 0,
                        top: 0,
                        children: [
                            {
                                // 下面的线
                                type: 'line',
                                left: 0,
                                top: -20,
                                // left: 100,
                                // top: 100,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }, {
                                type: 'line',
                                left: 0,
                                top: 20,
                                shape: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 60,
                                    y2: 0
                                },
                                style: {
                                    stroke: style.lineColor,
                                }
                            }
                        ]
                    }, {
                        id: name[idx],
                        type: 'group',
                        left: 20,
                        top: 0,
                        children: [{
                            type: 'polyline',
                            left: 90,
                            top: -12,
                            shape: {
                                points: line
                            },
                            style: {
                                stroke: 'transparent',
                                key: name[0]
                            },
                            onclick: function () {
                                console.log('click');
                                var name = this.style.key;
                                handleEvents.resetOption(chart, option, name);
                            }
                        }, {
                            type: 'text',
                            left: 0,
                            // top: 'middle',
                            top: 0,
                            style: {
                                text: name[0] === '常州市' ? '常州市' : name[0],
                                textAlign: 'center',
                                fill: style.textColor,
                                font: style.font
                            },
                            // 点击标题触发
                            onclick: function () {
                                console.log('click');
                                handleEvents.resetOption(chart, option, '常州市');
                            }
                        }]
                    }
                ],
        
                geo: [
                    {
                        map: opt.mapName,
                        // roam: true,
                        top: '12%',
                        zoom: 1,
                        aspectScale: 1,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#000',
                                    fontSize: 14,
                                },
                                formatter: function (params) {
                                    var dot = '{dot|·}';
                                    return dot + params.name;
                                },
                                rich: {
                                    dot: {
                                        fontSize: 80,
                                        color: '#fff',
                                        padding: [12, 4, 5, 6],
                                        verticalAlign: 'middle'
                                    }
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        zlevel: 4,
                        itemStyle: {
                            normal: {
                                borderColor: '#69cff1',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        // 地图颜色
                                        offset: 0,
                                        color: '#62caf3' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#2c76dc' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                // shadowColor: 'rgba(128, 217, 248, 1)',
                                shadowColor: '#7fe0f8',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 3
                            },
                            emphasis: {
                                // 鼠标经过时后的颜色
                                areaColor: '#2550d6',
                                // areaColor: 'black',
                                borderWidth: 0
                            }
                        }
                    },
                    {
                        map: opt.mapName,
                        // roam: true,
                        top: '13.5%',
                        aspectScale: 1,
                        zoom: 1,
                        zlevel: 2,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#69cff1',
                                borderWidth: 0,
                                areaColor: '#4180d0',
                                shadowColor: 'transparent',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                disabled: true,
                                // 鼠标经过时后的颜色
                                areaColor: '#2550d6',
                                // areaColor: 'black',
                                borderWidth: 0
                            }
                        },
                        emphasis: {
                            disabled: true
                        }
                    },
                    {
                        map: opt.mapName,
                        // roam: true,
                        top: '14.4%',
                        aspectScale: 1,
                        zoom: 1,
                        zlevel: 1,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                disabled: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#69cff1',
                                borderWidth: 0,
                                areaColor: '#203f89',
                                shadowColor: 'transparent',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                show: false,
                                // 鼠标经过时后的颜色
                                areaColor: '#2550d6',
                                // areaColor: 'black',
                                borderWidth: 0
                            }
                        },
                        emphasis: {
                            disabled: true
                        }
        
                    }
                ],
                series: [{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbol: 'circle',
                    zlevel: 4,
                    showEffectOn: 'render',
                    rippleEffect: {
                        period: 15,
                        scale: 4,
                        brushType: 'fill'
                    },
                    top: '10',
                    effectType: 'ripple',
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return levelColorMap[params.data.level];
                            },
                            shadowBlur: 10,
                        }
                    },
                    data: handleEvents.initSeriesData(opt.data),
                    label: {
                        show: true,
                        color: '#fff',
                        itemStyle: {
                            color: '#2a4a69'
                        },
                        position: 'top',
                        height: 70,
                        backgroundColor: {
                            image: imgUrl
                        },
                        padding: [10, 15, 10, 15],
                        formatter: function (params) {
                            var top = '{name|' + params.data.region + '}\\n' + '{seriesname|产业用地总数：' + params.data.data + '}';
                            return top;
                        },
                        rich: {
                            name: {
                                color: '#6ecde5',
                                fontSize: 16,
                                lineHeight: 30,
                                align: 'left'
                            },
                            seriesname: {
                                color: '#fff',
                                fontSize: 14,
                                lineHeight: 30,
                                align: 'left'
                            }
                        }
                    }
        
                }]
            };
        
            // 添加事件 点击事件
            chart.on('click', function (params) {
                console.log('333click', opt, params, name[idx]);
                var _self = this;
                if (opt.goDown && params.name !== name[idx]) {
                    if (cityMap[params.name]) {
                        console.log('para', params.name, cityMap[params.name]);
                        var url = cityMap[params.name];
        
                        $.ajax({
                            async: false,
                            type: 'get',
                            url: url,
                            dataType: 'json',
                            success: function (response) {
                                console.log("res", response);
                                curGeoJson = response;
                                echarts.registerMap(params.name, response);
                                if (response.features.length > 0) {
                                    for (var i = 0; i < response.features.length; i++) {
                                        geoCoordMap[response.features[i].properties.name] = [response.features[i].properties.cp[0] - 0.007, response.features[i].properties.cp[1]];
                                    }
                                    console.log(geoCoordMap)
                                }
                                var tianningDataArr = [
                                    { name: "雕庄街道", value: 76, XJQYMC: '320402001', level: '1' },
                                    { name: "青龙街道", value: 76, XJQYMC: '320402002', level: '2' },
                                    { name: "茶山街道", value: 76, XJQYMC: '320402003', level: '3' },
                                    { name: "红海街道", value: 76, XJQYMC: '320402004', level: '3' },
                                    { name: "天宁街道", value: 76, XJQYMC: '320402005', level: '2' },
                                    { name: "兰陵街道", value: 76, XJQYMC: '320402006', level: '1' },
                                    { name: "郑陆镇", value: 76, XJQYMC: '320402109', level: '1' }
                                ];
                                var jintanDataArr = [
                                    { name: "直溪镇", value: 76, XJQYMC: '320402109', level: '2' }
                                ]
                                option.dataS = jintanDataArr;
                                handleEvents.resetOption(_self, option, params.name);
                            }
                        })
                    }
                }
            });
        
            return chart;
        };
        // 地图数据 level 代指颜色层级
        var changzhouDataArr = [
            { name: "天宁区", value: 45, XJQYMC: '320402', level: '1' },
            { name: "钟楼区", value: 123, XJQYMC: '320404', level: '2' },
            { name: "新北区", value: 434, XJQYMC: '320411', level: '3' },
            { name: "武进区", value: 543, XJQYMC: '320412', level: '1' },
            { name: "金坛区", value: 2334, XJQYMC: '320413', level: '2' },
            { name: "溧阳市", value: 76, XJQYMC: '320481', level: '2' },
        ];// // 主地图注册
        $.ajax({
            async: false,
            type: 'get',
            url: changzhou,
            dataType: 'json',
            success: function (geoJson) {
                echarts.registerMap('常州市', geoJson);
                var myChart1 = echarts.extendsMap(myChart, {
                    // bgColor: '#154e90', // 画布背景色 画布颜色
                    mapName: '常州市',    // 地图名
                    goDown: true,       // 是否下钻
                    data: changzhouDataArr,
                    // 下钻回调
                    callback: function (name, option, instance) {
                        // console.log(name, option, instance);
                    },
                });
            }
        })`
    },
    {
        code: `var mapUrl = "./data/jiangsu/";
        var imgUrl = '/img/label-bg.png';
        // 地图
        var changzhou = mapUrl + '320400.json';
        var tianning = mapUrl + '320402.json';
        var zhonglou = mapUrl + '320404.json';
        var xinbei = mapUrl + '320411.json';
        var wujin = mapUrl + '320412.json';
        var jintan = mapUrl + '320413.json';
        var liyang = mapUrl + '320481.json';
        var geoCoordMap = {};
        $.ajax({
            async: false,
            type: 'get',
            url: changzhou,
            dataType: 'json',
            success: function (getJSON) {
                if (getJSON.features.length > 0) {
                    for (var i = 0; i < getJSON.features.length; i++) {
                        geoCoordMap[getJSON.features[i].properties.name] = [getJSON.features[i].properties.centroid[0] + 0.08, getJSON.features[i].properties.centroid[1] + 0.01];
                    }
                }
            }
        })
        var levelColorMap = {
            '1': ['rgba(22,208,255,0)', 'rgba(22,208,255,0.4)', 'rgba(22,208,255,0.7)', 'rgba(22,208,255,1)'],
            '2': ['rgba(237,197,86,0)', 'rgba(237,197,86,0.4)', 'rgba(237,197,86,0.7)', 'rgba(237,197,86,1)'],
            '3': ['rgba(254,84,85,0)', 'rgba(254,84,85,0.4)', 'rgba(254,84,85,0.7)', 'rgba(254,84,85,1)']
        };
        // 地图数据 level 代指颜色层级
        var changzhouDataArr = [
            { name: "天宁区", value: 45, XJQYMC: '320402', level: '1' },
            { name: "钟楼区", value: 60, XJQYMC: '320404', level: '2' },
            { name: "新北区", value: 50, XJQYMC: '320411', level: '3' },
            { name: "武进区", value: 30, XJQYMC: '320412', level: '1' },
            { name: "金坛区", value: 30, XJQYMC: '320413', level: '2' },
            { name: "溧阳市", value: 76, XJQYMC: '320481', level: '2' },
        ];
        $.ajax({
            async: false,
            type: 'get',
            url: changzhou,
            dataType: 'json',
            success: function (geoJson) {
                echarts.registerMap('常州市', geoJson);
                option = {
                    tooltip: {
                        trigger: 'item',
                        show: true,
                        enterable: true,
                        textStyle: {
                            fontSize: 20,
                            color: '#fff'
                        },
                        backgroundColor: 'rgba(0,2,89,0.8)',
                        formatter: '{b}<br />{c}'
                    },
                    geo: [
                        {
                            map: '常州市',
                            // roam: true,
                            top: '12%',
                            zoom: 1,
                            aspectScale: 1,
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 14,
                                    },
                                    formatter: function (params) {
                                        var dot = '{dot|·}';
                                        return dot + params.name;
                                    },
                                    rich: {
                                        dot: {
                                            fontSize: 80,
                                            color: '#fff',
                                            padding: [12, 4, 5, 6],
                                            verticalAlign: 'middle'
                                        }
                                    }
                                },
                                emphasis: {
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            zlevel: 4,
                            itemStyle: {
                                normal: {
                                    borderColor: '#69cff1',
                                    borderWidth: 1,
                                    areaColor: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            // 地图颜色
                                            offset: 0,
                                            color: '#62caf3' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#2c76dc' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    },
                                    // shadowColor: 'rgba(128, 217, 248, 1)',
                                    shadowColor: '#7fe0f8',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 3
                                },
                                emphasis: {
                                    // 鼠标经过时后的颜色
                                    areaColor: '#2550d6',
                                    // areaColor: 'black',
                                    borderWidth: 0
                                }
                            }
                        },
                        {
                            map: '常州市',
                            // roam: true,
                            top: '13.5%',
                            aspectScale: 1,
                            zoom: 1,
                            zlevel: 2,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#69cff1',
                                    borderWidth: 0,
                                    areaColor: '#4180d0',
                                    shadowColor: 'transparent',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 10
                                },
                                emphasis: {
                                    disabled: true,
                                    // 鼠标经过时后的颜色
                                    areaColor: '#2550d6',
                                    // areaColor: 'black',
                                    borderWidth: 0
                                }
                            },
                            emphasis: {
                                disabled: true
                            }
                        },
                        {
                            map: '常州市',
                            // roam: true,
                            top: '14.4%',
                            aspectScale: 1,
                            zoom: 1,
                            zlevel: 1,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    disabled: true,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderColor: '#69cff1',
                                    borderWidth: 0,
                                    areaColor: '#203f89',
                                    shadowColor: 'transparent',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 10
                                },
                                emphasis: {
                                    show: false,
                                    // 鼠标经过时后的颜色
                                    areaColor: '#2550d6',
                                    // areaColor: 'black',
                                    borderWidth: 0
                                }
                            },
                            emphasis: {
                                disabled: true
                            }
        
                        }
                    ],
                    series: [
                        {
                            geoIndex: 0,
                            // coordinateSystem: 'geo',
                            showLegendSymbol: true,
                            type: 'map',
                            roam: true,
                            // zlevel: 10,
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#f00'
                                    }
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
        
                            itemStyle: {
                                normal: {
                                    borderColor: '#2ab8ff',
                                    borderWidth: 1.5,
                                    areaColor: '#12235c'
                                },
                                emphasis: {
                                    areaColor: '#2AB8FF',
                                    borderWidth: 0,
                                    color: 'red'
                                }
                            },
                            map: '常州市', // 使用
                            data: changzhouDataArr
                        },
                        // 柱状体的主干
                        {
                            type: 'lines',
                            zlevel: 5,
                            effect: {
                                show: false,
                                symbolSize: 5 // 图标大小
                            },
                            lineStyle: {
                                width: 20, // 尾迹线条宽度
                                opacity: 1, // 尾迹线条透明度
                                curveness: 0, // 尾迹线条曲直度
                                color: function (params) {
                                    return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: levelColorMap[params.data.level][3]
                                    }, {
                                        offset: 1,
                                        color: levelColorMap[params.data.level][0],
                                    }])
                                }
                            },
        
                            label: {
                                show: 0,
                                position: 'end',
                                formatter: '245'
                            },
                            silent: true,
                            data: lineData()
                        },
        
                        // 柱状体的底部
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            geoIndex: 0,
                            zlevel: 5,
                            label: {
                                // 这儿是处理的
                                formatter: '{b}',
                                position: 'bottom',
                                color: '#fff',
                                fontSize: 12,
                                distance: 10,
                                show: false
                            },
                            symbol: 'circle',
                            symbolSize: [24, 9],
                            itemStyle: {
                                color: function (params) {
                                    return levelColorMap[params.data.level][3];
                                },
                                opacity: 1
                            },
                            silent: true,
                            data: scatterData()
                        },
                        // 底部外框
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            geoIndex: 0,
                            zlevel: 4,
                            label: {
                                show: false
                            },
                            symbol: 'circle',
                            symbolSize: [38, 18],
                            itemStyle: {
                                color: function (params) {
        
                                    return levelColorMap[params.data.level][1];
                                },
                                opacity: 1
                            },
                            silent: true,
                            data: scatterData()
                        }
                    ]
                };
            }
        })
        
        function lineMaxHeight() {
            const maxValue = Math.max(...changzhouDataArr.map(item => item.value))
            return 0.1 / maxValue
        }
        // 柱状体的主干
        function lineData() {
            return changzhouDataArr.map((item) => {
                return {
                    level: item.level,
                    coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]]
                }
            })
        }
        
        // 柱状体的底部
        function scatterData() {
            return changzhouDataArr.map((item) => {
                return {
                    name: item.name,
                    value: geoCoordMap[item.name],
                    level: item.level
                }
            })
        }
        `
    },
    {
        code: `var hzmap = "./data/guizhou/520100.json";
        var mapname = hzmap;
        var mapData = [
          {
            name: "息烽县", value: [111, 1111]
          },
          {
            name: "开阳县", value: [222, 2222]
          },
          {
            name: "修文县", value: [333, 3333]
          },
          {
            name: "乌当区", value: [444, 4444]
          },
          {
            name: "白云区", value: [555, 5555]
          },
          {
            name: "清镇市", value: [666, 6666]
          },
          {
            name: "观山湖区", value: [777, 7777]
          },
          {
            name: "云岩区", value: [888, 8888]
          },
          {
            name: "南明区", value: [999, 9999]
          },
          {
            name: "花溪区", value: [1000, 10000]
          },
        ];
        myChart.showLoading();
        let index = -1;
        var timer = setInterval(function () {
          // 隐藏提示框
          myChart.dispatchAction({
            type: "hideTip",
            seriesIndex: 0,
            dataIndex: index,
          });
          // 显示提示框
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: index + 1,
          });
          // 取消高亮指定的数据图形
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index,
          });
          // 高亮指定的数据图形
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: index + 1,
          });
          index++;
          if (index > 13) {
            index = -1;
          }
        }, 2000);
        myChart.on("mousemove", function (e) {
          clearInterval(timer);
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: e.dataIndex,
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: e.dataIndex,
          });
        });
        myChart.on("mouseout", function (e) {
          clearInterval(timer);
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: e.dataIndex,
          }); //鼠标移出后先把上次的高亮取消
          timer = setInterval(function () {
            // 隐藏提示框
            myChart.dispatchAction({
              type: "hideTip",
              seriesIndex: 0,
              dataIndex: index,
            });
            // 显示提示框
            myChart.dispatchAction({
              type: "showTip",
              seriesIndex: 0,
              dataIndex: index + 1,
            });
            // 取消高亮指定的数据图形
            myChart.dispatchAction({
              type: "downplay",
              seriesIndex: 0,
              dataIndex: index,
            });
            // 高亮指定的数据图形
            myChart.dispatchAction({
              type: "highlight",
              seriesIndex: 0,
              dataIndex: index + 1,
            });
            index++;
            if (index > 13) {
              index = -1;
            }
          }, 2000);
        });
        setTimeout(function () {
          mapInit();
        }, 1000);
        var mapInit = () => {
          $.getJSON(mapname, function (geoJson) {
            //
        
            console.log(geoJson);
            echarts.registerMap("hanzhou", geoJson);
            myChart.hideLoading();
            option = {
              backgroundColor: ' rgb(14, 10, 46)',
              tooltip: {
                trigger: 'item',
                backgroundColor: "transparent",
                borderWidth: 0,
                padding: 0,
                formatter: (item) => {
        
                  console.log(item);
        
                  var res = '';
                  mapData.forEach((kk) => {
                    if (kk.name == item.name) {
                      var values = kk.value.toString().split(",");
                      res = '<div style="background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAB0CAYAAAA7B4hPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlDMjk3MTkwOTZCMTFFRDg2N0ZCNzNBOUJGNDQzMzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlDMjk3MUEwOTZCMTFFRDg2N0ZCNzNBOUJGNDQzMzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUMyOTcxNzA5NkIxMUVEODY3RkI3M0E5QkY0NDMzOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUMyOTcxODA5NkIxMUVEODY3RkI3M0E5QkY0NDMzOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrKbq/8AAFloSURBVHja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) no-repeat;background-size:cover;"><div style="padding:10px 15px;">'
                        + '<div style="color:#fff;">' + kk.name + '</div>'
                        + '<div style="color:#97aedc;margin-top:5px;"><span style="display:inline-block;color:#97aedc;width:100px;">未处置总宗数 : </span><span style="display:inline-block;color:#E26B7A;width:45px;text-align:right;">' + values[0] + '</span> 宗</div>'
                        + '<div style="color:#97aedc;margin-top:5px;"><span style="display:inline-block;color:#97aedc;width:100px;">未处置面积 : </span><span style="display:inline-block;color:#E26B7A;width:45px;text-align:right;">' + values[1] + '</span> m²</div></div></div>'
                    }
                  })
                  return res;
                }
              },
              geo: {
                map: "hanzhou",
                aspectScale: 0.75, //长宽比
                zoom: 1.1,
                roam: false,
                itemStyle: {
                  normal: {
                    areaColor: "#013C62",
                    shadowColor: "#11286B",
                    shadowOffsetX: 0,//水平方向偏移
                    shadowOffsetY: 12,//竖直方向偏移
                  },
                  emphasis: {
                    areaColor: "#2AB8FF",
                    borderWidth: 0,
                    color: "green",
                    label: {
                      show: false,
                    },
                  },
                },
              },
              series: [
                {
                  type: "map",
                  roam: false,
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: "#87D5F4",
                      },
                    },
                    emphasis: {
                      textStyle: {
                        color: "#fff",
                      },
                    },
                  },
                  itemStyle: {
                    normal: {
                      borderColor: "#AADFFF",
                      borderWidth: 1.5,
                      areaColor: "#12235c",
                    },
                    emphasis: {
                      areaColor: "#478CB5",
                      opacity: '0.8',
                      borderWidth: 2.5,
                      borderColor: "#FFF",
                      color: "green",
                    },
                  },
                  zoom: 1.1,
                  map: "hanzhou",
                  data: mapData
                },
                {
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  showEffectOn: "render",
                  rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: "fill",
                  },
                  hoverAnimation: true,
                  itemStyle: {
                    normal: {
                      color: "#ffff",
                      shadowBlur: 10,
                      shadowColor: "#333",
                    },
                  },
                  data: mapData,
                },
              ],
            };
            myChart.setOption(option);
          });
        };`
    },
    {
        code: `var guizhou = 'http://192.168.90.59/guizhou/map/520000.json';
        var guiyang = 'http://192.168.90.59/guizhou/map/520100.json';
        var liupanshui = 'http://192.168.90.59/guizhou/map/520200.json';
        var zunyi = 'http://192.168.90.59/guizhou/map/520300.json';
        var anshun = 'http://192.168.90.59/guizhou/map/520400.json';
        var bijie = 'http://192.168.90.59/guizhou/map/520500.json';
        var tongren = 'http://192.168.90.59/guizhou/map/520600.json';
        var qianxinan = 'http://192.168.90.59/guizhou/map/522300.json';
        var qiandongnan = 'http://192.168.90.59/guizhou/map/522600.json';
        var qiannan = 'http://192.168.90.59/guizhou/map/522700.json';
        
        var geoCoordMap = {};
        $.getJSON(guizhou, function (getJSON) {
          if (getJSON.features.length > 0) {
            for (var i = 0; i < getJSON.features.length; i++) {
              // +0.3调整一下散点图的位置，使它往上移一些
              geoCoordMap[getJSON.features[i].properties.name] = [getJSON.features[i].properties.cp[0], getJSON.features[i].properties.cp[1] + 0.3];
            }
            console.log(geoCoordMap)
          }
        })
        
        echarts.extendsMap = function (chart, opt) {
          // 实例
          var cityMap = {
            "贵阳市": guiyang,
            "六盘水市": liupanshui,
            "遵义市": zunyi,
            "安顺市": anshun,
            "毕节市": bijie,
            "铜仁市": tongren,
            "黔西南布依族苗族自治州": qianxinan,
            "黔东南苗族侗族自治州": qiandongnan,
            "黔南布依族苗族自治州": qiannan,
          }
          //散点图颜色分级
          var levelColorMap = {
            '1': 'rgba(107, 199, 245, .8)',
            '2': 'rgba(230, 198, 105, .7)',
            '3': 'rgba(236, 97, 92, 1)'
          };
        
          var defaultOpt = {
            mapName: 'china',     // 地图展示
            goDown: false,        // 是否下钻
            bgColor: '#404a59',   // 画布背景色
            activeArea: [],       // 区域高亮,同echarts配置项
            data: [],
            // 下钻回调(点击的地图名、实例对象option、实例对象)
            callback: function (name, option, instance) {
              console.log('callback');
            }
          };
          if (opt) opt = this.util.extend(defaultOpt, opt);
        
          // 层级索引
          var name = [opt.mapName];
          var idx = 0;
          var pos = {
            leftPlus: 115,
            leftCur: 150,
            left: 198,
            top: 50
          };
        
          var line = [[0, 0], [8, 11], [0, 22]];
          // style
          var style = {
            font: '18px "Microsoft YaHei", sans-serif',
            textColor: '#eee',
            // lineColor: 'rgba(147, 235, 248, .8)'
            lineColor: 'transparent'
          };
        
          var handleEvents = {
            /**
             * i 实例对象
             * o option
             * n 地图名
            **/
            resetOption: function (i, o, n) {
              console.log('ion', i, o, n);
              var breadcrumb = this.createBreadcrumb(n);
        
              var j = name.indexOf(n);
              var l = o.graphic.length;
              if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                  for (var x = 0; x < opt.data.length; x++) {
                    if (n === opt.data[x].name) {
                      o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                      break;
                    } else o.series[0].data = [];
                  }
                };
                name.push(n);
                idx++;
              } else {
                console.log("o.graphic", o.graphic);
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                  o.graphic[0].children[0].shape.x2 = 60;
                  o.graphic[0].children[1].shape.x2 = 60;
                  o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
              };
              o.geo[0].map = n;
              o.geo[0].zoom = 0.4;
              o.geo[1].map = n;
              o.geo[1].zoom = 0.4;
              o.geo[2].map = n;
              o.geo[2].zoom = 0.4;
              i.clear();
              i.setOption(o);
              this.zoomAnimation();
              opt.callback(n, o, i);
            },
        
            /**
             * name 地图名
            **/
            createBreadcrumb: function (name) {
              console.log(1574);
              var cityToPinyin = {
                "毕节市": "nanchang",
                "景德镇市": "jingdezhen",
                "萍乡市": "pingxiang",
                "九江市": "jiujiang",
                "新余市": "xinyu",
                "鹰潭市": "yingtan",
                "赣州市": "ganzhou",
                "吉安市": "jian",
                "宜春市": "yichun",
                "抚州市": "fuzhou",
                "上饶市": "shangrao",
        
              };
              var breadcrumb = {
                type: 'group',
                id: name,
                // left: pos.leftCur + pos.leftPlus,
                // top: pos.top + 3,
                // 整个的位置
                left: 70,
                top: 7,
                children: [{
                  // 字的位置
                  show: false,
                  type: 'polyline',
                  left: -90,
                  top: -5,
                  shape: {
                    points: line
                  },
                  style: {
                    stroke: '#fff',
                    key: name
                  },
                  onclick: function () {
                    console.log(1643);
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                  }
                }, {
                  // 镇的字位置
                  type: 'text',
                  left: -68,
                  top: -0,
                  style: {
                    text: name,
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                  },
                  onclick: function () {
                    var name = this.style.text;
                    console.log('1656');
                    handleEvents.resetOption(chart, option, name);
                  }
                }, {
                  type: 'text',
                  left: -108,
                  top: 50,
                  style: {
                    name: name,
                    text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                    text: "",
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                  },
                  onclick: function () {
                    console.log(1671, this.style);
                    var name = this.style.name;
                    handleEvents.resetOption(chart, option, name);
                  }
                }]
              }
        
              pos.leftCur += pos.leftPlus;
        
              return breadcrumb;
            },
        
            // 设置effectscatter
            initSeriesData: function (data) {
              console.log(1653, "initSeriesData");
              var temp = [];
              for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                  temp.push({
                    name: data[i].XJQYMC,
                    level: data[i].level,
                    region: data[i].name,
                    data: data[i].value,
                    value: geoCoord // 坐标
                  });
                }
              };
              return temp;
            },
        
            zoomAnimation: function () {
              var count = null;
              var zoom = function (per) {
                if (!count) count = per;
                count = count + per;
                chart.setOption({
                  geo: [
                    {
                      zoom: count
                    },
                    {
                      zoom: count
                    },
                    {
                      zoom: count
                    }
                  ]
                });
                if (count < 1) window.requestAnimationFrame(function () {
                  zoom(0.2);
                });
              };
              window.requestAnimationFrame(function () {
                zoom(0.2);
              });
            }
          };
        
          option = {
            backgroundColor: ' rgb(14, 10, 46)',
            graphic: [
              {
                // 整个的线
                type: 'group',
                // left: pos.left,
                // top: pos.top - 4,
                left: 0,
                top: 0,
                children: [
                  {
                    // 下面的线
                    type: 'line',
                    left: 0,
                    top: -20,
                    // left: 100,
                    // top: 100,
                    shape: {
                      x1: 0,
                      y1: 0,
                      x2: 60,
                      y2: 0
                    },
                    style: {
                      stroke: style.lineColor,
                    }
                  }, {
                    type: 'line',
                    left: 0,
                    top: 20,
                    shape: {
                      x1: 0,
                      y1: 0,
                      x2: 60,
                      y2: 0
                    },
                    style: {
                      stroke: style.lineColor,
                    }
                  }
                ]
              }, {
                id: name[idx],
                type: 'group',
                left: 20,
                top: 0,
                children: [{
                  type: 'polyline',
                  left: 90,
                  top: -12,
                  shape: {
                    points: line
                  },
                  style: {
                    stroke: 'transparent',
                    key: name[0]
                  },
                  onclick: function () {
                    console.log('click');
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                  }
                }, {
                  type: 'text',
                  left: 0,
                  // top: 'middle',
                  top: 0,
                  style: {
                    text: name[0] === '贵州' ? '贵州省' : name[0],
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                  },
                  // 点击标题触发
                  onclick: function () {
                    console.log('click');
                    handleEvents.resetOption(chart, option, '贵州');
                  }
                }]
              }
            ],
        
            geo: [
              {
                map: opt.mapName,
                // roam: true,
                top: '12%',
                zoom: 1,
                aspectScale: 1,
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#000',
                      fontSize: 14,
                    },
                    formatter: function (params) {
                      var dot = '{dot|·}';
                      return dot + params.name;
                    },
                    rich: {
                      dot: {
                        fontSize: 80,
                        color: '#fff',
                        padding: [12, 4, 5, 6],
                        verticalAlign: 'middle'
                      }
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                zlevel: 4,
                itemStyle: {
                  normal: {
                    borderColor: '#69cff1',
                    borderWidth: 1,
                    areaColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        // 地图颜色
                        offset: 0,
                        color: '#62caf3' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#2c76dc' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    // shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowColor: '#7fe0f8',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 3
                  },
                  emphasis: {
                    // 鼠标经过时后的颜色
                    areaColor: '#2550d6',
                    // areaColor: 'black',
                    borderWidth: 0
                  }
                }
              },
              {
                map: opt.mapName,
                // roam: true,
                top: '13.5%',
                aspectScale: 1,
                zoom: 1,
                zlevel: 2,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#69cff1',
                    borderWidth: 0,
                    areaColor: '#4180d0',
                    shadowColor: 'transparent',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                  },
                  emphasis: {
                    disabled: true,
                    // 鼠标经过时后的颜色
                    areaColor: '#2550d6',
                    // areaColor: 'black',
                    borderWidth: 0
                  }
                },
                emphasis: {
                  disabled: true
                }
              },
              {
                map: opt.mapName,
                // roam: true,
                top: '14.4%',
                aspectScale: 1,
                zoom: 1,
                zlevel: 1,
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    disabled: true,
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: '#69cff1',
                    borderWidth: 0,
                    areaColor: '#203f89',
                    shadowColor: 'transparent',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                  },
                  emphasis: {
                    show: false,
                    // 鼠标经过时后的颜色
                    areaColor: '#2550d6',
                    // areaColor: 'black',
                    borderWidth: 0
                  }
                },
                emphasis: {
                  disabled: true
                }
        
              }
            ],
            series: [{
        
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbol: 'circle',
              symbolSize: 10,
              zlevel: 4,
              showEffectOn: 'render',
              rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
              },
              top: '10',
              effectType: 'ripple',
              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return levelColorMap[params.data.level];
                  },
                  shadowBlur: 10,
                }
              },
              data: handleEvents.initSeriesData(opt.data),
              showEffectOn: 'render',
              label: {
                show: false
              }
            }]
          };
        
          chart.setOption(option);
          // 添加事件 点击事件
          chart.on('click', function (params) {
            console.log('333click', opt, params, name[idx]);
            var _self = this;
            if (opt.goDown && params.name !== name[idx]) {
              if (cityMap[params.name]) {
                console.log('para', params.name, cityMap[params.name]);
                var url = cityMap[params.name];
                $.get(url, function (response) {
                  console.log("res", response);
                  curGeoJson = response;
                  echarts.registerMap(params.name, response);
                  handleEvents.resetOption(_self, option, params.name);
                });
              }
            }
          });
        
          chart.setMap = function (mapName) {
            console.log('mapName', mapName);
            var _self = this;
            if (mapName.indexOf('市') < 0) mapName = mapName + '市';
            var citySource = cityMap[mapName];
            if (citySource) {
              var url = './map/' + citySource + '.json';
              $.get(url, function (response) {
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
              });
            }
          };
        
          return chart;
        };
        
        //地图数据 level 代指颜色层级
        var dataArr = [
          { name: "贵阳市", value: 45, XJQYMC: '520100', level: '1' },
          { name: "六盘水市", value: 123, XJQYMC: '520200', level: '1' },
          { name: "遵义市", value: 434, XJQYMC: '520300', level: '1' },
          { name: "安顺市", value: 543, XJQYMC: '520400', level: '1' },
          { name: "毕节市", value: 2334, XJQYMC: '520500', level: '3' },
          { name: "铜仁市", value: 76, XJQYMC: '520600', level: '1' },
          { name: "黔西南布依族苗族自治州", value: 777, XJQYMC: '522300', level: '2' },
          { name: "黔东南苗族侗族自治州", value: 675, XJQYMC: '522600', level: '2' },
          { name: "黔南布依族苗族自治州", value: 986, XJQYMC: '522700', level: '2' }
        ];
        
        // 主地图注册
        $.getJSON(guizhou, function (geoJson) {
          console.log(1947);
          echarts.registerMap('贵州', geoJson);
          var myChart1 = echarts.extendsMap(myChart, {
            // bgColor: '#154e90', // 画布背景色 画布颜色
            mapName: '贵州',    // 地图名
            goDown: true,       // 是否下钻
            data: dataArr,
            // 下钻回调
            callback: function (name, option, instance) {
              // console.log(name, option, instance);
            },
          });
        })`
    }
]

mapDemoJS.forEach(v => {
    v.id = genId()
})
export default mapDemoJS   