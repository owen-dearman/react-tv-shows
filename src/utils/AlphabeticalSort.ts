export default function sort(fname: string, sname: string): number {
  if (fname.toLowerCase() < sname.toLowerCase()) {
    return -1;
  }
  if (fname.toLowerCase() > sname.toLowerCase()) {
    return 1;
  }
  return 0;
}
