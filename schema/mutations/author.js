import Book from '../../models/book';
import Author from '../../models/author';
import {GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull} from 'graphql';
import AuthorType from '../types/author-type';


export default { 
	addAuthor:{
			type:AuthorType,
			args:{
				name:{ type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, args) {
			 let author = new Author({
			 	name:args.name
			 })
			 return author.save();
			}
		},
}