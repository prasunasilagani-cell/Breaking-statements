///Break programs
console.log("=========BREAK PROGRAMS EXAMPLES==================");
console.log();
//1.First even digit from left
let num=753914286
let div=1
while(num/div>=10){
    div=div*10
}
while(div>=1){
    let digit=parseInt(num/div)
    if(digit%2==0){
        console.log("The first even digit from left is "+digit);
        break
    }
    num=num%div
    div=div/10
}
console.log();

//First prime number between 50 to 100
for(i=50;i<=100;i++){
    count=0
    for(j=1;j<=i;j++){
     if(i%j==0){
        count+=1
     }
    }
    if(count==2){
        console.log("The first prime number between 50 and 100 is "+i);
        break
    } 
}
console.log();


//3.First number whose digit sum is 10
for(i=10;i<=50;i++){
    n=i
    sum=0
    for(j=1;j<=i;j++){
        digit=n%10
        sum+=digit
        
        n=parseInt(n/10)
    }
    if(sum==10){
            console.log("The first number whose digit sum is 10 is "+i);
            break
        }
}
console.log();


//4.First number with exactly 3 divisors between 1 and 100
for(i=1;i<=100;i++){
    n=i
    count=0
    for(j=1;j<=i;j++){
        if(i%j==0){
            count+=1
        }
    }
    if(count==3){
        console.log("The first number exactly have 3 divisors from 1 to 100 is "+i);
        break
    }
}
console.log();


//5.First 3 consecutive odd numbers occur from 1 to 50
count=0
 console.log("The first 3 conecutive odd numbers are ");
for(i=1;i<=50;i++){
if(i%2!=0){
    count+=1
    process.stdout.write(i+" ")
}
if(count==3){
    break
}
}
console.log();
console.log();


//6.First palindrome between 10 and 500
for(i=10;i<=500;i++){
  n1=i
  temp=n1
  rev=0
  while(n1>0){
    digit=n1%10
    rev=rev*10+digit
    n1=parseInt(n1/10)
  }
  if(rev==temp){
    console.log("The first palindrome from 10 to 500 is "+i);  
    break 
  }
} 
console.log();

 
//7.First perfect number from 1 to 1000
for(j=1;j<=1000;j++){
    n=j
sum=0
for(i=1;i<n;i++){
    if(n%i==0){
      sum+=i
    }   
}
 if(sum==n){
        console.log("The first perfect number is "+j);
        break
    }
} 
console.log();
 

//8.First 5 even numbers
count=0
console.log("The first 5 even numbers are");
for(i=100;i<=200;i++){
    if(i%2==0){
        count+=1
       process.stdout.write(i+" ")
    }
    if(count==5){
        break
    }
}
console.log();
console.log();

//9.First 5 prime numbers
countn=0
console.log("The first 5 prime numbers are ");
for(j=1;j<=30;j++){
count=0
for(i=1;i<=j;i++){
    if(j%i==0){
        count+=1
    }
}
 if(count==2){
    countn+=1
   process.stdout.write(j+" ") 
}
if(countn==5){
    break
}
}
console.log();
console.log();


//10.First 3 numbers divisible by 7
count=0
console.log("The first 3 numbers which are divisible by 7 are");
for(i=10;i<=40;i++){
    if(i%7==0){
        count+=1
        process.stdout.write(i+" ")
    }
    if(count==3){
        break
    }
}
console.log();
console.log();


///Continue Example programs
console.log("===================CONTINUE PROGRAMS EXAMPLES======================");
console.log();
//1.Print 1-30,skipping even numbers
console.log("Numbers from 1 to 30 by skipping even numbers are ");
for(i=1;i<=30;i++){
    if(i%2==0){
        continue
    }
   process.stdout.write(i+" ") 
}
console.log();
console.log();

//2.Print 1-40 skipping multiples of 4
console.log("The numbers from 1-40 by skipping multiples of 4 are ");
for(i=1;i<=40;i++){
    if(i%4==0){
        continue
    }
    process.stdout.write(i+" ")
}
console.log();
console.log();

//3.print 1-30,skipping no.s from 10-20
console.log("The numbers from 1-30 by skipping 10-20");
for(j=1;j<=30;j++){
    if(j>=10&&j<=20){
        continue
    }
    process.stdout.write(j+" ")
}
console.log();
console.log();

//4.print 1-50 skipping multiples of 3
console.log("The numbers from 1-40 by skipping multiples of 3 are ");
for(i=1;i<=50;i++){
    if(i%3==0){
        continue
    }
    process.stdout.write(i+" ")
}
console.log();
console.log();

//5.Extract 502304,skipping 0
n=502304
console.log("The number without 0's ");
while(n>0){
    digit=n%10
    if(digit==0){
        n=parseInt(n/10)
        continue
    }
     process.stdout.write(digit+"")
    n=parseInt(n/10)
}
console.log();
console.log();

//6.Extract 5832461,printing even digits
n=5832461
console.log("The number with even digits");
while(n>0){
    digit=n%10
    if(digit%2!=0){
        n=parseInt(n/10)
        continue
    }
     process.stdout.write(digit+"")
    n=parseInt(n/10)
}
console.log();
console.log();

//7.Extract 1432578,skipping odd digits
n=1432578
console.log("The number by skipping odd digits");
while(n>0){
    digit=n%10
    if(digit%2!=0){
        n=parseInt(n/10)
        continue
    }
     process.stdout.write(digit+"")
    n=parseInt(n/10)
}
console.log();
console.log();

//8.print 1-200,skipping multiples of 3 or 5
console.log("The numbers from 1-200 by skipping multiples of 3 and 5");
for(u=1;u<=200;u++){
    if(u%3==0||u%5==0){
        continue
    }
    process.stdout.write(u+" ")
}
console.log();
console.log();

//9.print 1-500,skipping numbers with odd digit sum
console.log("The numbers from 1-500 whose digit sum is even are");
for(i=1;i<=500;i++){
    n=i
    sum=0
    while(n>0){
        digit=n%10
        sum+=digit
        n=parseInt(n/10)
    }
     if(sum%2!=0){
            continue
        }
        process.stdout.write(i+" ")
}
console.log();
console.log();

//10.print 1-500,skipping numbers containing digit 0
console.log("The numbers from 1-500 by skipping the numbers which contains 0");
for(i=1;i<=500;i++){
    n=i
    found=false
    while(n>0){
        digit=n%10
        if(digit==0){
            found=true
        }
        n=parseInt(n/10)
    }
    if(found==true){
        continue
    }
        process.stdout.write(i+" ")
}
console.log();
console.log();

///Break and continue examples
console.log("==================BREAK AND CONTINUE EXAMPLES=========================");
console.log();
//1.print 1-50,skip multiples of 3,stop at 40
console.log("The numbers from 1-50 without multiples of 3 and stopping at 40");
for(i=1;i<=50;i++){
    if(i%3==0){
        continue
    }
    if(i==40){
        break
    }
    process.stdout.write(i+" ")
}
console.log();
console.log();

//2.print odd numbers,skip evens,stop at the first multiple of 7
console.log("The numbers from 1-100 by skippping evens and stopping at first multiple of 7");
for(i=1;i<=100;i++){
    if(i%2==0){
        continue
    }
    if(i%7==0){
        break
    }
    process.stdout.write(i+" ")
}
console.log();
console.log();

//3.Extract 5830421,skip odd digits,stop at 0
console.log("Extracting digits from numbers by skipping odd digits and stopping when it hits 0");
n=5830421
while(n>0){
    digit=n%10
    if(digit%2!=0){
        n=parseInt(n/10)
     continue
}
if(digit==0){
    break
}
    n=parseInt(n/10)
    process.stdout.write(digit+" ")
}
console.log();
console.log();

//4.Extract 8325147 print digits until 5
console.log("Extracting number until it hits 5");
n=8325147
while(n>0){
    digit=n%10
if(digit==5){
    break
}
    n=parseInt(n/10)
    process.stdout.write(digit+" ")
}
console.log();
console.log();

//5.Search from 51,skip non-multiples of 9,stop at the first multiple of 9
for(i=51;i<=100;i++){
    if(i%9!=0){
        continue
    }
    process.stdout.write(i+" ")
    break
}