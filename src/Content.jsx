import { languages } from "./data/languages";

export function Content() {
  return (
    <>
      <ul>
        {languages.map((language) => (
          <li key={language.id}>{language.title}</li>
        ))}
      </ul>
      <a href="http://localhost:5173/"> Home Page</a>
    </>
  );
}
