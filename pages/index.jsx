import Nav from "../components/Nav";
import styles from "./styles.module.css";

function Home() {
  return (
    <>
      <Nav />
      <section className={styles.home_bg}>
        <div className={styles.home_hero_texto}>
          <h1 className={styles.hero1_text}>
            USED APARTMENTS WITH GREAT PRICES
          </h1>
          <h1 className={styles.hero2_text}>CONVEY A SENSE OF NOSTALGIA</h1>
          <h1 className={styles.hero3_text}>AT THE SAME TIME BEING FRESH</h1>
          <h1 className={styles.hero4_text}>HAVE YOUR VALUES</h1>
        </div>
      </section>

      <section className={styles.home_second_section}>
        <div className={styles.home_bg2}>
          <div className={styles.home_bg2_details}>
            <div>
              <h1 className={styles.home_bg_details_h1}>Property type</h1>
              <p className={styles.home_bg_details_p}>Apartment</p>
            </div>
            <div>
              <h1 className={styles.home_bg_details_h1}>Location</h1>
              <p className={styles.home_bg_details_p}>
                NYC Center, near Lower East Side
              </p>
            </div>
            <div>
              <h1 className={styles.home_bg_details_h1}>Pros</h1>
              <p className={styles.home_bg_details_p}>
                Confortable, near the center, cheap, great condition
              </p>
            </div>
          </div>
        </div>
        <aside className={styles.home_second_text}>
          <div className={styles.home_second_text_title}>
            <h1>Property Insurance</h1>
            <img src="/hand_home.svg" alt="hand and home" width="32px" />
          </div>
          <p className={styles.home_second_text_p_first}>
            Residences at the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
            Residences cat the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
            Residences cat the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
            Residences cat the neighborhood are protected with great insurance.
            Everyone are connected to this system at every type of housing.
          </p>
          <div className={styles.home_second_text_title}>
            <h1>24 hour service</h1>
            <img src="/clock.svg" alt="clock" />
          </div>
          <p className={styles.home_second_text_p}>
            And residences at the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance. Everyone are connected to this system at every type of
            housing. Residences cat the neighborhood are protected with great
            insurance.
          </p>
        </aside>
      </section>

      <div className={styles.home_line}>
        <img src="/line.svg" alt="line" />
      </div>

      <section className={styles.home_second_hero}>
        <img src="/bg3.png" alt="background 3" className={styles.home_second_hero_img}/>
        <div className={styles.home_hero_texto2}>
          <h1 className={styles.hero1_text2}>
            USED APARTMENTS WITH GREAT PRICES
          </h1>
          <h1 className={styles.hero2_text2}>CONVEY A SENSE OF NOSTALGIA</h1>
          <h1 className={styles.hero3_text2}>AT THE SAME TIME BEING FRESH</h1>
          <h1 className={styles.hero4_text2}>HAVE YOUR VALUES</h1>
        </div>
      </section>
    </>
  );
}

export default Home;
