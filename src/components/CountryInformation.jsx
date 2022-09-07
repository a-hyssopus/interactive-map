const CountryInformation = ({loading, country, isReverseLocationSearchLoading }) => {
    const content = () => {
        if (loading || isReverseLocationSearchLoading) {
            return <p>The info is loading...</p>
        } else {
            if (country) {
                return (<><p>Country: {country?.name} / {country?.native}</p>
                    <p>Capital: {country?.capital}</p>
                    <p>Languages: {country?.languages.map((language, index) => <span
                        key={index}>{`${index ? ', ' : ''} ${language.name}`}</span>)}</p>
                    <p>Currency: {country?.currency.split(',').map((currency, index) => <span
                        key={index}>{`${index ? ', ' : ''} ${currency}`}</span>)}</p></>)
            } else {
                return <p>This place doesn't belong to any country</p>
            }
        }
    }

    return content()
}

export default CountryInformation
