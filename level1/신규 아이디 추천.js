let new_id = "...!@BaT#*..y.abcdefghijklm";
let new_id2 = "z-+.^.";
let new_id3 = "abcdefghijklmn.p";
// function solution(new_id) {
//   new_id = new_id.toLowerCase();
//   new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
//   new_id = new_id.replace(/\.\.+/g, ".");
//   new_id = new_id.replace(/^\.|\.$/g, "");
//   if (new_id === "") new_id = "a";
//   if (new_id.length >= 16) new_id = new_id.slice(0, 15);
//   new_id = new_id.replace(/\.$/, "");
//   while (new_id.length < 3) {
//     new_id += new_id[new_id.length - 1];
//   }
//   console.log(new_id);
//   return new_id;
// }
console.log(solution(new_id));
// function solution(new_id) {
//   new_id = new_id
//     .toLowerCase()
//     .replace(/[^a-z0-9-_.]/g, "")
//     .replace(/\.\.+/g, ".")
//     .replace(/^\.|\.$/g, "");
//   if (new_id === "") new_id = "a";
//   if (new_id.length >= 16) new_id = new_id.slice(0, 15);
//   new_id = new_id.replace(/\.$/, "");
//   while (new_id.length < 3) {
//     new_id += new_id[new_id.length - 1];
//   }
//   return new_id;
// }

// new_id = "".replace(/^ $/, "a");
// console.log(new_id);

function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a");
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/, "");
  while (new_id.length < 3) {
    new_id += new_id[new_id.length - 1];
  }
  return new_id;
}
