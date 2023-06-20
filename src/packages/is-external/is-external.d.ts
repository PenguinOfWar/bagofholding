/// <reference types="typescript" />

type Conditional = (to: string) => boolean;

export default function isExternal(
  to: string,
  customConditional?: Conditional
): boolean;
