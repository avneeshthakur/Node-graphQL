import Book  from '../../models/book';
import Author  from '../../models/author';
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import AuthorType from '../types/author-type';

export default new GraphQLObjectType({
  name:'Book',
  fields:() => ({
  		id:{ type: GraphQLID },
  		name:{ type: GraphQLString },
  		genre:{ type: GraphQLString },
  		author:{
  			type:AuthorType,
  			resolve(parent, args){
				return Author.findById(parent.authorid);
			}
  	 }
  })
});

