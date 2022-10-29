// Всі перетворення чисел
var ones = ['', 'один', 'два', 'три', 'чотири', 'п`ять', 'шість', 'сім', 'вісім', 'дев`ять']
var teens = ['', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п`ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев`ятнадцять']
var tens = ['', 'десять', 'двадцять', 'тридцять', 'сорок', 'п`ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев`яносто']
var hundreds = ['', 'сто', 'двісті', 'триста', 'чотириста', 'п`ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев`ятсот']
var thousands = ['', 'тисяча', 'дві тисячі', 'три тисячі', 'чотири тисячі', 'п`ять тисяч', 'шість тисяч', 'сім тисяч', 'вісім тисяч', 'дев`ять тисяч']
    
// Перетворення тисяч
function convert_thousands(num) {
    if (num >= 1000)
        return thousands[Math.floor(num / 1000)] + " " + convert_hundreds(num % 1000)
    else 
        return convert_hundreds(num)
}

// Перетворення сотень
function convert_hundreds(num) {
    if (num >= 100)
        return hundreds[Math.floor(num / 100)] + " " + convert_tens(num % 100)
    else 
        return convert_tens(num)
}

// Перетворення десяток і одиниць
function convert_tens(num) {
    if ((num >= 11) && (num <= 19))
        return teens[num - 10]
    else if (num >= 10)
        return tens[Math.floor(num / 10)] + " " + ones[num % 10]
    else if (num < 10)
        return ones[num % 10]
}

// Перевірка області визначення та перетворення нулів
function convert(num) {
    if ((num > 9999) || (num < -9999))
        return "число поза областю визначень"
    else {
        if ((num == 0) || (num == -0))
            return 'нуль'
        else if (num < 0) {
            num = -num
            return "мінус " + convert_thousands(num)
        }
        else
            return convert_thousands(num)
    }
}

// Введені числа
var cases = [0, 7, -9, -0, 16, -488, 790, 9989, -1911, 99999]
for (let i = 0; i < cases.length; i++)
    console.log(cases[i] + " --> " + convert(cases[i]))
