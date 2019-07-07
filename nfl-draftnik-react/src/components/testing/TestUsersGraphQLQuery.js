import React from 'react';
import {Query, withApollo} from "react-apollo";
import getUsersQuery from "../../graphql/GetUsersQuery";

const TestUsersGraphQLQuery = function () {

    const renderUsers = (data) => {
        return data.users.map(({id, first_name, last_name}) => (
            <div key={id}>
                <p>{last_name}, {first_name}</p>
            </div>
        ));
    };

    return (
        <Query query={getUsersQuery}>
            {
                ({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div className="p-4">
                            <div className="justify-center align-middle">
                                <h1 className="text-indigo-900 text-3xl">Users</h1>
                            </div>
                            <div className="">
                                {renderUsers(data)}
                            </div>
                        </div>
                    );
                }
            }
        </Query>
    );
};

export default withApollo(TestUsersGraphQLQuery);
