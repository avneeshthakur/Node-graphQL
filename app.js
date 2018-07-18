import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

const mongo_url = 'mongodb://localhost:27017/graphdb';

mongoose.connect(mongo_url,{ useNewUrlParser: true },(err) => {
	if(err) {
		console.error(err);
	}
	console.log('Connected to db')
})

const port = 8000;

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
   schema,
   graphiql:true
}));

app.listen(port, (err) => {
   if (err) {
   	 console.error('Error : ', err);
   }
   console.log('GraphQl Server is Running At port : ' + port);
})