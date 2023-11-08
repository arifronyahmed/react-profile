import Header from "./Header";
import Apropos from "./Apropos";
import Formation from "./Formation";
import Avantages from "./Avantages";
function HomePage() {
  return (
    <>
      <div className="mb-20 container mx-auto max-w-6xl mt-20">
        <Header />
        <section className="section">
          <Apropos />
          <br />
          <Formation />
          <Avantages />
        </section>
      </div>
    </>
  );
}

export default HomePage;
