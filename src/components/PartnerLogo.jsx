import React from "react";

function PartnerLogo() {
  return (
    <div>
      <section
        className="relative py-12 overflow-hidden bg-gray-50 sm:py-16 lg:py-20 xl:py-32"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 xl:grid-cols-2">
            <div className="px-8 text-center xl:text-left xl:pr-16 md:max-w-2xl md:mx-auto xl:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Customers and brands love using V-Together
              </h2>
              <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                Good to gooo......
              </p>
            </div>

            <div className="relative mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mt-0">
              <div className="absolute inset-16">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-30 rounded-3xl blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a 0%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              <div className="relative space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {[
                    "logo-vertex.svg",
                    "logo-martino.svg",
                    "logo-squarestone.svg",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full"
                    >
                      <img
                        className="w-auto h-8"
                        src={`https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/${logo}`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-6">
                  {[
                    "logo-waverio.svg",
                    "logo-fireli.svg",
                    "logo-virogan.svg",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full"
                    >
                      <img
                        className="w-auto h-8"
                        src={`https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/${logo}`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:translate-x-12">
                  {[
                    "logo-aromix.svg",
                    "logo-natroma.svg",
                    "logo-waverio-2.svg",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-6 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-44 md:w-full"
                    >
                      <img
                        className="w-auto h-8"
                        src={`https://cdn.rareblocks.xyz/collection/clarity/images/brands/3/${logo}`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50"></div>
      </section>
    </div>
  );
}

export default PartnerLogo;
