/**
 * Created by gokuo on 2016-11-15.
 */
    function startClock() {
    // javaScipt 영역임
    // 현재시간을 구해서 HMLT DIV영역에 출력하는게 목적임.
    // HTML DIV영역을 JavaScipt 객체로 바꿔주어, 접근해주자
    var div = document.getElementById("clockDiv")
    div.innerHTML = "div의 부분의 내용을 바꿔줘요!"
    // HTML element를 javaScript 객체로 변환시킨것 => dcument object(문서객체로 얻어와야 제어가능)

    // 1초마다 반복적으로 현재시간을 구하여, div에 출력.
    window.setInterval(function () {
        // 현재시간을 구함
        var today = new Date().toLocaleString();
        div.innerHTML = today;
    }, "1000"); // setInterval("반복할 람다함수", "반복할 시간")
        // 시간 = 밀리세컨단위라, 1000 = 1초
}