import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-hero w-screen xs:h-auto lg:h-[1215px] bg-no-repeat bg-cover pt-[5.375rem] xs:px-4 lg:px-40">
        <HomeCard />
      </div>

      <section className="w-screen py-20 xs:px-4 lg:px-40 flex lg:flex-row xs:flex-col xs:items-center lg:items-start justify-center lg:gap-0 xs:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 xs:w-full lg:w-1/2">
          <h1 className="font-bold xs:text-lg lg:text-xl">
            Property insurance
          </h1>
          <p className="xs:w-auto lg:w-[640px] text-center xs:text-base lg:text-lg">
            Residences at the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
            Residences cat the neighborhood are protected with great insurance.
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xs:w-full lg:w-1/2">
          <h1 className="font-bold xs:text-lg lg:text-xl">
            All-day-long service
          </h1>
          <p className="xs:w-auto lg:w-[640px] text-center xs:text-base lg:text-lg">
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
        </div>
      </section>

      <section className="w-screen xs:py-10 lg:py-20 xs:px-4 lg:px-40 xs:gap-4 lg:gap-8 flex xs:flex-col lg:flex-row justify-center items-center">
        <div className="w-full h-80 bg-custom-blue rounded-2xl"></div>
        <div className="w-full h-80 bg-custom-orange rounded-2xl"></div>
        <div className="w-full h-80 bg-custom-blue rounded-2xl"></div>
      </section>

      <section className="w-screen xs:py-10 lg:py-20 xs:px-4 lg:px-40 gap-4 flex flex-col justify-center items-center">
        <h1 className="font-bold xs:text-lg lg:text-xl">
          All-day-long service
        </h1>
        <p className="w-full xs:text-base lg:text-lg text-center">
          And residences at the neighborhood are protected with great insurance.
          Everyone are connected to this system at every type of housing.
          Residences cat the neighborhood are protected with great insurance.
          Everyone are connected to this system at every type of housing.
          Residences cat the neighborhood are protected with great insurance.
        </p>
      </section>

      <section className="flex xs:justify-center lg:justify-start xs:py-10 lg:py-20 xs:px-4 lg:px-40 xs:gap-8 lg:gap-20 xs:flex-col lg:flex-row">
        <div className="flex flex-col items-start xs:w-full lg:w-1/2 gap-4">
          <h1 className="font-bold xs:text-lg lg:text-xl">
            Property insurance
          </h1>
          <p className="w-full xs:text-base lg:text-lg">
            Residences at the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
            Residences cat the neighborhood are protected with great insurance.
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
        </div>
        <img src="/hero2.png" alt="second hero" />
      </section>
      <Footer />
    </>
  );
}

export default Home;
