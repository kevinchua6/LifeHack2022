import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_KEY);

  const [postalCode, setPostalCode] = useState("");
  const [eWaste, setEWaste] = useState([]);
  return (
    <div>
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          borderRadius: "11px",
          alignItems: "center",
        }}
      >
        <LandingPage />
      </section>

      <section style={{ position: "relative" }}>
        <div className="wrapper">
          <List
            list={[
              { id: 1, address: "NUS utown" },
              { id: 2, address: "my house" },
              { id: 2, address: "my house" },
              { id: 2, address: "my house" },
              { id: 2, address: "my house" },
              { id: 2, address: "my house" },
            ]}
          />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
              width: "100%",
              borderRadius: "11px",
              background: "white",
            }}
          >
            hello
          </div>
        </div>

        <Maps
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          eWaste={eWaste}
          setEWaste={setEWaste}
        />
      </section>
    </div>
  );
};
export default Home;
