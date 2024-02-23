import Image from "next/image";

const Detailaboutpic = () => {
  return (
    <section className="w-full py-6 bg-bgBlue ">
      <Image
        src={"/about/image-team-members.jpg"}
        height={500}
        width={1440}
        alt=""
        className="mx-auto"
      />
    </section>
  );
};

export default Detailaboutpic;
