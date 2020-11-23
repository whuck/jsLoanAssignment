$(document).ready(function() {
    var myRules = {
        salary: {
            required: true,
            min: 0,
            max: 10000000,
            digits: true
        },
        fico: {
            required: true,
            min: 300,
            max: 850,
            digits: true
        },
        months: {
            required: true,
            min: 0,
            max: 600,
            digits: true
        }
    }
    var myMessages = {
        salary: {
            required: "Salary is required!",
            min: "Minimum Salary is 0!",
            max: "Maximum Salary is 10000000",
            digits: "Salary must be a number"
        },
        fico: {
            required: "FICO score is required!",
            min: "Minimum FICO score is 300!",
            max: "Maximum FICO score is 850",
            digits: "Salary must be a number"
        },
        months: {
            required: "Months at job is required!",
            min: "Minimum Months at job is 0!",
            max: "Maximum Months at job is 600",
            digits: "Months at job must be a number"
        }
    }

    function calcLoan() {
        var salaryCheck = $("#salary").val() >= 40000;
        var creditCheck = $("#fico").val() >= 600;
        var jobCheck = $("#months").val() > 12;
        var output = "";

        if(salaryCheck) {
            if(creditCheck) {
                output="Approved";
            }
            else {
                if(jobCheck) {
                    output="Approved";
                } else {
                    output ="Not Approved";
                }
            }
        } else {
            if(creditCheck) {
                if(jobCheck) {
                    output="Approved";
                } else {
                    output="Not Approved";
                }
            } else {
                output="Not Approved";
            }
        }
        $("#approval").val(output);

    }

    $("form").validate({
        submitHandler: calcLoan,
        rules: myRules,
        messages: myMessages
    });
});