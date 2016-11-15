// /**
//  * Created by gokuo on 2016-11-15.
//  */
// alert("경고창이 뜹니다!!!"); // javascript가 이벤트를 발생 시킴
//
//     // 변수를 사용하려면?
//     var test1 = 100; // 데이터 타입이 지정되있지 않아서, 아무값이나 다 넣을수 있음
//     var test2 = true
//     var test3 = "소리없는 아우성"
//     var test4 = null;
//     var test5;
//
//     console.log(typeof test1);
// console.log(typeof test2);
// console.log(typeof test3);
// console.log(typeof test4);
// console.log(typeof test5);

    // // 선언적 함수
    //  function myFunc(temp1, temp2) {
    //      return temp1 + temp2;
    //  }
    //
    //  var result = myFunc(10, 20);
    // console.log(result);
    //
    // // 익명함수(람다함수) 함수의 이름이 없기때문에 혼자저장이 안되므로, 변수에 저장되는 형태로 사용한다.
    // var test = function(temp1, temp2) {
    //     return temp1 + temp2;
    // }
    //
    // console.log(test(10, 30))

    // 변수 : property[프라퍼티]
    // 함수 : method [메쏘드]
    var obj = {     // C++ 멤버변수, 멤버함수가 있듯
        myName : "홍길동",
        myAge : 30,
        "my Hobby" : "leuge of legend"
        myInfo : function () {

        }
    };

    console.log(obj.myName);
    console.log(obj["myAge"]);
    // [] 안에는 객체를 "로 잡아서 넣어주면, 객체를 인식함.
    obj.myInfo()