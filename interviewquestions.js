
//reverse()
var  x = "abcdef";
x.split('');
x.split('').reverse('').join('');
//find an element is there or not
var x=[0,1,2]
console.log(x.indexOf('9'));
x.includes(9);
var x =[0,1,2,3,4]
x.splice(1,1);

//push the first item to the last
x =['a', 'b', 'c', 'd']
y = x.splice(0,1);
x+','+y;


x =['a', 'b', 'c', 'd']
x.push(x.shift())
console.log(x)

//
function counter(){
	var count = 0;
	return {
		next: function(){
		return count;
		}
	}
};
var c= counter();
c.next();

//print the number from 1 to 100 . but for multiples of 3, print 'fizz' instead of the num. for multiple of 5 , print "buzz" for num which are multiple of 3,5 print 'fizzbuzz'

for (i=0; i <=100; i++){
	
	if ((i%3) ==0){console.log("fizz");}
	else if((i%5 )==0){console.log("buzz");}
	else if ((i%15) ==0){console.log("fizzbuzz");}
}

for (i=0; i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)



for(var i = 1; i<101; i++){
    if(i%3 === 0 && i%5 ===0){
        console.log('FizzBuzz')
    }
    else if(i%3 ==0){
        console.log('Fizz');
    }else if(i%5 ==0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}for(i=0;i<100;) console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)



//--------------------------------------------------------------------------------
document.write("--{ Public Counter }--------------------------------------<br/>");

// Count can be accessed outside of the function
var PublicCounter = function() {
  return {
    count : 1,
    next : function () {
      return this.count++;
    }
  }
}

try { 
  var c1 = PublicCounter();
  document.write(c1.next() + "<br/>");
  c1.count = 10; // The variable is public we can change it externally
  document.write(c1.next() + "<br/>");
} catch (e) {
  document.write (e + "<br/>");
}


//--------------------------------------------------------------------------------
document.write("--{ Private Counter }--------------------------------------<br/>");

var PrivateCounter = function() {
  var count = 1;
  return {
    next : function() {
      return count++; // Notice that if the variable if it is defined in a higher lexical scope
    } 
  }
}

try { 
  var c2 = PrivateCounter();
  document.write(c2.next() + "<br/>");
  c2.count = 10; // The variable is private and will not change we can change it externally
  document.write(c2.next() + "<br/>");
} catch (e) {
  document.write(e + "<br/>");
}