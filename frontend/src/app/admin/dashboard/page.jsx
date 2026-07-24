"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [standards, setStandards] = useState([]);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    version: "v1.0",
    status: "draft",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    fetchStandards();
  }, [router]);

  const fetchStandards = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/standards`
      );

      const data = await response.json();

      setStandards(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      sections: [],
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/standards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      setFormData({
        title: "",
        slug: "",
        shortDescription: "",
        version: "v1.0",
        status: "draft",
      });

      fetchStandards();
    } else {
      alert("Failed to create standard");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this standard?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/standards/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      fetchStandards();
    } else {
      alert("Failed to delete standard");
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-end">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/admin/login");
          }}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>
        <h1 className="mb-8 text-4xl font-bold">
          Admin Dashboard
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-xl bg-white p-6 shadow"
        >
          <h2 className="mb-4 text-2xl font-semibold">
            Create Standard
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="rounded border p-3"
              required
            />

            <input
              type="text"
              name="slug"
              placeholder="Slug"
              value={formData.slug}
              onChange={handleChange}
              className="rounded border p-3"
              required
            />

            <input
              type="text"
              name="shortDescription"
              placeholder="Short Description"
              value={formData.shortDescription}
              onChange={handleChange}
              className="rounded border p-3 md:col-span-2"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded bg-black px-6 py-3 text-white"
          >
            Create Standard
          </button>
        </form>

        <div className="rounded-xl bg-white p-6 shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Title</th>
                <th>Version</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {standards.map((standard) => (
                <tr key={standard._id} className="border-b">
                  <td className="py-4">{standard.title}</td>
                  <td>{standard.version}</td>
                  <td>{standard.status}</td>

                  <td className="space-x-2">
                    <button type="button" className="rounded bg-blue-600 px-3 py-1 text-white">
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(standard._id)}
                      className="rounded bg-red-600 px-3 py-1 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}