import Book from '../../models/book';
import Author from '../../models/author';
import {GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import BookType from '../types/book-type';

export default { 
	addBook: {
		type:BookType,
		args:{
			name:{ type: new GraphQLNonNull(GraphQLString) },
			genre:{ type: new GraphQLNonNull(GraphQLString) },
			authorid:{ type: new GraphQLNonNull(GraphQLID) }
		},
		resolve(parent, args) {
		 let book = new Book({
		 	name:args.name,
		 	genre:args.genre,
		 	authorid:args.authorid
		 })
		 return book.save();
		}
	}
}