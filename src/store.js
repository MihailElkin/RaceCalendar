import { createStore } from "redux"


let initialStore
initialStore = 
    [
        {
            id: 1,
            name: 'Зимнее приключение',
            type: 'Прогулка',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 0, 3),
            endDate: new Date(2022, 0, 3),
            color:'goldenrod'
          },
  {
            id: 2,
            name: 'Новогодняя гонка СпортЭк',
            type: 'ХСО',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 0, 9),
            endDate: new Date(2022, 0, 9),
            color:'goldenrod'
          },
  {
            id: 3,
            name: 'Cyber Punk, Stage3, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 0, 22),
            endDate: new Date(2022, 0, 22),
            color:'orange'
          },
  {
            id: 4,
            name: 'Cyber Punk, Stage3, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 0, 23),
            endDate: new Date(2022, 0, 23),
            color:'orange'
          },
  {
            id: 5,
            name: 'Cyber Punk, Stage3 FINAL, Екатеринбург',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 0, 29),
            endDate: new Date(2022, 0, 29),
            color:'orange'
          },
  {
            id: 6,
            name: 'Cyber Punk, Stage3 FINAL, Екатеринбург',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 0, 30),
            endDate: new Date(2022, 0, 30),
            color:'orange'
          },
  {
            id: 7,
            name: 'Второй этап Вьюжный',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 1, 6),
            endDate: new Date(2022, 1, 6),
            color:'slateblue'
          },
  {
            id: 8,
            name: 'Cyber Punk, Stage4, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 1, 12),
            endDate: new Date(2022, 1, 12),
            color:'orange'
          },
  {
            id: 9,
            name: 'Cyber Punk, Stage4, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 1, 13),
            endDate: new Date(2022, 1, 13),
            color:'orange'
          },
  {
            id: 10,
            name: 'Cyber ВЕЛОПАРК МОСКВА',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 1, 18),
            endDate: new Date(2022, 1, 18),
            color:'orange'
          },
  {
            id: 11,
            name: 'Cyber ВЕЛОПАРК МОСКВА',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 1, 19),
            endDate: new Date(2022, 1, 19),
            color:'orange'
          },
  {
            id: 12,
            name: 'Зимний FAN-марафон',
            type: 'ХСМ',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 1, 23),
            endDate: new Date(2022, 1, 23),
            color:'black'
          },
  {
            id: 13,
            name: 'SnowCherry',
            type: 'ХСМ',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 2, 6),
            endDate: new Date(2022, 2, 6),
            color:'goldenrod'
          },
  {
            id: 14,
            name: 'Финал зимнего кубка трасса Снежная',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 2, 6),
            endDate: new Date(2022, 2, 6),
            color:'slateblue'
          },
  {
            id: 15,
            name: 'Cyber Punk, Финал, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 2, 12),
            endDate: new Date(2022, 2, 12),
            color:'orange'
          },
  {
            id: 16,
            name: 'Cyber Punk, Финал, Челябинск',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 2, 13),
            endDate: new Date(2022, 2, 13),
            color:'orange'
          },
  {
            id: 17,
            name: 'Cyber Punk, Финал, Екатеринбург',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 2, 19),
            endDate: new Date(2022, 2, 19),
            color:'orange'
          },
  {
            id: 18,
            name: 'Cyber Punk, Финал, ВЕЛОКУЛЬТ, Москва',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 3, 9),
            endDate: new Date(2022, 3, 9),
            color:'orange'
          },
  {
            id: 19,
            name: 'Cyber Punk, Финал, ВЕЛОКУЛЬТ, Москва',
            type: 'Cyber',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 3, 10),
            endDate: new Date(2022, 3, 10),
            color:'orange'
          },
  {
            id: 20,
            name: 'URBAN Bike Battle, Челябинск',
            type: 'Road',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 3, 23),
            endDate: new Date(2022, 3, 23),
            color:'orange'
          },
  {
            id: 21,
            name: 'I этап MTB MARAFON TYUMEN 2022',
            type: 'ХСО',
            org:'Велоформа и Триатлон | Марафоны MTB&RUN',
            go: 0,
             startDate: new Date(2022, 3, 24),
            endDate: new Date(2022, 3, 24),
            color:'gray'
          },
  {
            id: 22,
            name: 'Кубок Слюдорудника',
            type: '1-3 мая многодневка',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 4, 1),
            endDate: new Date(2022, 4, 1),
            color:'black'
          },
  {
            id: 23,
            name: 'Весеннее приключение',
            type: 'Прогулка',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 4, 8),
            endDate: new Date(2022, 4, 8),
            color:'goldenrod'
          },
  {
            id: 24,
            name: 'Perm Mtb Cup 22, 1 этап',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 4, 8),
            endDate: new Date(2022, 4, 8),
            color:'slateblue'
          },
  {
            id: 25,
            name: 'Кубок СпортЭк 1 этап',
            type: 'ХСО',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 4, 14),
            endDate: new Date(2022, 4, 14),
            color:'goldenrod'
          },
  {
            id: 26,
            name: 'ROAD Bike Battle, Челябинск',
            type: 'Road',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 4, 14),
            endDate: new Date(2022, 4, 14),
            color:'orange'
          },
  {
            id: 27,
            name: 'Муравейник',
            type: 'ХСО',
            org:'Озерск',
            go: 0,
             startDate: new Date(2022, 4, 21),
            endDate: new Date(2022, 4, 21),
            color:'aqua'
          },
  {
            id: 28,
            name: '1 этап XCO «Мала-хит» г. Голый камень',
            type: 'ХСО',
            org:'Grizzled Bear',
            go: 0,
             startDate: new Date(2022, 4, 22),
            endDate: new Date(2022, 4, 22),
            color:'crimson'
          },
  {
            id: 29,
            name: 'Пермский веломарафон',
            type: 'ХСМ',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 4, 28),
            endDate: new Date(2022, 4, 28),
            color:'slateblue'
          },
  {
            id: 30,
            name: 'Параллельный Кросс, Челябинск',
            type: 'Cross',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 4, 28),
            endDate: new Date(2022, 4, 28),
            color:'orange'
          },
  {
            id: 31,
            name: 'Городская Прогулка Челябинск',
            type: 'Прогулка',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 4, 29),
            endDate: new Date(2022, 4, 29),
            color:'orange'
          },
  {
            id: 32,
            name: 'FUN-марафон ""В Европу и обратно""',
            type: 'ХСМ',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 4, 29),
            endDate: new Date(2022, 4, 29),
            color:'black'
          },
  {
            id: 33,
            name: 'II этап MTB MARAFON TYUMEN 2022',
            type: 'ХСО',
            org:'Велоформа и Триатлон | Марафоны MTB&RUN',
            go: 0,
             startDate: new Date(2022, 4, 29),
            endDate: new Date(2022, 4, 29),
            color:'rebeccapurple'
          },
  {
            id: 34,
            name: 'ХСО Кантрийный лес',
            type: 'ХСО',
            org:'Kalinovka trail bike park',
            go: 0,
             startDate: new Date(2022, 4, 29),
            endDate: new Date(2022, 4, 29),
            color:'red'
          },
  {
            id: 35,
            name: 'Веломарафон Киргишаны',
            type: 'ХСМ',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 5, 5),
            endDate: new Date(2022, 5, 5),
            color:'goldenrod'
          },
  {
            id: 36,
            name: 'Новая Энергия, UCP, Челябинск',
            type: 'XCO',
            org:'UCP/Comiron',
            go: 0,
             startDate: new Date(2022, 5, 5),
            endDate: new Date(2022, 5, 5),
            color:'orangered'
          },
  {
            id: 37,
            name: 'Квест Челябинск',
            type: 'Квест',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 5, 11),
            endDate: new Date(2022, 5, 11),
            color:'orange'
          },
  {
            id: 38,
            name: 'Летнее приключение',
            type: 'Прогулка',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 5, 12),
            endDate: new Date(2022, 5, 12),
            color:'goldenrod'
          },
  {
            id: 39,
            name: 'Perm Mtb Cup 22, 2 этап',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 5, 12),
            endDate: new Date(2022, 5, 12),
            color:'slateblue'
          },
  {
            id: 40,
            name: 'Кубок СпортЭк 2',
            type: 'ХСО',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 5, 18),
            endDate: new Date(2022, 5, 18),
            color:'goldenrod'
          },
  {
            id: 41,
            name: 'ROAD RADIATOR Разделка',
            type: 'Road ITT',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 5, 18),
            endDate: new Date(2022, 5, 18),
            color:'orange'
          },
  {
            id: 42,
            name: 'ROAD RADIATOR Группа',
            type: 'Road Group',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 5, 19),
            endDate: new Date(2022, 5, 19),
            color:'orange'
          },
  {
            id: 43,
            name: 'По Следам Волков',
            type: 'ХСМ',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 5, 25),
            endDate: new Date(2022, 5, 25),
            color:'goldenrod'
          },
  {
            id: 44,
            name: '2 этап “Foxhill” г. Лисья',
            type: 'Гонка в гору',
            org:'Grizzled Bear',
            go: 0,
             startDate: new Date(2022, 5, 26),
            endDate: new Date(2022, 5, 26),
            color:'crimson'
          },
  {
            id: 45,
            name: 'III этап MTB MARAFON TYUMEN 2022',
            type: 'ХСО',
            org:'Велоформа и Триатлон | Марафоны MTB&RUN',
            go: 0,
             startDate: new Date(2022, 5, 26),
            endDate: new Date(2022, 5, 26),
            color:'rebeccapurple'
          },
  {
            id: 46,
            name: 'FORMULA 261, UCP, Верхний Уфалей',
            type: 'XCO',
            org:'UCP/Comiron',
            go: 0,
             startDate: new Date(2022, 5, 26),
            endDate: new Date(2022, 5, 26),
            color:'orangered'
          },
  {
            id: 47,
            name: 'Кросс-Кантри Краснотурьинск',
            type: 'ХСО',
            org:'Forest Riders',
            go: 0,
             startDate: new Date(2022, 6, 2),
            endDate: new Date(2022, 6, 2),
            color:'green'
          },
  {
            id: 48,
            name: 'Параллельный Кросс, Екатеринбург',
            type: 'Cross',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 2),
            endDate: new Date(2022, 6, 2),
            color:'orange'
          },
  {
            id: 49,
            name: 'ЭПИК Книга Джунглей',
            type: 'XCO-L',
            org:'Forest Riders',
            go: 0,
             startDate: new Date(2022, 6, 3),
            endDate: new Date(2022, 6, 3),
            color:'green'
          },
  {
            id: 50,
            name: 'Бобровый перекат',
            type: 'ХСМ',
            org:'Стихия',
            go: 0,
             startDate: new Date(2022, 6, 9),
            endDate: new Date(2022, 6, 9),
            color:'skyblue'
          },
  {
            id: 51,
            name: 'Титановая педаль 2022 (Взрослые)',
            type: 'ХСО',
            org:'Верхняя Салда',
            go: 0,
             startDate: new Date(2022, 6, 9),
            endDate: new Date(2022, 6, 9),
            color:'#8b676740'
          },
  {
            id: 52,
            name: 'ХСО на Чемпионской горке',
            type: 'ХСО',
            org:'KuLik team',
            go: 0,
             startDate: new Date(2022, 6, 9),
            endDate: new Date(2022, 6, 9),
            color:'violet'
          },
  {
            id: 53,
            name: 'Кубок СпортЭк 3',
            type: 'ХСО',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 6, 9),
            endDate: new Date(2022, 6, 9),
            color:'goldenrod'
          },
  {
            id: 54,
            name: 'Параллельный Кросс, Тюмень',
            type: 'Cross',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 9),
            endDate: new Date(2022, 6, 9),
            color:'orange'
          },
  {
            id: 55,
            name: 'Квест, Тюмень',
            type: 'Квест',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 10),
            endDate: new Date(2022, 6, 10),
            color:'orange'
          },
  {
            id: 56,
            name: 'ХСМ Wallчиха',
            type: 'ХСМ',
            org:'KuLik team',
            go: 0,
             startDate: new Date(2022, 6, 10),
            endDate: new Date(2022, 6, 10),
            color:'violet'
          },
  {
            id: 57,
            name: 'Perm Mtb Cup 22, 3 этап',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 6, 10),
            endDate: new Date(2022, 6, 10),
            color:'slateblue'
          },
  {
            id: 58,
            name: 'На РУДНИКАХ',
            type: 'ХСЕ',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 6, 16),
            endDate: new Date(2022, 6, 16),
            color:'black'
          },
  {
            id: 59,
            name: '8 Озёр Разделка, Шеломенцево',
            type: 'Road ITT',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 16),
            endDate: new Date(2022, 6, 16),
            color:'orange'
          },
  {
            id: 60,
            name: 'НА РУДНИКАХ',
            type: 'ХСО',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 6, 17),
            endDate: new Date(2022, 6, 17),
            color:'black'
          },
  {
            id: 61,
            name: '8 Озёр Группа, Шеломенцево',
            type: 'Road Group',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 17),
            endDate: new Date(2022, 6, 17),
            color:'orange'
          },
  {
            id: 62,
            name: 'Night Ride, Челябинск',
            type: 'Ночная прогулка',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 23),
            endDate: new Date(2022, 6, 23),
            color:'orange'
          },
  {
            id: 63,
            name: 'ХСМ Каменный цветок',
            type: 'ХСМ',
            org:'Полевской',
            go: 0,
             startDate: new Date(2022, 6, 23),
            endDate: new Date(2022, 6, 23),
            color:'coral'
          },
  {
            id: 64,
            name: 'Титановая педаль (Дети)',
            type: 'ХСО',
            org:'Верхняя Салда',
            go: 0,
             startDate: new Date(2022, 6, 23),
            endDate: new Date(2022, 6, 23),
            color:'#8b676740'
          },
  {
            id: 65,
            name: 'Деревенский веломарафон',
            type: 'ХСМ',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 6, 30),
            endDate: new Date(2022, 6, 30),
            color:'goldenrod'
          },
  {
            id: 66,
            name: '3 этап XCM «Седой медведь» пролог',
            type: 'ХСО',
            org:'Grizzled Bear',
            go: 0,
             startDate: new Date(2022, 6, 30),
            endDate: new Date(2022, 6, 30),
            color:'crimson'
          },
  {
            id: 67,
            name: '3 этап XCM «Седой медведь»',
            type: 'ХСМ',
            org:'Grizzled Bear',
            go: 0,
             startDate: new Date(2022, 6, 31),
            endDate: new Date(2022, 6, 31),
            color:'crimson'
          },
  {
            id: 68,
            name: 'IV этап MTB MARAFON TYUMEN 2022',
            type: 'ХСО',
            org:'Велоформа и Триатлон | Марафоны MTB&RUN',
            go: 0,
             startDate: new Date(2022, 6, 31),
            endDate: new Date(2022, 6, 31),
            color:'rebeccapurple'
          },
  {
            id: 69,
            name: 'Параллельный кросс FINAL SHOW',
            type: 'Cross',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 6, 31),
            endDate: new Date(2022, 6, 31),
            color:'orange'
          },
  {
            id: 70,
            name: 'ХСМ ""Большой Камень"", UCP, Верхний Уфалей',
            type: 'ХСМ',
            org:'UCP/Comiron',
            go: 0,
             startDate: new Date(2022, 7, 7),
            endDate: new Date(2022, 7, 7),
            color:'orangered'
          },
  {
            id: 71,
            name: 'Квест FINAL',
            type: 'Квест',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 7, 13),
            endDate: new Date(2022, 7, 13),
            color:'orange'
          },
  {
            id: 72,
            name: 'Кубок СпортЭк 4',
            type: 'ХСО',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 7, 13),
            endDate: new Date(2022, 7, 13),
            color:'goldenrod'
          },
  {
            id: 73,
            name: 'Perm Mtb Cup 22, 4 этап',
            type: 'ХСО',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 7, 14),
            endDate: new Date(2022, 7, 14),
            color:'slateblue'
          },
  {
            id: 74,
            name: 'Kilowatt ULTRA, Веселовка',
            type: 'ХСО',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 7, 20),
            endDate: new Date(2022, 7, 20),
            color:'orange'
          },
  {
            id: 75,
            name: 'XCO Motivators',
            type: 'ХСО',
            org:'Motivators',
            go: 0,
             startDate: new Date(2022, 7, 20),
            endDate: new Date(2022, 7, 20),
            color:'darkgoldenrod'
          },
  {
            id: 76,
            name: 'Kilowatt ULTRA, Веселовка',
            type: 'ХСО',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 7, 21),
            endDate: new Date(2022, 7, 21),
            color:'orange'
          },
  {
            id: 77,
            name: 'КВЕСТ, Екатеринбург',
            type: 'Квест',
            org:'Comiron',
            go: 0,
             startDate: new Date(2022, 7, 27),
            endDate: new Date(2022, 7, 27),
            color:'orange'
          },
  {
            id: 78,
            name: 'FUN-марафон ""В Европу и обратно',
            type: 'ХСМ',
            org:'Слюдорудник',
            go: 0,
             startDate: new Date(2022, 7, 28),
            endDate: new Date(2022, 7, 28),
            color:'black'
          },
  {
            id: 79,
            name: 'V этап MTB MARAFON TYUMEN 2022',
            type: 'ХСО',
            org:'Велоформа и Триатлон | Марафоны MTB&RUN',
            go: 0,
             startDate: new Date(2022, 7, 28),
            endDate: new Date(2022, 7, 28),
            color:'rebeccapurple'
          },
  {
            id: 80,
            name: 'ХСО Калиновка трейл',
            type: 'ХСО',
            org:'Kalinovka trail bike park',
            go: 0,
             startDate: new Date(2022, 7, 28),
            endDate: new Date(2022, 7, 28),
            color:'red'
          },
  {
            id: 81,
            name: 'Осеннее приключение',
            type: 'Прогулка',
            org:'ProBike',
            go: 0,
             startDate: new Date(2022, 8, 3),
            endDate: new Date(2022, 8, 3),
            color:'goldenrod'
          },
  {
            id: 82,
            name: "Five O'Clock, UCP",
            type: 'XCM time trial',
            org:'UCP/Comiron',
            go: 0,
             startDate: new Date(2022, 8, 3),
            endDate: new Date(2022, 8, 3),
            color:'orangered'
          },
  {
            id: 83,
            name: '4 этап XCO «Мала-хит» г. Голый каменьv',
            type: 'ХСО',
            org:'Grizzled Bear',
            go: 0,
             startDate: new Date(2022, 8, 4),
            endDate: new Date(2022, 8, 4),
            color:'crimson'
          },
  {
            id: 84,
            name: '""Веломарафон Чистой Воды""',
            type: 'ХСМ',
            org:'Федерация Велоспорта Миасса',
            go: 0,
             startDate: new Date(2022, 8, 11),
            endDate: new Date(2022, 8, 11),
            color:'darkkhaki'
          },
  {
            id: 85,
            name: 'Муравейник',
            type: 'ХСО',
            org:'Озерск',
            go: 0,
             startDate: new Date(2022, 8, 18),
            endDate: new Date(2022, 8, 18),
            color:'aqua'
          },
  {
            id: 86,
            name: 'Perm Mtb Cup 22, Финал',
            type: 'ХСМ',
            org:'Cyclingche Пермь',
            go: 0,
             startDate: new Date(2022, 8, 25),
            endDate: new Date(2022, 8, 25),
            color:'slateblue'
          },
  {
            id: 87,
            name: 'Велогонка опавших листьев',
            type: 'ХСО',
            org:'Стихия',
            go: 0,
             startDate: new Date(2022, 8, 25),
            endDate: new Date(2022, 8, 25),
            color:'skyblue'
          },
  {
            id: 88,
            name: 'Миасский Зачёт',
            type: 'ХСО',
            org:'Новые Вершины',
            go: 0,
             startDate: new Date(2022, 9, 2),
            endDate: new Date(2022, 9, 2),
            color:'antiquewhite'
          },
  ]

       export const chooseRace= (id, go)=> {
            return {
                type: "CHOOSE_RACE",
                payload: {id:id, go:go}
            }
          
          }
          export const onlyChoose= (only)=> {
            return {
                type: "ONLY_CHOOSE",
                payload: {only:only}
            }
          
          }
          export const clear= ()=> {
            return {
                type: "CLEAR"
            }
          
          }


const reduser = (state = initialStore, action) => {
    switch (action.type) {
        case "CHOOSE_RACE": {
             initialStore  = state.filter((e)=>{
                e.id==action.payload.id?e.go=action.payload.go:e.go=e.go
            return e
        })
        
        return initialStore
        }
       case "CLEAR": {
        initialStore.forEach(element => {
            element.go=0
        });
        return initialStore
   }
        
default:
      return state
    
  
}}

const raceStore = createStore(reduser)
export default raceStore