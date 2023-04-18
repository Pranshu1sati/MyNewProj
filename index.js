var s = "ababa"
var s2 = "babac"
var ans =""
for(i =0;i< s2.length; i++){
s.includes(s2.charAt(i)) ? ans =ans : ans += s2.charAt(i)
}
console.log(ans)