import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faLifeRing,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/trustCards.css";

const TrustCards = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div
        className="card-text"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2>At Cloudex Digital we believe in </h2>
      </div>

      <div
        className="card-wrapper"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="card-content">
          <li>
            <FontAwesomeIcon icon={faComments} />
          </li>
          <h2> Transparent Communication</h2>
          <p>We keep you in the loop from day one—no jargon, no surprises.</p>
        </div>

        <div className="card-content">
          <li>
            <FontAwesomeIcon icon={faLifeRing} />
          </li>
          <h2> Dedicated Support</h2>
          <p>
            Always available for updates, fixes, or advice—our support doesn’t
            stop after launch
          </p>
        </div>

        <div className="card-content">
          <li>
            <FontAwesomeIcon icon={faChartLine} />
          </li>
          <h2>Proven Track Record</h2>
          <p>
            Backed by measurable SEO growth, speed scores, and client referrals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustCards;
