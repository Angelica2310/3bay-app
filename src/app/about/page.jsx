import React from "react";

export const metadata = {
  title: "3Bay | About Us",
  description: "Find more information about 3Bay and its co-founders.",
};

export default function AboutUsPage() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gingeralefizz">
              Welcome to 3Bay, your ultimate online shopping destination where
              you can find everything you want at affordable prices. At 3Bay, we
              are committed to offering a diverse selection of quality products,
              from the latest gadgets and stylish fashion to home essentials and
              unique finds, all designed to fit your budget. Our platform is
              built for convenience, with a user-friendly interface, secure
              payment options, and reliable delivery to ensure a seamless
              shopping experience. Whether you're searching for daily
              necessities or something special, 3Bay is here to make online
              shopping easy, affordable, and enjoyable for everyone.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://cdn.pixabay.com/photo/2019/02/16/14/19/shopping-4000414_1280.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
              Meet Our Co-Founders
            </h1>
            <p className="font-normal text-base leading-6 text-gingeralefizz ">
              <strong>Angelica</strong>: The visionary strategist behind 3Bay,
              Angelica drives innovation and ensures a seamless shopping
              experience. Her forward-thinking approach keeps 3Bay ahead of
              trends and exceeding customer expectations.
              <br />
              <strong>Liz</strong>: As the creative force behind 3Bay, Liz leads
              branding and design, making every interaction with the platform
              visually engaging and user-friendly. Her keen attention to detail
              ensures shopping at 3Bay is always a delight.
              <br />
              <strong>Bertie</strong>: The operations expert, Bertie keeps 3Bay
              running smoothly by managing logistics and refining processes. His
              expertise guarantees that products reach customers quickly and
              efficiently.
              <br />
              <strong>Jamie</strong>: A true customer advocate, Jamie is
              dedicated to building strong relationships and delivering
              exceptional service. His commitment to understanding customer
              needs is central to 3Bay’s success.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Angelica featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Angelica featured Image"
                />
                <p className="font-medium text-xl leading-5 mt-4">Angelica</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Liz featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Liz featured Image"
                />
                <p className="font-medium text-xl leading-5 mt-4">Liz</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Bertie featued Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Bertie featued Image"
                />
                <p className="font-medium text-xl leading-5 mt-4">Bertie</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Jamie featured image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Jamie featured image"
                />
                <p className="font-medium text-xl leading-5 mt-4">Jamie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
