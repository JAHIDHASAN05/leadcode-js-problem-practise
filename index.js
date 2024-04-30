console.log("jahid is the best");
// 16. 3Sum Closest
// Medium
// Topics
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

const nums =[883,-56,-754,-562,615,338,-811,-865,895,618,-41,-709,490,914,-653,-863,102,213,702,-131,176,-354,71,175,185,350,594,-749,5,450,-738,-954,-798,-80,-495,69,-582,-118,-134,-519,-512,420,661,-491,-753,-568,-666,-547,293,-340,698,431,-501,313,694,-228,-455,558,-272,-483,-643,708,-719,806,845,41,545,-70,-545,414,404,446,-422,-467,242,-482,-130,33,-85,-722,604,187,288,-983,-551,-400,-995,840,985,624,-540,336,-771,-888,194,-351,21,-99,132,-665,-533,-845,323,811,435,442,84,511,-901,-288,-54,-163,-878,649,699,-179,692,90,134,-113,497,833,-762,-802,-172,349,888,-706,745,334,-650,-168,-831,114,329,543,-109,347,-552,-966,453,-919,-531,-203,886,580,240,-571,-244,-723,785,-19,-22,-337,-82,376,719,-641,277,-707,-877,-518,908,691,-413,364,635,952,-894,271,542,-790,372,-91,-83,-893,-206,262,709,689,-608,574,85,186,732,332,456,-539,-708,343,-87,-21,-757,-480,-387,40,553,-490,-104,559,-31,-89,-507,38,-411,-933,-363,981,-784,-712,741,-592,-299,-155,-761,-687,-563,-14,579,82,445,-655,260,-557,718,105,48,-201,28,-162,-36,-116,-283,-52,616,257,501,949,360,-632,-526,280,-964,-786,-661,-38,-664,-823,241,-217,-596,14,459,-527,606,-437,994,-492,955,-441,506,-294,556,73,-237,782,-554,39,461,-498,-945,-260,634,-793,-469,931,-151,16,957,918,841,-403,753,-332,-225,-382,-597,315,-123,-165,669,278,-843,-686,-138,765,815,6,170,441,251,-373,265,-633,681,-370,-255,368,-566,422,150,870];
// console.log(nums);
const target = -5698;
// console.log(target,"target" );
let countingVariation = 0;
let threeIntergerArray = [];
for (let i = 0; i < nums.length; i++) {
  const FisrtInteger = nums[i];
  for (let j = i + 1; j < nums.length; j++) {
    const secondInteger = nums[j];

    for (let k = j + 1; k < nums.length; k++) {
      const thirdInteger = nums[k];
      threeIntergerArray.push(FisrtInteger + secondInteger + thirdInteger);
    }
  }
}
// console.log(threeIntergerArray, "summing aray");

const LowestSubtractionFromTargetValueArray = [];

for (let i = 0; i < threeIntergerArray.length; i++) {
  let subtraction ;

  if(threeIntergerArray[i]>target){
    subtraction = threeIntergerArray[i] - target
  }
  else if(threeIntergerArray[i]<target){
    subtraction = target -threeIntergerArray[i]
  }
  else if (threeIntergerArray[i]===target){
    subtraction = threeIntergerArray[i] - target
  }


  // if (subtraction < 0) {
  //   subtraction = subtraction * -1;
  // }
  LowestSubtractionFromTargetValueArray.push(subtraction);
  
}

// console.log(LowestSubtractionFromTargetValueArray, 'lowest array');



let closestToTarget=LowestSubtractionFromTargetValueArray[0];


for(let i =0 ; i<LowestSubtractionFromTargetValueArray.length ; i++){

    if(closestToTarget>LowestSubtractionFromTargetValueArray[i]){
      closestToTarget= LowestSubtractionFromTargetValueArray[i]
      console.log(LowestSubtractionFromTargetValueArray[i],closestToTarget);
    }
}

// console.log(closestToTarget,"index");
console.log(threeIntergerArray[LowestSubtractionFromTargetValueArray.indexOf(closestToTarget)] , "main resutl");

//  if(closestToTarget===0){
//   console.log(target , "main resutl");

//  }
// else if(closestToTarget>target){
//   console.log(closestToTarget-target , "main resutl");
// }
// else if(target>closestToTarget){
//   console.log(target-closestToTarget , "main resutl");

// }











