import React from 'react'

const Logical = () => {
  // logic
  // Logical operators
  // 1. and
  const user = {
    isLoggedin: false, // 로그인 여부
    role: "admin" //guest, user 사용자 롤
  }

  // 관리자페이지 접근 관리
  if(user.isLoggedin && user.role ==="admin") {
    // true인 경우 실행코드
    console.log("✔ 관리자페이지에 접근 가능!")
  } else {
    console.log("❌ 관리자페이지에 접근 불가능!")
  }

  // 일반 사용자 페이지 접근 관리
  if(user.isLoggedin || user.role ==="admin") {
    // true인 경우 실행코드
    console.log("✔ 사용자페이지에 접근 가능!")
  } else {
    console.log("❌ 사용자페이지에 접근 불가능!")
  }

if (!user.isLoggedin){
  // 로그인 되지 않은 경우

}

// 구조분해 할당 - 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는 것
const colors = ["red", "blus"]
// const firstcolor = colors[0]
// const secondcolor = colors[1]

const [firstcolor, secondcolor] = colors

console.log("🚀 ~ Logical ~ firstcolor:", firstcolor)
console.log("🚀 ~ Logical ~ secondcolor:", secondcolor)

// 객체 구조분해할당
const person = {
  name: "세모네모",
  mbti: "ENTJ"
}

const {mbti, name: username} = person
console.log("🚀 ~ Logical ~ mbti:", mbti)
console.log("🚀 ~ Logical ~ name:", username)


// spread syntax - 배얄이나 객체를 개별요소로 분해하거니 결합할 때 사용
const copyColors = ["yellow", ...colors]
console.log("🚀 ~ Logical ~ copyColors:", copyColors)
console.log("🚀 ~ Logical ~ colors:", colors)

const copyPerson = {...person, isAttendent: true, mbti: "ISTJ"}
console.log("🚀 ~ Logical ~ copyPerson:", copyPerson)


  // view

  return (
    <div>Logical</div>
  )
}

export default Logical