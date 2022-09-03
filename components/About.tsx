interface AboutProps {
  title: string;
  description: string;
}
function About({ data }: { data: AboutProps }) {
  return (
    <div className="w-full">
      <h2 className="text-white text-[30px] pb-6">{data?.title}</h2>
      <div className="text-primary">{data?.description}</div>
    </div>
  );
}

export default About;
