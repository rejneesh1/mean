const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())


// const read = require('./read');
// const write = require('./write');
// const del = require('./delete');
// const update = require('./update');


app.get('/api/home',(req,res)=>{
	console.log('called')
		
    res.send('Go to some path')
})
// app.use('/read-route',read);
// app.use('/write-route',write);
// app.use('/delete-route',del);
// app.use('/update-route',update);

const server=app.listen(8000,'0.0.0.0',() => {
  let host = server.address().address;
	let port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
})

