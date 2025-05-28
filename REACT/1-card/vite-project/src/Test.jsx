import Axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    // API
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <>
      <h1>Fetching data from an API (useEffect)</h1>
      <p>{catFact}</p>
    </>
  );
}
