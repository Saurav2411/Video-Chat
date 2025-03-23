import React from "react";

const PartnerLogo = () => {
  const companyLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  ];

  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
    
      <div className="absolute inset-16">
        <div
          className="w-full h-full mx-auto rotate-180 opacity-20 rounded-3xl blur-2xl filter"
          style={{
            background:
              "linear-gradient(90deg, #44ff9a 0%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
          }}
        ></div>
      </div>

    
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Companies Using V-Together
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted by innovative startups and SaaS businesses.
        </p>

        <div className="relative mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition w-44 md:w-full"
              >
                <img
                  className="w-auto h-12 object-contain"
                  src={company.logo}
                  alt={company.name}
                  title={company.name}
                />
                <span className="mt-2 text-sm font-semibold text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-transparent via-transparent to-gray-50"></div>
    </section>
  );
};

export default PartnerLogo;
