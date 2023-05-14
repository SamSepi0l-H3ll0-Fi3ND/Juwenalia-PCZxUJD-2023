const Person = (props) => {
  return (
    <div className="flex flex-wrap w-5/12 max-[840px]:gap-3 max-[840px]:w-full max-[840px]:justify-center max-[540px]:justify-normal max-[1640px]:w-1/2">
      {props.children}
    </div>
  );
};

export default Person;
