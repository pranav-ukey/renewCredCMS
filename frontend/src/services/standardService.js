const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllStandards = async () => {
  const response = await fetch(`${API_URL}/standards`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch standards");
  }

  return response.json();
};

export const getStandardBySlug = async (slug) => {
  const response = await fetch(`${API_URL}/standards/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch standard");
  }

  return response.json();
};