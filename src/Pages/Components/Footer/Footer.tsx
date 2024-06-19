import useBrand from "../../../context-api/Brandname-context/brandname";
import "./Footer.scss";
import { footerLinksContent } from "./footerLinksContent";

const Footer = () => {
  const { brandname } = useBrand();
  return (
    <section className="footer-wrapper">
      <div className="container">
        <div className="brandname">
          <h1>{brandname}</h1>
        </div>
        <div className="navlinks">
          {footerLinksContent.map((data, index) => (
            <div className="nav-div" key={index}>
              <h4 className="nav-header">{data.title}</h4>
              <div className="links-holder">
                {data.links.map((link, index) => (
                  <div className="link" key={index}>{link}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
