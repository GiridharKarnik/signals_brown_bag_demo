declare module 'revealjs-react' {
  const RevealJS: any;
  const Slide: any;
  const H1: any;

  export { RevealJS, Slide, H1 };
}

declare module 'revealjs-react/plugins/highlight' {
  const RevealHighlight: any;

  export default RevealHighlight;
}
