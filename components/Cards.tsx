interface CardProps {
  title: string;
  url: string;
  description: string;
  titleTextClass?: "text-skyblue" | "text-npm" | "text-webapp" | "text-article";
}

function Card({
  title,
  url,
  description,
  titleTextClass = "text-skyblue",
}: CardProps) {
  return (
    <div className="bg-cardbg flex flex-col border-2 border-cardborder py-4 px-8 rounded-2xl my-4 lg:w-[360px] md:w-[360px] mr-4 shadow-md shadow-cardbg">
      <div className="flex justify-between relative">
        <span className={`text-[16px] ${titleTextClass} font-[600]`}>
          {title}
        </span>
        <a
          href={url}
          className="absolute right-[-20px] top-[-10px] text-[#444] hover:text-primary"
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <p className="text-[20px] text-white font-bold py-4">{description}</p>
    </div>
  );
}

function Cards({ data }: { data: { title: string; data: CardProps[] } }) {
  return (
    <>
      <h2 className="text-white text-[30px] pb-6">{data?.title}</h2>
      <div className="flex flex-wrap sm:flex-col">
        {data?.data?.map((item, idx) => (
          <Card {...item} key={idx} />
        ))}
      </div>
    </>
  );
}

export default Cards;
