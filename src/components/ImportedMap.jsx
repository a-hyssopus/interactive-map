import React from 'react'
import dynamic from 'next/dynamic'

function ImportedMap() {
    const Map = dynamic(
        () => import('./Map'),
        {
            loading: () => <p>The map is loading</p>,
            ssr: false
        }
    )
    return <Map />
}

export default ImportedMap
