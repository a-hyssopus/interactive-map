import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import CountryInformationPopup from "../components/CountryInformationPopup";
import {MapContainer} from "react-leaflet";
import {MockedProvider} from "@apollo/client/testing";
import Map from "../components/Map";
import {getCountryInfoMock, getEmptyCountryInfoMock} from "./mocks/mocks";

const MapInMockedProvider = <MockedProvider mocks={getCountryInfoMock}><Map/></MockedProvider>;

describe('<CountryInformationPopup/>', () => {
    test("onclick handler is called", async () => {
        const setCoordinates = jest.fn();
        const coordinates = {lat: 10, lng: 10};
        const {container} = render(
            <MockedProvider mocks={getEmptyCountryInfoMock}>
                <MapContainer center={coordinates} zoom={10}>
                    <CountryInformationPopup
                        coordinates={{lat: 10, lng: 10}}
                        setCoordinates={setCoordinates}
                        isReverseLocationSearchLoading={false}
                        code={null}/>
                </MapContainer>
            </MockedProvider>)
        fireEvent.click(container.getElementsByClassName("leaflet-container")[0])
        await expect(setCoordinates).toBeCalled()
    })

    test("renders Popup with country info after the fetch was made", async () => {
        render(MapInMockedProvider)
        await waitFor(() => expect(screen.getByText(/Switzerland/i)).toBeInTheDocument())
    });

    test('renders Popup with "This place doesn\'t belong to any country" text if prop code=\'\'', async () => {
        render(<MockedProvider mocks={getEmptyCountryInfoMock}><Map/></MockedProvider>);
        await waitFor(() => expect(screen.getByText(/This place doesn't belong to any country/i)).toBeInTheDocument())
    })
});
