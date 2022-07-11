import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-hero w-screen xs:h-auto lg:h-[1215px] bg-no-repeat bg-cover pt-[18rem] xs:px-4 lg:px-40">
        <h1 className="flex justify-center items-center text-8xl font-extrabold text-white overflow-hidden">
          Coffee dreams
        </h1>
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

      <section className="w-screen xs:py-10 lg:py-20 xs:gap-4 lg:gap-8 flex xs:flex-col lg:flex-row relative">
        <img src="/hero3.png" alt="third hero" />
        <div className="xs:hidden lg:block absolute text-white p-40">
          <h1 className="xs:text-lg lg:text-xl mb-8 font-bold">All-day-long</h1>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing.
          </p>
        </div>
      </section>

      <section className="flex xs:justify-center lg:justify-start xs:py-10 lg:py-20 xs:px-4 lg:px-40 xs:gap-8 lg:gap-20 xs:flex-col lg:flex-row">
        <div className="flex flex-col xs:items-center lg:items-start xs:w-full lg:w-1/2 gap-4">
          <h1 className="font-bold xs:text-lg lg:text-xl">
            Property insurance
          </h1>
          <p className="w-full xs:text-base lg:text-lg xs:text-center lg:text-left">
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
          <h1 className="font-bold xs:text-lg lg:text-xl mt-8">Informações</h1>
          <div className="flex items-center gap-4">
            <img src="/tel.svg" alt="telephone" width={18} />
            <p>9 9999 9999</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/pin.svg" alt="pin" width={18} />
            <p>Next to this place</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/mail.svg" alt="email" width={18} />
            <p>this@example.com</p>
          </div>
        </div>
        <img src="/hero2.png" alt="second hero" />
      </section>
      <Footer />
    </>
  );
}

export default Home;
