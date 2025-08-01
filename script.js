function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num)+ "...";
  }else {
    return str;
  }

}

console.log(truncateString("Hello world!", 5));
console.log(truncateString("Short", 3));
