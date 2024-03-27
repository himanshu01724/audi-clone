import "./fifth.css";
import fourth1 from "../assets/Landing_page/fourth1.jpg";
import fourth2 from "../assets/Landing_page/fourth2.jpg";
import fourth3 from "../assets/Landing_page/fourth3.jpg";
import fifth1 from "../assets/Landing_page/fifth1.jpg";
import fifth2 from "../assets/Landing_page/fifth2.jpg";
import fifth3 from "../assets/Landing_page/fifth3.jpeg";

function Card({ image, title, action }) {
  return (
    <div className="card">
      <img src={image} alt="taine" />
      <h3>{title}</h3>
      <p>{action} &gt;</p>
    </div>
  );
}

function Content({ text, children }) {
  return (
    <div>
      <h1 style={{ padding: "80px" }}>{text}</h1>
      <div className="striper">{children}</div>
    </div>
  );
}

function Fifth() {
  return (
    <>
      <Content text="Your Audi is waiting">
        <Card
          image={fourth3}
          title={"Book a test drive"}
          action={`Click here`}
        />
        <Card
          image={fourth1}
          title={"Audi Approved Plus"}
          action={`Learn More`}
        />
        <Card
          image={fourth2}
          title={"Book Online Service"}
          action={`Click here`}
        />
      </Content>
      <Content text="Press Release">
        <Card
          image={fifth1}
          title={
            "Audi India registers 89% growth in 2023 - 7,931 retail units sold"
          }
          action={`2023-01-05`}
        />
        <Card
          image={fifth3}
          title={`Audi India inaugurates country’s first RE-powered ultra-fast charging station`}
          action={`2023-12-14`}
        />
        <Card
          image={fifth2}
          title={"Audi India announces price hike across model range"}
          action={`2023-11-27`}
        />
      </Content>
    </>
  );
}

export default Fifth;
