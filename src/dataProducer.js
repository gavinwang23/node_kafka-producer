// 天气数据产生函数
var weatherProducer = function() {
    var weatherData = {
        SubPara:[]
    }
    // 产生1到20号站点的数据
    for(i=1;i<=20;i++) {
        var data = {
            PlatNo : i.toString(),
            Pressure : Math.random()*1000,
            Temperature : Math.random()*30,
            Humidity : Math.random()*100,
            WindSpeed : Math.random()*30,
            WindDir : Math.random()*360,
            Precipition : Math.random()*100,
            recordTime : Date.now()
        }
        weatherData.SubPara.push(data)
    }
    return weatherData
}

global.weatherProducer = weatherProducer