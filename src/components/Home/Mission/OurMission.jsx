
import img from "../../../assets/img/mission.jpg";

const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Mission</span>
        </h1>
      </div>

      <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        {/* img section  */}
        <div className="w-full md:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>

        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className=" font-bold text-primary text-xl lg:text-3xl">
            To create a community where every journey is extraordinary.
          </h1>
          <h2 className=" font-semibold text-lg lg:text-2xl">
            Empower individuals to achieve sustainable mobility solutions and
            inspire a positive impact on the environment.
          </h2>
          <p className=" text-sm lg:text-base">
             mission is customer service many like....,
          </p>
          <p className=" text-sm lg:text-base">
            Our mission is to provide top-quality automotive services with honesty, precision, and care. We aim to ensure 
            every vehicle on the road is safe, efficient, and reliable. By combining skilled technicians, advanced tools,
             and exceptional customer service, we strive to exceed expectations and build long-lasting relationships with our clients..
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
