
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>

      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Vision</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className=" text-sm lg:text-base">
          We aim to create a trusted, seamless platform 
         where every car and bike owner can access top-quality services,
        </p>
        <p className=" text-sm lg:text-base">
         At Drive Nester, our vision is to revolutionize the way people experience vehicles. 
         find reliable vehicles, and enjoy hassle-free maintenance. 
         By combining innovation, technology, and customer-centric 
         solutions, we strive to make vehicle ownership safer, more efficient, and truly enjoyable for everyone.
        </p>
      </div>
    </div>
  );
};

export default Vision;
