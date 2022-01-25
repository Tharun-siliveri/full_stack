
import Navbar from './Navbar';
import CarouselWithHeader from './CarouselWithHeader';
import HelpLineSection from './HelpLineSection';
import VaccinationCount from './VaccinationCount';
import ShareVaccinationSection from './ShareVaccinationSection';
import NearestCentersection from './NearestCentersection';
import WatsNewOnCowin from './WatsNewOnCowin';
import InternationalCertificates from './InternationalCertificates';
import RaiseAnIssue from './RaiseAnIssue';
import EasyVaccination from './EasyVaccination';
import VaccinationDrive from './VaccinationDrive';
import OurPartners from './OurPartners';
import Footer from './Footer';
function LandingPage() {
 
  return (
    <>
      <Navbar />
      <div style={{height:'60px'}}></div>
      <CarouselWithHeader />
      <div style={{height:'60px'}}></div>
      <HelpLineSection />
      <VaccinationCount/>
      <ShareVaccinationSection />
      <NearestCentersection />
      <WatsNewOnCowin />
      <InternationalCertificates />
      <RaiseAnIssue />
      <EasyVaccination />
      <VaccinationDrive />
      <OurPartners />
      <Footer />
    </>
  );
}

export default LandingPage;
