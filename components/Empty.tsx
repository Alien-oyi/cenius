import Image from "next/image";

interface EmptyProps {
    label:string
}

const Empty = ({ label }: EmptyProps ) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center bg-black">
        <div className="relative h-72 w-72">
            <Image
            alt="Empty"
            fill
            src="/empty.gif" />
        </div>
          <p className="text-green-200 cursor-default text-sm text-center">
            {label}
        </p>
    </div>
  );
};

export default Empty;