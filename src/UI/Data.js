const Data = (props) => {
  return (
    <div className="flex justify-center">
      <p className="bg-purple-main text-white drop-shadow-xl text-6xl font-semibold -rotate-12 m-6 px-5 ">
        {props.children}
      </p>
    </div>
  );
};

export default Data;
