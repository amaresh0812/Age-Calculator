const dateDay1 = $("#inputid1");
const sunsign =['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];



$("button").on("click", function(){

    
   const dateinput1 = dateDay1.val();
    if(!dateinput1){
        alert("enter valid date")
        
        return;
    }

    const birthDate = new Date(dateinput1);
    const today = new Date();
    
    const brtMonth = birthDate.getMonth();
    const brtDate8 = birthDate.getDate();
    
    

    let age1 = today.getFullYear()-birthDate.getFullYear();
    if(age1 < 0){
        alert("error: Not yet Born")
        return;
    }
    let month1 = today.getMonth()-birthDate.getMonth();

    if(month1 < 0 && today.getDate()<birthDate.getDate()){
        age1-- ;
    }
    

    let day1 = today.getDate()-birthDate.getDate();
    if(day1 < 0||day1 === 0 ){
        day1 = 30 + day1;
    }

    
    if(month1 == 0 && brtDate8 > today.getDate() && age1 > 0){

        month1 = today.getMonth();
        age1--;
    }

    $(".output").css("display","flex");
    $("#para1").text(age1 +" Years "+ month1+" Months " + day1+" Days");
    alert(age1 +" Years "+ month1+" Months " + day1+" Days")
    
    if( (brtDate8 <= 19 && brtMonth == "0") || (brtDate8 >= 22 && brtMonth == "11") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[0]);

    }else if( (brtDate8 <= 18 && brtMonth == "1") || (brtDate8 >= 20 && brtMonth == "0") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[1]);

    }else if( (brtDate8 <= 20 && brtMonth == "2") || (brtDate8 >= 19 && brtMonth == "1") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[2]);

    }else if( (brtDate8 <= 19 && brtMonth == "3") || (brtDate8 >= 21 && brtMonth == "2") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[3]);

    }else if( (brtDate8 <= 20 && brtMonth == "4") || (brtDate8 >= 20 && brtMonth == "3") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[4]);

    }else if( (brtDate8 <= 20 && brtMonth == "5") || (brtDate8 >= 21 && brtMonth == "4") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[5]);

    }else if( (brtDate8 <= 22 && brtMonth == "6") || (brtDate8 >= 21 && brtMonth == "5") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[6]);

    }else if( (brtDate8 <= 22 && brtMonth == "7") || (brtDate8 >= 23 && brtMonth == "6") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[7]);

    }else if( (brtDate8 <= 22 && brtMonth == "8") || (brtDate8 >= 23 && brtMonth == "7") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[8]);

    }else if( (brtDate8 <= 22 && brtMonth == "9") || (brtDate8 >= 23 && brtMonth == "8") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[9]);

    }else if( (brtDate8 <= 21 && brtMonth == "10") || (brtDate8 >= 23 && brtMonth == "9") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[10]);

    }else if( (brtDate8 <= 21 && brtMonth == "11") || (brtDate8 >= 22 && brtMonth == "10") ){
        $("#para2").text("Your Zodiac Sign: " + sunsign[11]);
    }


    

});
