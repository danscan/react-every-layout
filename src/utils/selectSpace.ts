export default function selectSpace(space: string): string {
  return space === '0'
    ? '0px'
    : space;
}