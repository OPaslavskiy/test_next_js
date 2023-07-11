import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | Next App",
};

export default function Contacts() {
  return (
    <div className="container">
      <h3>Contacts</h3>
      <ul>
        <li>
          <a href="https://github.com/OPaslavskiy">GitHub - OlehPaslavskyi</a>
        </li>
        <li>
          <a href="https://t.me/Oleh_P85">Telegram - OlehPaslavskyi</a>
        </li>
      </ul>
    </div>
  );
}
