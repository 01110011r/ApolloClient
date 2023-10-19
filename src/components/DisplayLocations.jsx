import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS=gql`
query GetLocations{
    users{
        user_id
        username
        email
    }
}
`;

export default function DisplayLocations(){
const {loading, err, data}=useQuery(GET_LOCATIONS);
console.log(data);
if(loading)return <p>Loading...</p>;
if(err)return <p>Error: {err.message}</p>;

return data.users.map(({user_id, username, email}, i)=>(
    <div key={i}>
        <h1>{user_id}</h1>
 <h3>{username}</h3>
 <h3>{email}</h3>

    </div>
));

}