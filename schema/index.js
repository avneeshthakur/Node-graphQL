import { GraphQLObjectType, GraphQLSchema } from  'graphql';
import queries from './queries';
import mutations from './mutations';


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQuery',
      fields: queries
    }),
    mutation: new GraphQLObjectType({
      name: 'RootMutations',
      fields: mutations
    })
});

export default schema;