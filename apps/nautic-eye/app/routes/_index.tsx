import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nautic-eye/ui/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <Button variant="outline">Button</Button>;
}
