import React from "react";

function Main({ country }) {
  console.log("country main", country);

  const mainData = country.response ? country.response[0].cases : null;
  const { active, critical, recovered, total } = mainData || {};

  return (
    <div style={{backgroundColor:"skyblue"}}>
      <h1>Covid Cases</h1>
<div style={{display:"flex", justifyContent:"space-between"}}>

      <div >
        <h2>new</h2>
        <p>{mainData.new ? mainData.new : "Not Found"}</p>
      </div>
      <div>
        <h2>active</h2>
        <p>{active ? active : "Not Found"}</p>
      </div>
      <div>
        <h2>critical</h2>
        <p>{critical ? critical : "Not Found"}</p>
      </div>
      <div>
        <h2>recovered</h2>
        <p>{recovered ? recovered : "Not Found"}</p>
      </div>
      <div>
        <h2>total</h2>
        <p>{total ? total : "Not Found"}</p>
      </div>
    </div>
    </div>
  );
}

export default Main;