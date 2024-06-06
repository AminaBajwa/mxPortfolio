import React from 'react';


// const logos = [
//     "/ArianSport.png",
//     "/SSF.png",
//     "/GoldPanelGroup..png",
//     "/SSC.png",
//     "/AlNoor.png",
//     "",
//   ];

const logos = [
  "https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png",
  "https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png",
  "https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png",
  "https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png",
];

const ClientList = () => {
  return (
    <section className="mt-[-100px] bg-[#03001417] backdrop-blur-md z-50 py-4 sm:py-6 lg:py-10">
      <div className="overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {logos.concat(logos).map((logo, index) => (
              <div key={index}>
                <img className="object-contain w-auto mx-auto h-14" src={logo} alt={`logo-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientList;
