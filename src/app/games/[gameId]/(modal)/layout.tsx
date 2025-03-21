import { PATHS } from "@/PATHS";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  redirect(PATHS.games.list);

  return children;
}
