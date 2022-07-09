import FormContainer from "../components/FormContainer";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";

const LIMIT = 10;
const Home = () => {
  console.log(process.env.NEXT_PUBLIC_KEY);
  const [results, setResults] = useState([]);

  return (
    <div>
      <section style={{ height: "100vh" }}>
        <FormContainer
          setPostalCode={setPostalCode}
          postalCode={postalCode}
          eWaste={eWaste}
          setEWaste={setEWaste}
        />
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
