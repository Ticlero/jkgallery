import ApolloClient from 'apollo-boost';

const SERVICE_URI = "http://45.119.146.249:3000";
 const JKApolloClient = new ApolloClient({
    //uri:"http://localhost:3000/graphql",
    uri:`${SERVICE_URI}/graphql`
});


export default JKApolloClient;