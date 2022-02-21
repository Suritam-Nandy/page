function App() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="xs:max-w-sm bg-baseBlack mx-auto  justify-center items-start p-6">
        <div className="flex flex-row justify-between pb-10 border-b-2 border-gray">
          <img src="/assets/menu.png" className="w-4 h-3 mt-1" />
          <img src="/assets/cart.png" className="w-6 h-5" />
        </div>
        <div className="py-8 px-2">
          <img src="/assets/pic1.png" />
        </div>
        <div className="py-6 px-2">
          <h1 className="text-4xl font-bold leading-10 text-white font-sans">
            Everyday rinse and reload
          </h1>
        </div>
        <div className="py-4 px-2 mb-2">
          <h1 className="text-sm font-normal tracking-wide leading-6 font-serif text-offWhite ">
            Achieve your dream skin goal with this complete package of skincare
            produts that will rejuvenate your day.
          </h1>
          <div className="py-4">
            <img src="/assets/Group-333.png" />
          </div>
        </div>
        <div className="py-2 px-2 flex flex-row">
          <h1 className="text-4xl font-bold leading-10 text-white font-sans">
            ₹899
          </h1>
          <label className="text-4xl font-medium leading-10 line-through text-gray	ml-10">
            ₹1299
          </label>
        </div>

        <div className="p-2 mt-6 bg-darkGray rounded-lg flex flex-col justify-start items-start w-80">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col w-11/12 p-2">
              <p className="text-tiny rounded-full flex flex-row justify-between items-center text-white bg-sky my-1 w-24 px-1">
                <img src="/assets/star.png" className="w-1.5 h-1.5 mx-1" />
                MOST POPULAR
                <img src="/assets/star.png" className="w-1.5 h-1.5 mx-1" />
              </p>
              <h1 className="my-1 text-white font-sans font-bold text-base">
                1 Months Pack (4 tubes)
              </h1>
              <h1 className="my-1 text-lightGray font-normal font-serif">
                Savings: ₹200
              </h1>
              <div className="my-1 flex flex-row">
                <label className="text-green  font-bold">38% Saved</label>
                <label className="text-orange  ml-2 font-bold">
                  Best Results
                </label>
              </div>
            </div>
            <div className="flex flex-col ml-10 mt-4 items-start justify-center">
              <h1 className="text-xl font-bold leading-10 text-white font-serif">
                ₹595
              </h1>
              <h1 className="text-xl font-medium leading-10 -mt-3 line-through text-gray  font-serif">
                ₹735
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="p-2 mt-6 bg-blueGray rounded-lg flex flex-col justify-start items-start border-2 border-white w-80">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col w-full p-2">
                <h1 className="mb-1 text-white font-sans font-bold text-base">
                  3 Months Pack (12 tubes)
                </h1>
                <h1 className="my-1 text-darkGray font-normal font-serif">
                  Savings: ₹100
                </h1>
                <div className="my-1 flex flex-row">
                  <label className="text-green  font-bold">12% Saved</label>
                </div>
              </div>
              <div className="flex flex-col w-1/12 mt-4 items-start justify-center">
                <h1 className="text-xl font-bold leading-10 text-white font-serif">
                  ₹899
                </h1>
                <h1 className="text-xl font-medium leading-10 -mt-3 line-through text-darkGray  font-serif">
                  ₹999
                </h1>
              </div>
            </div>
          </div>
          <div className="-mr-2 mt-6">
            <img src="/assets/tick.png" className="w-4.5 h-3  " />
          </div>
        </div>
        <div className="py-6 mt-2">
          <div className="bg-darkBlueGray flex flex-row justify-center items-center py-1">
            <img src="/assets/cart.png" className="w-4 h-3.5 mx-1  " />

            <h1 className="text-sm font-bold leading-10 text-white font-sans mx-1 ">
              ADD TO CART
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
