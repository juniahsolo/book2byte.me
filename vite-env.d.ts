/// <reference types="vite/client" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const content: string;
  export default content;
}

// React types
declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
    [key: string]: any;
  }
  
  interface FC<P = {}> {
    (props: P): JSX.Element | null;
  }
}

declare namespace JSX {
  interface Element {
    type: any;
    props: any;
    key: any;
  }
  
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}