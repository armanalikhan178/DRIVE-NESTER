
import img from "../../assets/img/aproach1.jpg";

const Approch = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Approch</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className=" text-sm lg:text-base">
          satisfaction. With a commitment to transparency,
        </p>
        <p className=" text-sm lg:text-base">
           routine maintenance and engine repairs to bodywork and tire services, our team ensures safety, performance, and customer 
             satisfaction. With a commitment to transparency,
            quality, and convenience,
            At Drive Nester, our approach focuses on combining expertise, technology, and customer care to deliver 
            the best automotive experience. We prioritize understanding each customer’s unique needs, providing personalized solutions,
             and ensuring transparency in every service. From vehicle maintenance and repairs to buying and selling
            , our method is centered on quality, efficiency, and building long-term trust with our clients.
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Approch;
