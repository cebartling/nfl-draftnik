import React from 'react';
import {Query, withApollo} from "react-apollo";
import getUsersQuery from "../graphql/GetUsersQuery";

const TestGraphQLQuery = () => (
    <Query query={getUsersQuery}>
        {
            ({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.users.map(({id, first_name, last_name}) => (
                    <div key={id}>
                        <p>{last_name}, {first_name}</p>
                    </div>
                ));
            }
        }
    </Query>
);

export default withApollo(TestGraphQLQuery);
