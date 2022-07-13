import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-hero w-screen xs:h-auto lg:h-[915px] bg-no-repeat bg-cover flex items-center justify-center xs:px-4 lg:px-40">
        <h1 className="flex justify-center items-center text-8xl font-extrabold text-white overflow-hidden text-center">
          Enjoy your <br /> morning coffee
        </h1>
      </div>

      <section className="w-screen py-20 xs:px-4 lg:px-40 flex lg:flex-row xs:flex-col xs:items-center lg:items-start justify-center lg:gap-0 xs:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 xs:w-full lg:w-1/2">
          <h1 className="font-bold xs:text-lg lg:text-xl">Healthy</h1>
          <p className="xs:w-auto lg:w-[640px] text-center xs:text-base lg:text-lg">
            We believe that a cup of coffee is one of the simplest pleasures in
            life. Ready to boost your productivity and build your mood with a
            glass of coffee in your day.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xs:w-full lg:w-1/2">
          <h1 className="font-bold xs:text-lg lg:text-xl">Your favourite</h1>
          <p className="xs:w-auto lg:w-[640px] text-center xs:text-base lg:text-lg">
            Choose your favourite coffee. We have more than 50+ types of coffee
            that are ready to be served by our people. Always providing the best
            to make our customer pleasent with our services.
          </p>
        </div>
      </section>

      <section className="w-screen xs:py-10 lg:py-20 xs:gap-4 lg:gap-8 flex xs:flex-col lg:flex-row relative">
        <img src="/hero3.png" alt="third hero" />
        <div className="xs:hidden lg:block absolute text-white p-40">
          <h1 className="xs:text-lg lg:text-xl mb-8 font-bold">All-day-long</h1>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            Ah, coffee. Whether you’re cradling a travel mug on your way to work
            or dashing out after spin class to refuel with a skinny latte, it’s
            hard to imagine a day without it. The caffeine perks you up, and
            there’s something incredibly soothing about sipping a steaming cup
            of joe. But is drinking coffee good for you?
          </p>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            Good news: The case for coffee is stronger than ever. Study after
            study indicates you could be getting more from your favorite morning
            beverage than you thought: Coffee is chock full of substances that
            may help guard against conditions more common in women, including
            Alzheimer’s disease and heart disease.
          </p>
          <p className="w-[320px] mb-6 xs:text-base lg:text-lg">
            Caffeine is the first thing that comes to mind when you think about
            coffee. But coffee also contains antioxidants and other active
            substances that may reduce internal inflammation and protect against
            disease, say nutrition experts from Johns Hopkins University School
            of Medicine.
          </p>
        </div>
      </section>

      <section className="flex xs:justify-center lg:justify-start xs:py-10 lg:py-20 xs:px-4 lg:px-40 xs:gap-8 lg:gap-20 xs:flex-col lg:flex-row">
        <div className="flex flex-col xs:items-center lg:items-start xs:w-full lg:w-1/2 gap-4">
          <h1 className="font-bold xs:text-lg lg:text-xl">Benefits</h1>
          <p className="w-full xs:text-base lg:text-lg xs:text-center lg:text-left">
            Recent studies found that coffee drinkers are less likely to die
            from some of the leading causes of death in women: coronary heart
            disease, stroke, diabetes and kidney disease. Drinking one to two
            cups of coffee a day may help ward off heart failure, when a
            weakened heart has difficulty pumping enough blood to the body.
          </p>
          <p className="w-full xs:text-base lg:text-lg xs:text-center lg:text-left">
            Almost two-thirds of Americans living with Alzheimer’s disease are
            women. But the caffeine in two cups of coffee may provide
            significant protection against developing the condition. In fact,
            researchers found that women age 65 and older who drank two to three
            cups of coffee a day were less likely to develop dementia in
            general.
          </p>
          <h1 className="font-bold xs:text-lg lg:text-xl mt-8">Informations</h1>
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
