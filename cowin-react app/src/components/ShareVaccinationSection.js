import React from 'react'
import PrecautionDose from './PrecautionDose'
import ShareYourVaccinationStatus from './ShareYourVaccinationStatus'
import VaccinationForChildren from './VaccinationForChildren'

const ShareVaccinationSection = () => {
    return (
        <div>
            <PrecautionDose />
            <VaccinationForChildren />
            <ShareYourVaccinationStatus  />
        </div>
    )
}

export default ShareVaccinationSection
