import PropTypes from "prop-types";
import { PARTNERS } from "../../data/partners";

export const LogoCard = ({ logo }) => (
  <div
    className="
      /* Mobile: Fixed size */
      w-[155px] h-[80px]   
      
      /* Tablet: Scaling up */
      md:w-[180px] md:h-[110px] 
      
      /* Large Screen: 110% Zoom layout */
      lg:w-[295px] lg:h-[110px] lg:p-[18px] 
      
      bg-white shadow-xl lg:shadow-xl
      border border-gray-50 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    <img
      src={logo.image}
      alt={logo.name}
      className="max-h-[65px] md:max-h-[75px] lg:max-h-[100px] w-auto max-w-[95%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

LogoCard.propTypes = {
  logo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
  }).isRequired,
};

export const PartnerStaggeredGrid = () => {
  return (
    <div className="flex flex-col items-center">
      {/* MOBILE & TABLET: Centered flex container */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:hidden w-full max-w-[400px] md:max-w-full">
        {PARTNERS.map((partner, index) => (
          <LogoCard key={index} logo={partner} />
        ))}
      </div>

      {/* LARGE SCREENS: 4-5-4 Staggered Layout */}
      <div className="hidden lg:flex flex-col items-center gap-[30px] w-full">
        {/* Row 1: 4 Cards */}
        <div className="flex justify-center gap-[30px] w-full">
          {PARTNERS.slice(0, 4).map((partner, index) => (
            <LogoCard key={index} logo={partner} />
          ))}
        </div>

        {/* Row 2: 5 Cards - Physically wider row */}
        <div className="flex justify-center gap-[30px] w-full lg:w-[115%]">
          {PARTNERS.slice(4, 9).map((partner, index) => (
            <LogoCard key={index} logo={partner} />
          ))}
        </div>

        {/* Row 3: 4 Cards */}
        <div className="flex justify-center gap-[30px] w-full">
          {PARTNERS.slice(9, 13).map((partner, index) => (
            <LogoCard key={index} logo={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};
