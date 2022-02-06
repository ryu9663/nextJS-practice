import React from "react";
import Seo from "../components/Seo";
function about() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
      <div className="container">
        {[1, 2, 3, 4, 5].map((el) => (
          <div className="container" key={el}>
            {el}
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  );
}

export default about;
