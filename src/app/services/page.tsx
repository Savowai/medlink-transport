import { redirect } from "next/navigation";

// Services are reached through the nav dropdown; there is no combined page.
export default function ServicesIndex() {
  redirect("/");
}
