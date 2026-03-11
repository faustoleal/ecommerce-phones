type Consulta = {
  name: string;
  email: string;
  phone: string;
  body: string;
};

export async function enviarConsulta(consulta: Consulta) {
  const res = await fetch("/api/contacto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(consulta),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
