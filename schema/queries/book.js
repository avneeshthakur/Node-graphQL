import Book from '../../models/book';
import Author from '../../models/author';
import {GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import BookType from '../types/book-type';


export default {
    book: {
		type:BookType,
		args: { id: { type:GraphQLID } },
		resolve(parent, args){
			return Book.findById({_id:args.id});
		}
	},
	books: {
		type: new GraphQLList(BookType),
		resolve(parent, args){
			return Book.find({});
		}
	},
}
