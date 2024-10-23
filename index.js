const base_Url = "http://api.login2explore.com:5577";
const end_iml = "/api/iml ";
const end_irl = "/api/irl ";
const connToken = "90934486|-31949222412972821|90962746";
const dbName = "Student";
const relName = "Student-Table";

console.log("hello");

    // Function to validate form
    function validateAndGetFormData() {
        var rollNoVar = document.getElementById("rollNo").value;
        if (rollNoVar === "") {
            alert("Roll No. is Required");
            document.getElementById("rollNo").focus();
            return "";
        }

        var fullNameVar = document.getElementById("fullName").value;
        if (fullNameVar === "") {
            alert("Full Name is Required");
            document.getElementById("fullName").focus();
            return "";
        }

        var classVar = document.getElementById("class").value;
        if (classVar === "") {
            alert("Class is Required");
            document.getElementById("class").focus();
            return "";
        }

        var birthDateVar = document.getElementById("birthDate").value;
        if (birthDateVar === "") {
            alert("Birth Date is Required");
            document.getElementById("birthDate").focus();
            return "";
        }

        var addressVar = document.getElementById("address").value;
        if (addressVar === "") {
            alert("Address is Required");
            document.getElementById("address").focus();
            return "";
        }

        var enrollmentDateVar = document.getElementById("enrollmentDate").value;
        if (enrollmentDateVar === "") {
            alert("Enrollment Date is Required");
            document.getElementById("enrollmentDate").focus();
            return "";
        }

        // Create a JSON object of data
        var jsonStrObj = {
            rollNo: rollNoVar,
            fullName: fullNameVar,
            class: classVar,
            birthDate: birthDateVar,
            address: addressVar,
            enrollmentDate: enrollmentDateVar
        };

        return JSON.stringify(jsonStrObj);  
    }
        
   
    function saveData() {
        // get form data
        var jsonStrObj = validateAndGetFormData();
        if (jsonStrObj === "") {
            return;  
        }

        
        let putRequest = createPUTRequest(connToken, jsonStrObj, dbName, relName);
            jQuery.ajaxSetup({ async: false });
            var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, base_Url, end_iml);
            jQuery.ajaxSetup({ async: true });


            if (resJsonObj.status === 200) {
                  alert("Data saved successfully!");
            } else {
                  alert("Error in saving data. Please try again.");
            }

        // Reset the form and focus on rollno
        resetForm();
        document.getElementById("rollNo").focus();
    }

    function resetForm() {
        document.getElementById("rollNo").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("class").value = "";
        document.getElementById("birthDate").value = "";
        document.getElementById("address").value = "";
        document.getElementById("enrollmentDate").value = "";
        
       document.getElementById("rollNo").disabled=false;
       document.getElementById("btnUpdate").disabled = true;  
        document.getElementById("btnReset").disabled = true; 
        document.getElementById("btnSave").disabled = true;
        document.getElementById("rollNo").focus();
    }
    
    function getrollAsJsonObj(){
        var rollno= document.getElementById("rollNo").value;
        var Jsonstr = {
            rollNo: rollno
        };
        return JSON.stringify(Jsonstr);
    }
    
    function saveRecNo2LS(jsonObj){
        var lvdata = JSON.parse(jsonObj.data);
        localStorage.setItem('recno',lvdata.rec_no);
    }
    
    function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);  // Save record number to local storage
    let data = JSON.parse(jsonObj.data).record;  
    document.getElementById("fullName").value = data.fullName;
    document.getElementById("class").value = data.class;
    document.getElementById("birthDate").value = data.birthDate;
    document.getElementById("address").value = data.address;
    document.getElementById("enrollmentDate").value = data.enrollmentDate;

    console.log(data);
    }
    
    function getrollNo() {
        var rollJsonObj = getrollAsJsonObj();  
        console.log(rollJsonObj); 

        var getRequest = createGET_BY_KEYRequest(connToken, dbName, relName, rollJsonObj);  
        jQuery.ajaxSetup({ async: false }); 
    
        var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, base_Url, end_irl); 
        jQuery.ajaxSetup({ async: true });  
    
        if (resJsonObj.status === 400) {
       
        document.getElementById("btnSave").disabled = false;
        document.getElementById("btnReset").disabled = false;
        document.getElementById("fullName").focus();
        } else if (resJsonObj.status === 200) {
        
        document.getElementById("rollNo").disabled = true;
        fillData(resJsonObj);
        document.getElementById("btnUpdate").disabled = false;  
        document.getElementById("btnReset").disabled = false; 
        document.getElementById("btnSave").disabled = true;
        }
    }
    
    function chnageData(){
         document.getElementById("btnUpdate").disabled = true;
         jsonChange = validateAndGetFormData();
         var updateRequest = createUPDATERecordRequest(connToken,jsonChange,dbName,relName,localStorage.getItem('recno'));
         jQuery.ajaxSetup({ async: false }); 
    
          var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, base_Url, end_iml); 
          jQuery.ajaxSetup({ async: true });
        
          resetForm();
          document.getElementById("rollNo").focus();
    }  
       
    





    
    