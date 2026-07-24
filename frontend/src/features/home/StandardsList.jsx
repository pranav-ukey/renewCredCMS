import StandardCard from "./StandardCard";

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