"use client";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import {  useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { TiStarFullOutline } from "react-icons/ti";


export default function Details() {
  const [dynamicData, setDynamicData] = useState<Record<string, any> | null>();

  

  const pathname: string | null = usePathname();
  const id = pathname?.split("/")[2];

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`${process.env.BASE_URL}/products/${id}`);
      if (res?.status === 200 && res?.data) {
        setDynamicData(res?.data);
        
      }

      console.log("api data", res);

      toast.success("Fetch details logic is running!");
    } catch (error) {
      console.log("this is api error", error);
      toast.error("Error fetching product details");
    }
  };
  const rating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<TiStarFullOutline key={i} color="yellow" size={25} />);
    }
    return (
      <div className=" w-[100%]  flex justify-center items-center " >
    <div className="flex space-x-1 ">{stars}</div>
    </div>

  )
  };

  useEffect(() => {
    fetchProductDetails();
  },[""]);
  return (
    <>
      {dynamicData && (
        <>
          <Grid container spacing={2}>
            <Grid className=" px-4   " size={{ xs: 12, md: 6 }}>
              <div className="bg-slate-300 w-full p-4 rounded-lg shadow-lg ">
                <Image
                  className=""
                  src={dynamicData?.images[0]}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <div className="bg-slate-300 w-full  h-16 flex justify-center items-center ">
                  <span>{dynamicData?.title} </span>
                </div>
              </div>
            </Grid>
            <Grid className=" px-4  " size={{ xs: 12, md: 6 }}>
              <div className="flex space-x-2">
                <div className="bg-slate-300 w-[50%] p-2 rounded-lg shadow-lg ">
                  Product price is: ${dynamicData?.price}
                </div>{" "}
                <div className="bg-slate-300 w-[50%] p-2 rounded-lg shadow-lg ">
                  Product rating is: {dynamicData?.rating}
                </div>{" "}
              </div>
              <div className="flex mt-3 space-x-2">
                <div className="bg-slate-300 w-[50%] p-2 rounded-lg shadow-lg ">
                  Product category: {dynamicData?.category}
                </div>{" "}
                <div className="bg-slate-300 w-[50%] p-2 rounded-lg shadow-lg ">
                  Discount: {dynamicData?.discountPercentage}%
                </div>{" "}
              </div>
              <Grid className=" py-4 " size={12}>
                <div className="bg-slate-300 w-[100%] h-72 my-3 p-4 rounded-lg shadow-lg ">
                  Product discriptions is: <br /> {dynamicData?.description}
                  <br /> Product warranty is:
                  <br /> {dynamicData?.warrantyInformation}
                </div>
              </Grid>
            </Grid>
            <Grid className=" my-7  " size={12}>
              <div className=" w-[100%] flex justify-center items-center">
                <div className="bg-slate-300 flex justify-center items-center rounded-lg w-[25%] h-16 py-5">
                  Product Review
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid className="my-4" container spacing={2}>
            {/* <div className=" flex  "> */}
            <Grid size={{ md: 4, xs: 12 }}>
              <div className="bg-slate-300 h-60 p-2  text-center rounded-lg ">
                {dynamicData?.reviews[0]?.reviewerName}
                <div className="  h-5 my-5  ">
                  {dynamicData?.reviews[0]?.comment}
                </div>
                <div className=" h-5 my-5 rounded-lg ">
                  {dynamicData?.reviews[0]?.date}
                </div>
                <div className=" h-5 my-5  rounded-lg ">
                  {dynamicData?.reviews[0]?.reviewerEmail}
                </div>
                <div className=" h-5   rounded-lg  ">
                  
                  {rating(dynamicData?.reviews[0]?.rating)}
                </div>
              </div>
            </Grid>
            <Grid className="    " size={{ md: 4, xs: 12 }}>
              <div className="bg-slate-300 h-60 my-1 p-2   text-center rounded-lg ">
                {dynamicData?.reviews[1]?.reviewerName}
                <div className="  h-5 my-5  ">
                  {dynamicData?.reviews[1]?.comment}
                </div>
                <div className=" h-5 my-5 rounded-lg ">
                  {dynamicData?.reviews[1]?.date}
                </div>
                <div className=" h-5 my-5  rounded-lg ">
                  {dynamicData?.reviews[1]?.reviewerEmail}
                </div>
                <div className="h-5 rounded-lg flex items-center">
             
                  {rating(dynamicData?.reviews[1]?.rating)}
                </div>
              </div>
            </Grid>
            <Grid className="   " size={{ md: 4, xs: 12 }}>
              <div className="bg-slate-300 h-60 my-1 p-2  text-center rounded-lg ">
                {dynamicData?.reviews[2]?.reviewerName}
                <div className="  h-5 my-5  ">
                  {dynamicData?.reviews[2]?.comment}
                </div>
                <div className=" h-5 my-5 rounded-lg ">
                  {dynamicData?.reviews[2]?.date}
                </div>
                <div className=" h-5 my-5  rounded-lg ">
                  {dynamicData?.reviews[2]?.reviewerEmail}
                </div>
                <div className="h-5 rounded-lg flex items-center">
                
                  {rating(dynamicData?.reviews[2]?.rating)}
                </div>
              </div>
            </Grid>
            {/* </div> */}
          </Grid>
        </>
      )}

      <Toaster />
    </>
  );
}
