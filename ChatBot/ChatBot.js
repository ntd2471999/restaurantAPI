module.exports = function(msg){
    var results = "Mình chưa được học câu này mong bạn thông cảm !!!";
    var mess = msg.toLowerCase();
    if(mess.indexOf('hello') !== -1)
    {
        
        
            results = "Xin chào bạn !!!";
        
    }
    else if(mess.indexOf('ban la ai') !== -1)
    {
        results = "Mình là bot do a Duy đẹp trai tạo ra :v";
    }
    else if(mess.indexOf('cafe sua') !== -1 && mess.indexOf('gia') !== -1 )
    {

        results = "Cafe sữa giá 20k";
    }   
    else if(mess.indexOf('com') !== -1)
    {
        if(mess.indexOf('ga') !== -1)
        {
            if(mess.indexOf('lon') !== -1){
                results = "Cơm gà lớn giá 30k nha";
            }
            else if(mess.indexOf('nho') !== -1)
            {
                results = "Cơm gà nhỏ giá 25k nha";
            }
            else{
                results = "Cơm gà nhỏ hay lớn !!!";
            }
            
        }
        else{
            results = "Bạn gọi cơm gì?";
        }
        
    } 
    else if(mess.indexOf('menu') !== -1){
        results = "1. Cơm gà lớn 30k \n2. Cơm gà nhỏ 25k \n3.Cafe sữa 20k";
    }

    return results;
} ;

