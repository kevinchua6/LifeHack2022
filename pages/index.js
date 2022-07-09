import FormContainer from "../components/FormContainer";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_KEY);
  const [postalCode, setPostalCode] = useState("");
  const [eWaste, setEWaste] = useState([]);
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
            { id: 1, address: "NUS utown" },
            { id: 2, address: "my house" },
            { id: 2, address: "my house" },
            { id: 2, address: "my house" },
            { id: 2, address: "my house" },
            { id: 2, address: "my house" },
          ]}
        />
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
