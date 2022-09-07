import Head from "next/head";
import ImportedMap from "../components/ImportedMap";
import Script from "next/script";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>RepRisk Home Assignment</title>
                <link rel="icon" href="/reprisk-map/src/public/favicon.ico"/>
                <Script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
                        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
                        crossOrigin=""></Script>
            </Head>
            <main>
                <ImportedMap/>
            </main>
        </div>
    )
}
