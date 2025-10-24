import svgPaths from "./svg-ccrddvpr3c";

export default function BonsaiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-name="bonsai-logo 1">
      {/* Light mode */}
      <svg className="block dark:hidden w-full h-full" fill="none" viewBox="0 0 1680 512">
        <g id="bonsai-logo 1">
          {/* Square background */}
          <path d="M512 0H0V512H512V0Z" fill="rgb(0, 0, 0)" id="Vector" />
          {/* "b" inside square */}
          <path d={svgPaths.p2ab100} fill="rgb(255, 255, 255)" id="Vector_2" />
          {/* "bonsai" text */}
          <path d={svgPaths.p3bfa5600} fill="rgb(0, 0, 0)" id="Vector_3" />
          <path d={svgPaths.p22cd0e10} fill="rgb(0, 0, 0)" id="Vector_4" />
          <path d={svgPaths.p36afe900} fill="rgb(0, 0, 0)" id="Vector_5" />
          <path d={svgPaths.p3fb17300} fill="rgb(0, 0, 0)" id="Vector_6" />
          <path d={svgPaths.p10e0e100} fill="rgb(0, 0, 0)" id="Vector_7" />
          <path d={svgPaths.p1c6b42f0} fill="rgb(0, 0, 0)" id="Vector_8" />
        </g>
      </svg>
      
      {/* Dark mode */}
      <svg className="hidden dark:block w-full h-full" fill="none" viewBox="0 0 1680 512">
        <g id="bonsai-logo 1">
          {/* Square background */}
          <path d="M512 0H0V512H512V0Z" fill="rgb(255, 255, 255)" id="Vector" />
          {/* "b" inside square */}
          <path d={svgPaths.p2ab100} fill="rgb(0, 0, 0)" id="Vector_2" />
          {/* "bonsai" text */}
          <path d={svgPaths.p3bfa5600} fill="rgb(255, 255, 255)" id="Vector_3" />
          <path d={svgPaths.p22cd0e10} fill="rgb(255, 255, 255)" id="Vector_4" />
          <path d={svgPaths.p36afe900} fill="rgb(255, 255, 255)" id="Vector_5" />
          <path d={svgPaths.p3fb17300} fill="rgb(255, 255, 255)" id="Vector_6" />
          <path d={svgPaths.p10e0e100} fill="rgb(255, 255, 255)" id="Vector_7" />
          <path d={svgPaths.p1c6b42f0} fill="rgb(255, 255, 255)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}