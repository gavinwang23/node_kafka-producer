const kafka = require('kafka-node')
require('./src/dataProducer.js')
Producer = kafka.Producer

var KAFKA_HOST = {kafkaHost: '10.68.200.207:9092'}
var client = new kafka.KafkaClient(KAFKA_HOST);

KeyedMessage = kafka.KeyedMessage,
producer = new Producer(client),
// km = new KeyedMessage('key', 'message'),

producer.on('ready', function () {
    // producer.send(payloads, function (err, data) {
    //     console.log(data);
    // });
});
 
producer.on('error', function (err) {
    console.log(err)
})

// 定时发送天气模拟数据
setInterval(function() {
    var data = weatherProducer()
    var payloads2 = [
        { topic: 'RepWeather', messages: JSON.stringify(data), partition: 0 }
    ]
    producer.send(payloads2, function (err, data) {
        console.log(data);
    });
}, 5000)