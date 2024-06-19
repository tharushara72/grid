

function validateForm2() {
    var date1Input = document.getElementById("date1").value;
    var time1Input = document.getElementById("time1").value;
    var locationInput = document.getElementById("location").value;
    var vtypeInput = document.getElementById("vtype").value;


    // Checking if date or time or pickup-date empty
    if (date1Input == "" || time1Input == ""|| locationInput=="" || vtypeInput=="") {
        alert("Please fill every inputfields");
        return false;
    }
    //validated date pattern
    var date1pattern = /^\d{4}-\d{2}-\d{2}$/;

             if(!date1pattern.test(date1Input)){
            alert("please enter a valid date in YYYY-MM-DD format");
            return false;
             }
 // validated time pattern
    var time1Pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    
    if (!time1Pattern.test(time1Input)) {
            
        alert("Please enter a valid time in HH:MM format");
        return false;
    }
    
    //validated location pattern
        const locationpattern = /^[a-zA-Z0-9\s,'-]*$/;
        if(!locationpattern.test(locationInput)){
            alert("please enter a valid address");
            return false;
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        function formatDate(date) {
            const options = {  day:'numeric',weekday: 'long',month:'long', year: 'numeric' };
            return date.toLocaleDateString(undefined, options);
        }
    
        const currentDate = new Date();
        const dateElement = document.getElementById('current-date');
        dateElement.textContent = `Today's date is ${formatDate(currentDate)}`;
    });
    

        
        
    



        
    
        
            
              
        
        
        
        
    
    


     
    


     

 
















                
































