import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const ItemCards = ({ title, imgUrl }: { title: string; imgUrl: string }) => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={imgUrl}
          alt={title}
          // fill
          height={0}
          width={0}
          className="rounded-md object-cover w-[100%] h-auto"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default ItemCards;

{
  /* <div className="absolute top-2 right-3 p-3 hover:bg-gray-200 rounded-full">
          <HeartIcon className="h-6 w-6 text-gray-600" />
        </div> */
}
{
  /* <div className="mt-2 flex items-center justify-between">
            <h3 className="text-sm font-medium">{title}</h3>
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <EllipsisHorizontalIcon className="h-6 w-6" />
            </div>
       </div>  */
}


{/* <div className="grid w-full grid-cols-4 gap-3">
  <div className="flex flex-col gap-3">
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img4}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img2}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-3">
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img3}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img4}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-3">
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img5}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img6}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-3">
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img4}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
    <div className="group relative h-fit overflow-hidden">
      <img
        src={Img3}
        alt={"hrello"}
        className="h-auto w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 group-hover:bg-opacity-50">
        <h3 className="text-lg font-bold text-white">{"cool"}</h3>
      </div>
    </div>
  </div>
</div>; */}