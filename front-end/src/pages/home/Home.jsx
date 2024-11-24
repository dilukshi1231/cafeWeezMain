import React from 'react';
import Banner from './Banner';
import BlogBar from './BlogBar';
import PopularMenu from './PopularMenu';
import ReviewBar from './ReviewBar';
import Service from './Service';
import TableBooking from './TableBooking';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const Home = () => {
  return (
    <>
    <div>
      <NavBar/>
    </div>
      
    <div className="flex flex-col min-h-screen bg-[#C73659]">
      {/* Header/NavBar */}
      
      {/* Main Content */}
      <main className="flex-1 pt-20 md:pt-18 w-full bg-white ">
        <Banner />
        
        {/* Sections with padding */}
        <section className="px-4 md:px-8 lg:px-16 py-12 w-full">
          <PopularMenu />
        </section>

        <section className="px-4 md:px-8 lg:px-16 py-12 w-full">
          <Service />
        </section>

        <section className="px-4 md:px-8 lg:px-16 py-12 w-full">
          <TableBooking />
        </section>

        <section className="px-4 md:px-8 lg:px-16 py-12 w-full">
          <ReviewBar />
        </section>

        <section className="px-4 md:px-8 lg:px-16 py-12 w-full">
          <BlogBar />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#151515] text-white">
        <Footer />
      </footer>
    </div>
    </>
  );
};

export default Home;
