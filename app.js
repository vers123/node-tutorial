const myUrl = new URL("http://example.com/path?foo=bar&hello=world");

console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("foo"));

myUrl.searchParams.append("newKey", "newValue");
console.log(myUrl.href);

