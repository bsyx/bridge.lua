﻿Bridge.merge(new Bridge.CultureInfo("ko-KR", true), {
    englishName: "Korean (Korea)",
    nativeName: "한국어(대한민국)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "+∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "₩",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["일","월","화","수","목","금","토"],
        abbreviatedMonthGenitiveNames: ["1","2","3","4","5","6","7","8","9","10","11","12",""],
        abbreviatedMonthNames: ["1","2","3","4","5","6","7","8","9","10","11","12",""],
        amDesignator: "오전",
        dateSeparator: "-",
        dayNames: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
        longDatePattern: "yyyy'년' M'월' d'일' dddd",
        longTimePattern: "tt h:mm:ss",
        monthDayPattern: "M'월' d'일'",
        monthGenitiveNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        pmDesignator: "오후",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy-MM-dd",
        shortestDayNames: ["일","월","화","수","목","금","토"],
        shortTimePattern: "tt h:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy'년' M'월'",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
