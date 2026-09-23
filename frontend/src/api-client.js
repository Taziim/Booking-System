
const API_URL = import.meta.env.VITE_API_URL;
export const registerUser = async (formData) => {
  const response = await fetch(`${API_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      responseBody.message || "Registration failed"
    );
  }
  return responseBody;
};

export const apiClient = {
  register: registerUser,
};
