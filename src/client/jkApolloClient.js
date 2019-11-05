import ApolloClient from 'apollo-boost';

const SERVICE_URI = "http://www.jkgallery.kr:80";
 const JKApolloClient = new ApolloClient({
    //uri:"http://localhost:3000/graphql",
    uri:`${SERVICE_URI}/graphql`
});


export default JKApolloClient;