function calcBMI(){
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    heigh = heigh / 100;
    bmi = weigh / (heigh * heigh);
 
    bmi = bmi.toFixed();
    return bmi;
} 



