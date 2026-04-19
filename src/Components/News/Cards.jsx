"use client";

function NewsCard({ item }) {
  return (
    <div className="bg-white mx-auto md:mx py-[2rem] w-[90%] md:w-[250px] text-center  hover:-translate-y-1 transition-transform">
      <img src={item?.img} alt="news splash" />
      <h5 className="my-[1rem] font-bold text-green">{item?.title}</h5>
    </div>
  );
}

export default NewsCard;
