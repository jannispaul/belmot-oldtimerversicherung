import React from "react"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
// import Hero from "../components/Hero"
// import ScrollAnchor from "../components/ScrollAnchor"
// import Benefit from "../components/Benefit"
// import CarPool from "../components/CarPool"
// import TypesOfCars from "../components/TypesOfCars"
// import Features from "../components/Features"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Belmot Oldtimerversicherung"
                    keywords={[
                        `Belmot`,
                        `Oldtimerversicherung`,
                        `Youngtimer`,
                        `Oldtimer`,
                    ]}
                />
            </StandardLayout>
        )
    }
}

export default IndexPage