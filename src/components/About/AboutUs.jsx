
import Vision from "./Vision";
import Approch from "./Approch";

const AboutUs = () => {
  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          About <span className=" text-primary">US</span>
        </h1>
      </div>

      <Vision />
      <Approch />
    </div>
  );
};

export default AboutUs;
