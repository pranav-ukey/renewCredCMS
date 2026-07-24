import Link from "next/link";

export default function StandardCard({ title, description }) {
  return (
    <section className="border-b border-gray-200 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-medium text-gray-800">{title}</h2>

        <Link
          href={`/standards/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-gray-600 underline underline-offset-4 hover:text-red-500"
        >
          Read more
        </Link>
      </div>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </section>
  );
}