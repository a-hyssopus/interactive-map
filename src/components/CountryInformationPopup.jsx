import {Popup, useMapEvents} from "react-leaflet";
import {gql, useQuery} from "@apollo/client";
import CountryInformation from "./CountryInformation";

export const GET_COUNTRY_INFO = gql`
      query GetCountry($code: ID!) {
        country(code: $code) {
          name
          native
          capital
          currency
          languages {
            name
          }
        }
      }
`;

const CountryInformationPopup = ({coordinates, setCoordinates, isReverseLocationSearchLoading, code}) => {
    useMapEvents({
        click(e) {
            const newPopup = e?.latlng;
            setCoordinates(newPopup);
        },
    })

    const {data, loading} = useQuery(GET_COUNTRY_INFO, {variables: {"code": code}, skip: !code});
    const {country} = data || {};

    return <Popup position={coordinates}><CountryInformation loading={loading} country={country}
                                                             coordinates={coordinates}
                                                             isReverseLocationSearchLoading={isReverseLocationSearchLoading}/>
    </Popup>
}

export default CountryInformationPopup;
