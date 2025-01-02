function foo(a) {
  if (a == null) {
    return 0; // This will cause a bug if a is NaN
  } else {
    return a + 1; 
  }
}