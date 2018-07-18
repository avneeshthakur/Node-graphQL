import Book from '../../models/book';
import Author from '../../models/author';
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import BookType from '../types/book-type';

export default new GraphQLObjectType({
  name:'Author',
  fields:() => ({
  		id:{ type: GraphQLID },
  		name:{ type: GraphQLString },
  		books:{
  			type:new GraphQLList(BookType),
  			resolve(parent, args){
				return Book.find({authorid:parent.id});
			}
  	}
  })
});

