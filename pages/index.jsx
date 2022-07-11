import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-hero w-screen h-[1215px] bg-no-repeat bg-cover pt-[5.375rem] px-40">
        <HomeCard />
      </div>

      <section className="w-screen py-20 px-40 flex items-start justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-1/2">
          <h1 className="font-bold text-xl">Property insurance</h1>
          <p className="w-[640px] text-center text-lg">
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
        <div className="flex flex-col items-center justify-center gap-4 w-1/2">
          <h1 className="font-bold text-xl">All-day-long service</h1>
          <p className="w-[640px] text-center text-lg">
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
        </div>
      </section>

      <section className="w-screen py-20 px-40 gap-8 flex justify-center items-center">
        <div className="w-full h-80 bg-custom-blue rounded-2xl"></div>
        <div className="w-full h-80 bg-custom-orange rounded-2xl"></div>
        <div className="w-full h-80 bg-custom-blue rounded-2xl"></div>
      </section>

      <section className="w-screen py-20 px-40 gap-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">All-day-long service</h1>
        <p className="w-full text-lg text-center">
          And residences at the neighborhood are protected with great insurance.
          Everyone are connected to this system at every type of housing.
          Residences cat the neighborhood are protected with great insurance.
          Everyone are connected to this system at every type of housing.
          Residences cat the neighborhood are protected with great insurance.
        </p>
      </section>
      <section className="flex justify-start py-20 px-40 gap-20">
        <div className="flex flex-col items-start w-1/2 gap-4">
          <h1 className="font-bold text-xl">Property insurance</h1>
          <p className="w-full text-lg">
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
