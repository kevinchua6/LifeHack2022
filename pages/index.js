import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_KEY);
  const [results, setResults] = useState([]);

  return (
    <div>
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LandingPage />
      </section>

      <section style={{ position: "relative" }}>
        <List
          list={[
            {
              distance: 800,
              properties: {
                ID: 1,
                Name: "NUS",
                Location: "nus school of computing",
              },
            },
          ]}
        />
        <Maps />
      </section>
    </div>
  );
};
export default Home;
