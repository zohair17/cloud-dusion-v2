import Link from "next/link";
import { routes } from "@/shared/config/routes";

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link href={routes.home()}>Back to home</Link>
    </main>
  );
}
