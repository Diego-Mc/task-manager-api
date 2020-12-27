const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('mongo db connectaiton established succesfully.');
});
