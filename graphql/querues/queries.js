//client에서 graphQL을 작성하는 방법, graphQL syntax
import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

import { gql } from "@apollo/client";
import { GraphQLList } from "graphql";

const BASE_URL = "api/movies";
function fetchResopnseByURL(BASE_URL) {
  const response = await axios.get(`api/movies`);
  const movieList = await response.data.results;
  return movieList;
}

const MovieType = new GraphQLObjectType({
  fields: () => ({
    allMovie: {
      type: new GraphQLList(),
    },
  }),
});
//하다 말음  git stash 에 있음
