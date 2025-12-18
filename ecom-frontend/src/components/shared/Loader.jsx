import { RotatingLines } from "react-loader-spinner";

export const Loader = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-[450px] w-full">
      <div className="flex flex-col gap-2 justify-center items-center">
        <RotatingLines
          visible={true}
          height="56"
          width="56"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="text-slate-800">{text ? text : "Please wait . . . ."}</p>
      </div>
    </div>
  );
};
