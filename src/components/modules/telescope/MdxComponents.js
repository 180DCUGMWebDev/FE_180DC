import Image from "next/image";

function P({ children }) {
  return <p className="mb-6 mt-4 text-justify">{children}</p>;
}

function Img({ src, alt = "" }) {
  return (
    <div className="flex justify-center h-[20vw] ">
      <div className="h-full aspect-w-[1920] relative w-[70%]">
        <Image alt={alt} src={src} fill className="object-contain" />
      </div>
    </div>
  );
}

function A({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="underline transition-all">
      {children}
    </a>
  );
}

function Ul({ children }) {
  return <ul className="mb-6 ml-8 list-outside list-disc text-justify">{children}</ul>;
}

function Ol({ children }) {
  return <ol className="mb-6 ml-8 list-outside list-decimal text-justify">{children}</ol>;
}

function Li({ children }) {
  return <li className="mb-1 mt-1">{children}</li>;
}

function Blockquote({ children }) {
  return (
    <blockquote className="mb-4 mt-6 border-l-4 border-secondary px-6 py-[0.1px] pt-2 font-latoLightItalic">
      {children}
    </blockquote>
  );
}

export const MdxComponents = {
  p: P,
  img: Img,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
};

export default MdxComponents;
