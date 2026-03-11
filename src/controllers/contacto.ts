import { NextResponse } from "next/server";
import { transporter } from "../lib/mailer";

type Consulta = {
  name: string;
  email: string;
  phone: string;
  body: string;
};

export async function sendConsulta(consulta: Consulta) {
  try {
    await transporter.sendMail({
      from: consulta.email,
      to: process.env.EMAIL_USER,
      subject: `Consulta de #${consulta.name}`,
      html: `
      <h1>El cliente ${consulta.name} tiene la siguiente consulta:</h1>
      <p>${consulta.body}</p>
      <div>
       <h3>Datos del cliente:</h3>
       <p><i>Teléfono: </i>${consulta.phone}</p>
       <p><i>Mail: </i>${consulta.email}</p>
      </div>
    `,
    });

    return NextResponse.json(
      { message: "mail enviado correctamente", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 },
    );
  }
}
