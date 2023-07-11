import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Next App",
};

export default function Team() {
  return (
    <div className="container">
      <h3>Team </h3>
      <p> Oleh Paslavskyi</p>
    </div>
  );
}
