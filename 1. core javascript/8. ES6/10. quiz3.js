const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로", // trader[4].trader.name
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];
// filter, map의 파라미터는 2개를 줄 수 있다. 첫 인자는
// 배열을 순회하는 주체, 두번째 인자는 배열의 index가 된다.

// 연습 1: 2022년에 발생한 모든 거래를 찾아 // filter
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요 // map

const nameAndCity = traders
    .filter(traders => traders.year === 2022)
    .map(traders => traders.trader)
    console.log(1, nameAndCity);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. // map

const allCityNameFake = traders
    .map(traders => traders.trader.city);
    allCityName = [...new Set(allCityNameFake)];
    console.log(2, allCityName);

// 연습 3: 대전에 근무하는 // filter
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요. // map

const DaeJeonPeoplesDemo = traders
    .filter(traders => traders.trader.city === '대전')
    .map(traders => traders.trader)
    const DaeJeonPeoples = [...new Set(DaeJeonPeoplesDemo)]
    console.log(3, DaeJeonPeoples);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요. // map

const allName = traders
    .map(traders => traders.trader.name)
    const uniqueNames = [...new Set(allName)];
    console.log(uniqueNames); // [ '김철수', '박영희', '김철수', '박영희', '뽀로로', '루피' ]

// const mappedNames = new Set(traders.map(trs => trs.trader.name))
// 초반에 new Set으로 묶을 수 있다.

// 연습 5: 서울에 사는 거래자(filter)의 모든 거래액(map)의 총합 출력(foreach). 

// let total = 0;
// const tradeInSeoul = traders
//     .filter(traders => traders.trader.city === '서울')
//     .map(traders => traders.value)
//     .forEach(traders => total += traders)
//     console.log(total);

const total = traders
  .filter(trs => trs.trader.city === `서울`)
  .reduce((total, trs) => total + trs.value, 0);

console.log(total);

  
//1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

let totalInDaeJeon = 0;
const tradeInDaejeon = traders
    .filter(traders => traders.trader.city === '대전' && traders.year === 2023)
    .map(traders => traders.value)
    .forEach(traders => totalInDaeJeon += traders)
    console.log(totalInDaeJeon);


//2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.** // filter

const tradersInBusan = traders
    .filter(traders => traders.trader.city === `부산`)
    .map(traders => traders.trader.name)
    console.log(tradersInBusan);


//3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**


const highestTrade = traders
    .reduce((max, n) => max < n ? n : max).trader

console.log(highestTrade);


//4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, 
//`{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

// const totalByCity = traders.reduce((acc, cur) => {
//   if (acc[cur.city]) {
//       acc[cur.city] += cur.value;
//   } else {
//       acc[cur.city] = cur.value;
//   }
//   return acc;
// });

// console.log(totalByCity);


//5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. filter, map
//결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

const higherSeven = traders
    .filter(traders => traders.value >= 700000)
      .map(traders => traders.year + `:  ` + `[` +traders.value + `]`)
      
    console.log(higherSeven);

//6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.  매핑으로 거래액 뽑아서 환산,
//결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.** 객체를 foreach로 출력

const getAvg = traders
    .reduce((averageList, trs) => {
      const name = trs.trader.name;
      if (!averageList[name]) { // 이 사람이름이 처음 등장했으면
        averageList[name] = {total: trs.value, count: 1} // 객체에 추가해준다
      } else { // 이 사람이름이 있으면
        averageList[name].total += trs.value; // 거래액 누적
        averageList[name].count++; // 횟수 올려주고
      }
      return averageList;
    }, {})

    // 평균 구하기
    for (const key in getAvg) {
      getAvg[key].average 
        = getAvg[key].total / getAvg[key].count;
    }

console.log(getAvg);


//7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

const result = traders.reduce((acc, trs) => {
  const key = `${trs.year}_${trs.trader.name}`;

  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }
  // 연도별 최대 거래 횟수 찾기
  const result = traders.reduce((acc, trs) => {
    // 연도별 거래자 거래 횟수 집계
    const key = `${trs.year}_${trs.trader.name}`;
  
    if (!acc[key]) {
      acc[key] = 1;
    } else {
      acc[key]++;
    }
    // 연도별 최대 거래 횟수 찾기
    const yearMaxKey = `max_${trs.year}`;
    if (!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count) {
      acc[yearMaxKey] = { name: trs.trader.name, count: acc[key] }
    }
    return acc;
  }, {});
  
  console.log(result);
  // 결과 출력
  console.log(`2022년 가장 많은 거래를 한 거래자: ${result.max_2022.name}, 거래 횟수: ${result.max_2022.count}`);
  console.log(`2023년 가장 많은 거래를 한 거래자: ${result.max_2023.name}, 거래 횟수: ${result.max_2023.count}`);


  return acc;
}, {})
console.log(result);

//8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

//9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

//10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 
//각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

