import "./footer.css";

function Block({
  title,
  item1,
  item2,
  item3,
  item4 = "",
  item5 = "",
  item6 = "",
  item7 = "",
  item8 = "",
  item9 = "",
}) {
  return (
    <div className="model">
      <ul>
        <h3>{title}</h3>
        <br />
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
        <li>{item4}</li>
        <li>{item5}</li>
        <li>{item6}</li>
        <li>{item7}</li>
        <li>{item8}</li>
        <li>{item9}</li>
      </ul>
    </div>
  );
}

function handleTop() {}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bottom-items">
        <Block
          title={"Models"}
          item1={"Menu"}
          item2={"All Models"}
          item3={"Model Price List"}
        />
        <Block
          title={"Used Cars"}
          item1={"Menu"}
          item2={"Audi Approved Plus"}
          item3={"Dealer Location"}
        />
        <Block
          title={"Customer Area"}
          item1={"Menu"}
          item2={"Audi Owners"}
          item3={"Audi Services"}
          item4={"myAudi Connect"}
          item5={"Audi Club Rewards"}
          item6={"Audi Concierge"}
          item7={"Subtainability"}
          item8={"Discover Audi from Home"}
          item9={"Book a test drive"}
        />
        <Block
          title={"Innovation"}
          item1={"Menu"}
          item2={"Audi RS e-tron GT"}
          item3={"Audi e-tron hub"}
        />
        <Block
          title={"Support"}
          item1={"Menu"}
          item2={"Careers"}
          item3={"Press"}
          item4={"Audi Shop"}
          item5={"Imprint"}
          item6={"Corparate Governace"}
          item7={"Contact/Newsletter"}
        />
      </div>
      <div className="copyrightContent">
        <span
          style={{ display: "flex", justifyContent: "flex-start", gap: "40px" }}
        >
          <p>&#169; 2024 &#169; AUDI AG.</p>
          <p>Legal</p>
          <p>Cookie Policy</p>
          <p>Press</p>
          <p>Cookie Setting</p>
          <p>Careers</p>
        </span>
        <br />
        <br />
        <p>
          “The specified values of fuel consumption and emission are determined
          according to the mandatory emission test measurement specified in Rule
          115 of Central Motor Vehicle Rules 1989 (CMVR), under controlled
          conditions using reference fuel, at an agency authorized under Rule
          126 of CMVR. Fuel consumption and emission values may vary due to
          factors such as driving habits, road and traffic condition, fuel
          quality, maintenance practices, loading pattern, ambient condition and
          engineering tolerances etc. <br />
          <br />
          The values declared for the vehicles have been obtained from one of
          the variant tested as per Central Motor Vehicle Rule 115. Fuel
          consumption and emission value for other variants may differ. Audi
          India or its authorize dealers shall not be held liable for any
          difference in fuel consumption values, due to any of the aforesaid
          variables.
          <br />
          <br /> Due to constant product improvement / changes in regulatory
          framework, technical specification provided herewith are subject to
          change without prior notice, customers are requested to contact Audi
          Call Centre / Audi Authorised Dealer for further details.”
        </p>
      </div>
    </footer>
  );
}
