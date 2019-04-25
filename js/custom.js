$(document).ready(function() {
    
    $(".menu").click(function() {
        $(this).addClass("menu-active");
        $(".menu-back").addClass("menu-back-active");
        $(".sidenav").addClass("sidenav-animation");
        $(".nav-title").addClass("nav-title-active");
        $(".c-nav-title").addClass("c-nav-title-active");
        
        $(".content").addClass("content-new");
        $(".sub-nav").addClass("sub-nav-deactive");
    });
    
    $(".menu-back").click(function() {
        $(this).removeClass("menu-back-active");
        $(".menu").removeClass("menu-active");
        $(".sidenav").removeClass("sidenav-animation");
        $(".nav-title").removeClass("nav-title-active");
        $(".c-nav-title").removeClass("c-nav-title-active");
        
        $(".content").removeClass("content-new");
        $(".sub-nav").removeClass("sub-nav-deactive");
    });
    
    $(".nav-icon-dashboard").hover(function() {
        $(".nav-icon-dashboard img").attr("src", "image/dashboard-icon-active.svg");
    }, function() {
        $(".nav-icon-dashboard img").attr("src", "image/dashboard-icon.svg");
    });
    
    $(".nav-icon-appointment").hover(function() {
        $(".nav-icon-appointment img").attr("src", "image/appointment-icon-active.svg");
    }, function() {
        $(".nav-icon-appointment img").attr("src", "image/appointment-icon.svg");
    });
    
    $(".nav-icon-patient").hover(function() {
        $(".nav-icon-patient img").attr("src", "image/patient-icon-active.svg");
    }, function() {
        $(".nav-icon-patient img").attr("src", "image/patient-icon.svg");
    });
    
    $(".nav-icon-message").hover(function() {
        $(".nav-icon-message img").attr("src", "image/message-icon-active.svg");
    }, function() {
        $(".nav-icon-message img").attr("src", "image/message-icon.svg");
    });
    
    $(".nav-icon-task").hover(function() {
        $(".nav-icon-task img").attr("src", "image/task-icon-active.svg");
    }, function() {
        $(".nav-icon-task img").attr("src", "image/task-icon.svg");
    });
    
    $(".nav-icon-billing").hover(function() {
        $(".nav-icon-billing img").attr("src", "image/billing-icon-active.svg");
    }, function() {
        $(".nav-icon-billing img").attr("src", "image/billing-icon.svg");
    });
    
    $(".nav-icon-customization").hover(function() {
        $(".nav-icon-customization img").attr("src", "image/customization-icon-active.svg");
    }, function() {
        $(".nav-icon-customization img").attr("src", "image/customization-icon.svg");
    });
    
    $("#edit-dashboard").click(function() {
        $(".pop-window").css("display", "flex");
    });
    
    $("#edit-form").click(function() {
        $(".pop-window").css("display", "flex");
    });
    
    $(document).mouseup(function(e) {
        var container = $(".edit-box");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $(".pop-window").css("display", "none");
        }
    });
    
    // date section
    
    var week_data = ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"];
    
    var day_data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    
    var time_data = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"];
    
    d3.select("#date-section")
        .selectAll(".date")
        .data(week_data)
        .enter()
        .append("div")
        .attr("class", "date");
    
    d3.selectAll(".date")
        .append("span")
        .attr("class", "week-item");
    
    d3.selectAll(".week-item")
        .data(week_data)
        .text(function(d) {
            return d;
        });
    
    d3.selectAll(".date")
        .append("span")
        .attr("class", "day-item");
    
    d3.selectAll(".day-item")
        .data(day_data)
        .text(function(d) {
            if (d == "15") {
                d3.select(this)
                    .attr("class", "day-item today")
                    .style("color", "#3b86fd");
                
                return d;
            }
            else if (d == "18") {
                d3.select(this)
                    .attr("class", "day-item selected")
                    .style("color", "#ffffff");
                
                return d;
            }
            else {
                return d;
            }
        });
    
    // time section
    
    d3.select("#time-section")
        .append("div")
        .attr("class", "filter");
    
    d3.select(".filter")
        .append("img")
        .attr("src", "../image/time-icon-active.svg")
        .style("width", "0.24rem");
    
    d3.select(".filter")
        .append("img")
        .attr("src", "../image/room-icon.svg")
        .style("width", "0.17rem")
        .style("margin-left", "0.3rem");
    
    d3.select("#time-section")
        .append("div")
        .attr("class", "time");
    
    d3.select(".time")
        .append("img")
        .attr("src", "../image/left-icon.svg")
        .style("width", "0.2rem")
        .style("margin-left", "0.15rem");
    
    d3.select(".time")
        .append("div")
        .attr("class", "time-container");
    
    d3.select(".time-container")
        .selectAll(".time-item")
        .data(time_data)
        .enter()
        .append("span")
        .attr("class", "time-item");
    
    d3.selectAll(".time-item")
        .text(function(d) {
            if (d == "10:00") {
                d3.select(this)
                    .attr("id", "current-time");
                
                return d;
            }
            else {
                return d;
            }
        });
    
    d3.select(".time")
        .append("img")
        .attr("src", "../image/right-icon.svg")
        .style("width", "0.2rem")
        .style("margin-right", "0.15rem");
    
    d3.select(".time")
        .append("div")
        .attr("class", "ruler-container");
    
    d3.select(".ruler-container")
        .append("div")
        .attr("class", "ruler-dot");
    
    d3.select(".ruler-container")
        .append("div")
        .attr("class", "ruler-line");
    
    var x = $("#current-time").offset();
    
    console.log(x);
    
    $(".ruler-container").offset({top: x.top + 13, left: x.left + 40});
    
    // appointment detail section
    
    d3.csv("../data/sample.csv", function(data) {
        
        console.log(data);
        
        d3.select("#appointment-detail")
            .selectAll(".patient")
            .data(data)
            .enter()
            .append("div")
            .attr("class", "patient");
        
        // patient profile picture
        
        d3.selectAll(".patient")
            .append("div")
            .attr("class", "patient-profile");
        
        d3.selectAll(".patient-profile")
            .style("background-image", function(d) {
                return "url('" + d.profile + "')";
            });
        
        // patient name
        
        d3.selectAll(".patient")
            .append("span")
            .attr("class", "patient-name");
        
        d3.selectAll(".patient-name")
            .text(function(d) {
                return d.name;
            });
        
        //patient detail
        
        d3.selectAll(".patient")
            .append("div")
            .attr("class", "patient-detail");
        
        d3.selectAll(".patient-detail")
            .append("div")
            .attr("class", "patient-detail-box");
        
        d3.selectAll(".patient-detail-box")
            .style("width", function(d) {
                if (d.time == "9:30 - 11:00") {
                    return "2.98rem";
                }
                else {
                    return "2.08rem";
                }
            })
            .style("margin-left", function(d) {
                if (d.time == "9:30 - 11:00") {
                    return "1.83rem";
                }
                else if (d.time == "10:00 - 11:00") {
                    return "2.78rem";
                }
                else {
                    return "4.7rem";
                }
            });
        
        d3.selectAll(".patient-detail-box")
            .append("div")
            .attr("class", "mark");
        
        d3.selectAll(".mark")
            .style("background-color", function(d) {
                if (d.status == "checked in") {
                    return "#3b86fd";
                }
                else if (d.status == "in process") {
                    return "#c8fd3b";
                }
                else if (d.status == "completed") {
                    return "#3bfdb7";
                }
            });
        
        d3.selectAll(".patient-detail-box")
            .append("div")
            .attr("class", "appointment-info-container");
        
        d3.selectAll(".appointment-info-container")
            .append("span")
            .attr("class", "appointment-info info1");
        
        d3.selectAll(".info1")
            .text(function(d) {
                return d.time;
            });
        
        d3.selectAll(".appointment-info-container")
            .append("span")
            .attr("class", "appointment-info info2");
        
        d3.selectAll(".info2")
            .text(function(d) {
                return d.room;
            });
        
        d3.selectAll(".appointment-info-container")
            .append("span")
            .attr("class", "appointment-info info3");
        
        d3.selectAll(".info3")
            .text(function(d) {
                return d.reason;
            });
        
    });
    
    
    d3.csv("../data/chat.csv", function(data) {
       
        console.log(data);
        
        d3.select("#contact-list")
            .selectAll(".contact-profile")
            .data(data)
            .enter()
            .append("div")
            .attr("class", "contact-profile")
            .style("background-color", function(d) {
                if (d.name == "Tom Purdy") {
                    return "#3b86fd";
                }
                else {
                    return "#fff";
                }
            });
        
        d3.selectAll(".contact-profile")
            .append("div")
            .attr("class", "contact-patient-profile");
        
        d3.selectAll(".contact-patient-profile")
            .style("background-image", function(d) {
                return "url('" + d.profile + "')";
            });
        
        d3.selectAll(".contact-profile")
            .append("div")
            .attr("class", "contact-info");
        
        d3.selectAll(".contact-info")
            .append("div")
            .attr("class", "line1");
        
        d3.selectAll(".line1")
            .append("span")
            .style("font-size", "0.12rem")
            .style("color", function(d) {
               if (d.name == "Tom Purdy") {
                    return "#fff";
                }
                else {
                    return "#000";
                } 
            })
            .text(function(d) {
                return d.name;
            });
        
        d3.selectAll(".line1")
            .append("span")
            .style("font-size", "0.12rem")
            .style("color", function(d) {
               if (d.name == "Tom Purdy") {
                    return "#fff";
                }
                else {
                    return "#000";
                } 
            })
            .text(function(d) {
                return d.time;
            });
        
        d3.selectAll(".contact-info")
            .append("span")
            .style("font-size", "0.12rem")
            .style("margin-top", "0.06rem")
            .style("margin-top", "0.06rem")
            .style("color", function(d) {
               if (d.name == "Tom Purdy") {
                    return "#fff";
                }
                else {
                    return "#000";
                } 
            })
            .text(function(d) {
                return d.recent;
            });
        
        
    });
    
    
});