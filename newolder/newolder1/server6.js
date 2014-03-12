all change

var data = JSON.stringify({
    "userName": "something",
    "password": "something"
});

var JSONObject = {
    "userName": "something",
    "password": "something",
    "queryObject": {
        "conditions": "lastupdate='2013-10-17' AND cust_svcctr_id='2' AND (status='ACTIVE' OR status='HOLD')",
        "tablename": "",
        "orderBy": "ORDER BY lastupdate",
        "offset": 0,
        "limit": 10,
        "page": 0,
        "count": -1
    }
}
					
/*var options = {
		host: 'www.google.com',
		port: '80',
		path: '/upload',
		method: 'POST',
	};
*/

/*var options = {
		host: 'cloud.wavelet.biz',
		port: '80',
		path: '/test-ws/api/customerService/1/0',
		method: 'GET'
	};
*/
var options = {
		host: 'cloud.wavelet.biz',
		port: '80',
		path: '/demo/ws/api/itemService',
		method: 'GET'
	};


my_http.createServer(function(request,response){
    sys.puts("I got Knocked");

    var req = my_http.request(options, function(res) {
		
			console.log('\nSTATUS: ' + res.statusCode);
			console.log('\nHEADERS: ' + JSON.stringify(res.headers));
			
			res.setEncoding('utf8');
			
			res.on('data', function(chunk){
				console.log('\nBODY: ' + chunk);
			});
		});
    
    req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	}); 
    
    //req.write('JSONObject\n');
    req.write(data);
    req.end();
    
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello World Test1\n\n" + data);
     
    response.end();
}).listen(8080);

sys.puts("Server Running on 8080");
