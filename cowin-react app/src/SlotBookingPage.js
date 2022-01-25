import React from 'react';
import BookYourSlot from './components/BookYourSlot';
import Footer from './components/Footer';
import HeaderNew from './components/HeaderNew';
import NavbarNew from './components/NavbarNew';



const SlotBookingPage = () => {
  return (
      <>
            <NavbarNew />
            <div style={{height:'60px'}}></div>
            <HeaderNew />
            <BookYourSlot/>
            <Footer />
      </>
  )
};

export default SlotBookingPage;
