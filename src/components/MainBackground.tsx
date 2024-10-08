// "use client";
// import React from "react";
// import { BackgroundBeams } from "./ui/background-beams";
// import { Button } from "./ui/button";
// import Link from "next/link";

// export function MainBackground() {
//   return (
//     <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//       <div className="max-w-2xl mx-auto p-4">
//         <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//          Make Your Custom Discord Bot
//          <Link href="/MainPage">
//         <Button variant="ghost">Ghost</Button>
//         </Link>
//         </h1>
        
//         <p></p>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
         
//         </p>
        
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// }

"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import Link from "next/link";

export function MainBackground() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Make Your Custom Discord Bot
          <div className="flex justify-center">
        <Link href="/MainPage">
          <Button variant="outline" className="text-white mt-4">Get Started</Button>
        </Link>
        </div>
        </h1>
        

        
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

