import {act, render, screen, waitFor} from '@testing-library/react'
import {MockedProvider} from "@apollo/client/testing";

import Map from "../components/Map";
import {getCountryInfoMock} from "./mocks/mocks";

const MapInMockedProvider = <MockedProvider mocks={getCountryInfoMock}><Map/></MockedProvider>;

describe('<Map/>', () => {
    test('Renders error message when reverse locator API call fails', async () => {
        const mockedFetch = jest.fn().mockRejectedValue(new Error());
        global.fetch = mockedFetch;
        await act(async () => {
            render(MapInMockedProvider)
        });
        expect(mockedFetch).toHaveBeenCalledTimes(1);
        expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
        global.fetch.mockClear()
    });

    test('renders MapContainer when error is not set', async () => {
        const mockedFetch = jest.fn().mockResolvedValue({json: jest.fn().mockResolvedValue({data: {"address": {"country": "Switzerland"}}})});
        global.fetch = mockedFetch;
        await act(async () => {
            render(MapInMockedProvider)
        });
        await waitFor(() => {
            expect(mockedFetch).toHaveBeenCalledTimes(1)
        })
        await waitFor(() => {
            expect(screen.getByText(/country: switzerland/i)).toBeInTheDocument()
        })
        global.fetch.mockClear()
    });
})
