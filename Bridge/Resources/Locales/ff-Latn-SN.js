﻿Bridge.merge(new Bridge.CultureInfo("ff-Latn-SN", true), {
    englishName: "Fulah (Latin, Senegal)",
    nativeName: "Fulah (Sénégal)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "Non Numérique",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infini",
        positiveInfinitySymbol: "+Infini",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "CFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["alet","alt.","tal.","alar.","alk.","alj.","aset"],
        abbreviatedMonthGenitiveNames: ["samw","feeb","mar","awr","me","suy","sul","ut","sat","okt","now","dees",""],
        abbreviatedMonthNames: ["samw","feeb","mar","awr","me","suy","sul","ut","sat","okt","now","dees",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["alete","altine","talaata","alarba","alkamiisa","aljumaa","asete"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["samwiee","feeburyee","marsa","awril","me","suyeŋ","sulyee","ut","satambara","oktoobar","nowamburu","deesamburu",""],
        monthNames: ["samwiee","feeburyee","marsa","awril","me","suyeŋ","sulyee","ut","satambara","oktoobar","nowamburu","deesamburu",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Al","Te","Ta","Al","Al","Ju","As"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
