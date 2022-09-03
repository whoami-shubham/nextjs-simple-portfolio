interface MainCtaProps {
  name: string;
  bio: string;
}

function MainCta({ data }: { data: MainCtaProps }) {
  const { name, bio } = data;
  return (
    <div className="flex flex-col">
      <div className="text-white lg:text-[60px] md:text-[40px] sm:text-[30px]">
        {name}
      </div>
      <div className="text-primary text-bold">{bio}</div>
    </div>
  );
}

export default MainCta;
