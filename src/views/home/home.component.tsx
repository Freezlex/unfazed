import React from "react";
import "./home.component.css";
import quotes from "./quotes.json";

export default function HomeComponent() {
  return (
    <div className="_ghost">
      <div>
        <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
        <h1>Hi Folks !</h1>
        <p>
          I&apos;m Julien but you can call me Ju (No one does... so don&apos;t
          either), a full-stack developer. I&apos;ve just finished my
          master&apos;s in AI, mobile, data manipulation... basically a lot of
          nerdy stuff.
        </p>
        <p>
          I love building new things from scratch because creating is
          learning... From coding on arduino to a real obsession with IoT and
          programming, my coding obsession has become my full-time job and
          I&apos;m now living my dream. I don&apos;t just create apps, but
          anything that feeds my thirst for complexity, like a brand-new
          console.log(“Hello World!”).
        </p>
        <p className="center">
          Why stop learning when the next idea is just one dream away?
        </p>
      </div>
    </div>
  );
}
