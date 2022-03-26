// ==UserScript==
// @name         Daily Time Table
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://emp.marwadiuniversity.ac.in:553/Staff/General/CreateTimetable.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    $("#ctl00_ContentPlaceHolder1_txtTDate").val(strDate);
    $("#ctl00_ContentPlaceHolder1_drpDepartment").val("21");
    $("#ctl00_ContentPlaceHolder1_drpDepartment").change();
    $("#ctl00_ContentPlaceHolder1_drpAcademicYear").val("2122");
    $("#ctl00_ContentPlaceHolder1_drpAcademicYear").change();
    $("#ctl00_ContentPlaceHolder1_drpStreamID").val("131");
    $("#ctl00_ContentPlaceHolder1_drpStreamID").change();
    // Your code here...
})();