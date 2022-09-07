import {GET_COUNTRY_INFO} from "../../components/CountryInformationPopup";

export const getEmptyCountryInfoMock = [
    {
        request: {
            query: GET_COUNTRY_INFO,
            variables: {
                code: ''
            }
        }
    }
]

export const getCountryInfoMock = [
    {
        request: {
            query: GET_COUNTRY_INFO,
            variables: {
                code: 'CH'
            }
        },
        result: {
            data: {
                country: {
                    "name": "Switzerland",
                    "native": "Schweiz",
                    "capital": "Bern",
                    "currency": "CHE,CHF,CHW",
                    "languages": [
                        {
                            "name": "German"
                        },
                        {
                            "name": "French"
                        },
                        {
                            "name": "Italian"
                        }
                    ]
                }
            }
        }
    }
]

export const countryMock = {
    "name": "Switzerland",
    "native": "Schweiz",
    "capital": "Bern",
    "currency": "CHE,CHF,CHW",
    "languages": [
    {
        "name": "German"
    },
    {
        "name": "French"
    },
    {
        "name": "Italian"
    }
]
}
