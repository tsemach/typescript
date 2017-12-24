app.post('/web_api', function (req, res) {
  console.log('got call from client web_api ' + req)
  //res.send('{"name": "tsemach", "data": "this is a rulebae"}')
  requestAsJson = JSON.stringify(req.body);

  //set the appropriate HTTP header
  //res.setHeader('Content-Type', 'application/json');

 //log the output
  console.log('monitor: POST data received was: ' + requestAsJson);

  var json = {}

  json.type = "command";
  json.session = "1234-abcd";
  json.command = "sic";
  json.arguments = {};
  json.arguments.ip = "192.168.0.1";
  json.arguments.secret = "aaaa";

  res.send(json);
  //send the POST data back as JSON
  //res.end(requestAsJson);
  // res.send('{"type": "command", "session": "1234-acbd", "command": "sic", "arguments": {"ip}')
})

