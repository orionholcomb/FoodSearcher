/*Function uses regular expression, which is a sequence of characters that define a search pattern. This pattern is used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation.
g = global; which is a flag that indicates the regular expression should be tested against all possible matches in a string & i = non-case sensitive
[] contains the regular expression logic that groups 'a' through 'z' and excludes all other characters using ^ = everything except*/
function lettersOnly(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
lettersOnly();


/*Function uses regular expression, which is a sequence of characters that define a search pattern. This pattern is used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation.
g = global; which is a flag that indicates the regular expression should be tested against all possible matches in a string 
[] contains the regular expression logic that groups 'a' through 'z' and excludes all other characters using ^ = everything except*/
function numbersOnly(input) {
  var regex = /[^0-9]/g;
  input.value = input.value.replace(regex, "");
}
numbersOnly();