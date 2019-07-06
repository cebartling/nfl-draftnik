import {gql} from "apollo-boost";

const getUsersQuery = gql`
{
  users {
    id
    last_name
    first_name
    username
    created_at
    updated_at
  }
}`;

export default getUsersQuery;
