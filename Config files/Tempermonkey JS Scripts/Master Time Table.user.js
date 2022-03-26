// ==UserScript==
// @name         Master Time Table
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://emp.marwadiuniversity.ac.in:553/Staff/General/CreateMasterTimetable.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#ctl00_ContentPlaceHolder1_drpAcademicYear").val("2021");
    $("#ctl00_ContentPlaceHolder1_drpAcademicYear").change();
    $("#ctl00_ContentPlaceHolder1_drpDepartment").val("3");
    $("#ctl00_ContentPlaceHolder1_drpDepartment").change();
    $("#ctl00_ContentPlaceHolder1_drpStreamID").val("90");
    $("#ctl00_ContentPlaceHolder1_drpStreamID").change();
    // Your code here...
})();