import Axios from "axios";
import { useEffect, useState } from "react";

export default function Api() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    // API
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <>
      <h1>Fetching data from an API (useEffect)</h1>
      <button onClick={fetchFact}>Fetch Data</button>
      <p>{catFact}</p>
    </>
  );
}
