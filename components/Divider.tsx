function Divider({ data }: { data: { className: string } }) {
  const { className = "my-8" } = data;
  return <div className={className}></div>;
}

export default Divider;
