
// eslint-disable-next-line react/prop-types
const CarNewsCard = ({ id, img, desc }) => {
  return (
    <div
      className=" border-2 border-secondary rounded-md cursor-pointer"
      key={id}
    >
      <img src={img} alt="img" />
      <h3 className=" font-semibold text-lg p-2">{desc}</h3>
    </div>
  );
};

export default CarNewsCard;
