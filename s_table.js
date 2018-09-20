/*
 * Copyright © 2018 Rishat Kagirov (iEPCBM)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
$(document).ready(function () {
    var i=0, b,e;
    var pad = "00";
    var start = new Date();
    $(".cur-time").html((pad+start.getHours()).slice(-pad.length)+":"+(pad+start.getMinutes()).slice(-pad.length)+":"+(pad+start.getSeconds()).slice(-pad.length));
    for (i=0;i<$("#lessons-tt>tbody>tr.content-tt").size();i++) {
        $("#lessons-tt>tbody>tr.content-tt:eq("+i+")>td.number-tt").html((i+1)+".");
        beginT = $("#lessons-tt>tbody>tr.content-tt:eq("+i+")>td.begin-tt").html().match(/([0-9]*):([0-9]*)/i);
        endT = $("#lessons-tt>tbody>tr.content-tt:eq("+i+")>td.end-tt").html().match(/([0-9]*):([0-9]*)/i);
        if (((parseInt(beginT[1])*60+parseInt(beginT[2]))<=(start.getHours()*60+start.getMinutes())) &&
           ((parseInt(endT[1])*60+parseInt(endT[2]))>=(start.getHours()*60+start.getMinutes()))) {
            $("#lessons-tt>tbody>tr.content-tt:eq("+i+")").css({backgroundColor: "#feb"});
        }
    }
});
