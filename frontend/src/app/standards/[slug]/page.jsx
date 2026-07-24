import Header from "@/components/layout/Header";
import { getStandardBySlug } from "@/services/standardService";

export default async function StandardDetailsPage({ params }) {
  const { slug } = await params;

  const response = await getStandardBySlug(slug);
  const standard = response.data;

  if (!standard) {
    return <h1 className="mt-40 text-center">Standard not found</h1>;
  }

  return (
    <>
      <Header />

      <main className="mx-auto mt-32 flex max-w-7xl gap-12 px-6">

        <aside className="sticky top-32 h-fit w-72 rounded-xl border border-gray-200 p-5">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold">
              Contents
            </h3>

            <ul className="space-y-3 text-sm">
              {standard.sections.map((section) => (
                <li key={section.id}>{section.heading}</li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="flex-1">
          <h1 className="text-5xl font-light italic">
            {standard.title}
          </h1>

          <p className="mt-5 text-gray-600">
            {standard.shortDescription}
          </p>

          <div className="mt-12 space-y-14">
            {standard.sections.map((section) => (
              <section key={section.id}>
                <h2 className="mb-5 text-3xl font-semibold">
                  {section.heading}
                </h2>

                <p className="leading-8 text-gray-600">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}