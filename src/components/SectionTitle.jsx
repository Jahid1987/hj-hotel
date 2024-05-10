const SectionTitle = ({ h3, h1, text }) => {
  return (
    <div className="space-y-2 md:space-y-3 ">
      <h3 className="text-sm text-gray-400 uppercase">{h3}</h3>
      <h1 className="text-3xl md:text-5xl font-medium font-roboto">{h1}</h1>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
};

export default SectionTitle;
