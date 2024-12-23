import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import logo from "@/assets/react.svg";

const linkList = [
  {
    name: "Github",
    url: "https://github.com/seeds-yasojima/front-dojo",
  },
  {
    name: "Notion",
    url: "https://www.notion.so/seeds-std/team-front-154726ecd8cd80d6a39aff1fbffd45c4?pvs=4",
  },
];

export const Header = () => {
  return (
    <header className="py-2 border-b">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex items-center">
          <h1 className="flex items-center gap-2 flex-1">
            <img src={logo} width={24} />
            <span className="font-semibold text-xl">Front Dojo</span>
          </h1>
          <ul className="flex items-center gap-0.5">
            {linkList.map((link) => (
              <li key={link.name}>
                <Button variant="ghost" asChild className="py-0 h-7 px-2">
                  <a href={link.url} target="_blank">
                    {link.name}
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
