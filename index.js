function theBeatlesPlay(musicians, instruments) {
  var result = [];
  var str = ''
  for (var i = 0; i < musicians.length; i++) {
    str = `${musicians[i]} plays ${instruments[i]}` 
    result.push(str);
  }
  return result;
}