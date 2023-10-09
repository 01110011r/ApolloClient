import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS=gql`
query GetLocations{
    locations{
        id
        name
        description
        photo
    }
}
`;

export default function DisplayLocations(){
const {loading, err, data}=useQuery(GET_LOCATIONS);

if(loading)return <p>Loading...</p>;
if(err)return <p>Error: {err.message}</p>;

return data.locations.map(({id, name, description, photo})=>(
    <div key={id}>
 <h3>{name}</h3>
<img src={`${photo}`} alt="location-reference" width='400' height='250' />
<br />
<b>About this location:</b>
<p>{description}</p>
<br />
    </div>
));

}