import {render} from "@testing-library/react";

import CountryInformation from "../components/CountryInformation";
import {countryMock} from "./mocks/mocks";

describe('<CountryInformation />',  () => {
    test("Should render Loading text with prop loading=true", () => {
        const container = render(<CountryInformation country={null} coordinates={null} loading={true} isReverseLocationSearchLoading={false}/>);
        expect(container.getByText(/The info is loading/i)).toBeInTheDocument();
    })

    test("Should render Loading text with prop isReverseLocationSearchLoading=true", () => {
        const container = render(<CountryInformation country={null} coordinates={null} loading={false} isReverseLocationSearchLoading={true}/>);
        expect(container.getByText(/The info is loading/i)).toBeInTheDocument();
    })

    test("Should render message 'This place doesn't belong to any country' with nullish country prop value", () => {
        const container = render(<CountryInformation country={null} coordinates={null} loading={false} isReverseLocationSearchLoading={false}/>);
        expect(container.getByText(/This place doesn't belong to any country/i)).toBeInTheDocument();
    })

    test("Should render information about country with passed non-nullish country prop", () => {
        const container = render(<CountryInformation country={countryMock} coordinates={null} loading={false} isReverseLocationSearchLoading={false}/>);
        expect(container.getByText(/Country: Switzerland \/ Schweiz/i)).toBeInTheDocument();
        expect(container.getByText(/Capital: Bern/i)).toBeInTheDocument();
        expect(container.getByText(/Languages:/i)).toBeInTheDocument();
        expect(container.getByText(/German/i)).toBeInTheDocument();
        expect(container.getByText(/, French/i)).toBeInTheDocument();
        expect(container.getByText(/, Italian/i)).toBeInTheDocument();
        expect(container.getByText(/Currency:/i)).toBeInTheDocument();
        expect(container.getByText(/CHE/i)).toBeInTheDocument();
        expect(container.getByText(/, CHF/i)).toBeInTheDocument();
        expect(container.getByText(/, CHW/i)).toBeInTheDocument();
    })
});
