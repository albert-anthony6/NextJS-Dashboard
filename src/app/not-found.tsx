import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Not Found</h1>
      <p>Sorry, we could not find the page you are looking for</p>
      <Link href="/">Go back</Link>
    </div>
  );
}
