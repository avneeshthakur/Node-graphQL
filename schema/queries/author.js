import Book from '../../models/book';
import Author from '../../models/author';
import {GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import AuthorType from '../types/author-type';

export default {
	author: {
		type:AuthorType,
		args: { id: { type:GraphQLID } },
		resolve(parent, args){
			return Author.findById({_id:args.id});
		}
	},
	authors: {
		type: GraphQLList(AuthorType),
		resolve(parent, args){
			return Author.find({});
		}
	}
}