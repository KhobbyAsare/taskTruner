import { useState } from "react";
import "./Pricing.scss";
import Form from "react-bootstrap/Form";
import { PricingContent } from "./pricingContent";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(e.target.checked);
  };

  //   useEffect(() => {
  //     console.log(isYearly);
  //   }, [isYearly]);
  return (
    <section className="pricing-section-wrapper">
      <div className="container">
        <div className="text-section">
          <p className="ai-p-text">AI-POWERED TASK RECOMMENDATION</p>
          <h1 className="ai-h1-text">
            Boost Team Productivity with Shared Task Spaces
          </h1>
        </div>
        <div className="toggle">
          <Form>
            <label htmlFor="">Yearly</label>
            <Form.Switch
              type="switch"
              id="custom-switch"
              checked={isYearly}
              onChange={handleSwitchChange}
            />
            <label htmlFor="">Monthly</label>
          </Form>
        </div>
        <div className="pricing-cards">
          {PricingContent.map((data, index) => (
            <div className="card" key={index}>
              <h5>{data.plan} Plan</h5>
              <div className="des">
                <p>{data.planDes}</p>
              </div>

              <h1 className="price">{data.price}</h1>
              <ul className="plan-benefits">
                {data.planBenefits.map((benefit, index) => (
                  <li key={index}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#666666"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11"
                        color="#666666"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="get-started-button">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
