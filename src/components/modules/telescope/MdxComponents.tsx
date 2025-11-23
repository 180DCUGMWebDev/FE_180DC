import Image from "next/image";

function P({ children }) {
  return <p className="mt-4 mb-6 text-justify">{children}</p>;
}

function Img({ src, alt = "" }) {
  return (
    <div className="flex h-[20vw] justify-center">
      <div className="aspect-w-[1920] relative h-full w-[70%]">
        <Image alt={alt} src={src} fill className="object-contain" unoptimized />
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
  return <li className="mt-1 mb-1">{children}</li>;
}

function Blockquote({ children }) {
  return (
    <blockquote className="font-lato-light-italic mt-6 mb-4 border-l-4 border-cyan-300 px-6 py-[0.1px] pt-2">
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
