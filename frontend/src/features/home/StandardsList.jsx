import StandardCard from "./StandardCard";

const standards = [
  {
    title: "EV",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa nec vulputate amet enim turpis elit odio fusce. Nunc cursus aliquet arcu vitae dolor ac rutrum pulvinar orci.",
  },
  {
    title: "Biochar",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa nec vulputate amet enim turpis elit odio fusce. Nunc cursus aliquet arcu vitae dolor ac rutrum pulvinar orci.",
  },
  {
    title: "Methane",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa nec vulputate amet enim turpis elit odio fusce. Nunc cursus aliquet arcu vitae dolor ac rutrum pulvinar orci.",
  },
  {
    title: "Renewable Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa nec vulputate amet enim turpis elit odio fusce. Nunc cursus aliquet arcu vitae dolor ac rutrum pulvinar orci.",
  },
];

export default function StandardsList({ standards }) {
  return (
    <>
      {standards.map((standard) => (
        <StandardCard
          key={standard._id || standard.title}
          title={standard.title}
          description={standard.description || standard.shortDescription}
        />
      ))}
    </>
  );
}