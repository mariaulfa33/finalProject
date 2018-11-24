
function c(val)
{
 document.getElementById("d").value='Berapa Jumlah uang Mu?';
}

function v(val){
    if(document.getElementById("d").value==='Berapa Jumlah uang Mu?' && val !== "="){
        document.getElementById("d").value=''; 
    }

    if(val ==='='){

        if(document.getElementById("d").value == Number(document.getElementById("d").value)){
            hasil = document.getElementById("d").value
            document.getElementById("d").value = 'Uang anda tidak berubah: Rp'+ hasil
        }else{
            var hasil = eval(document.getElementById("d").value)
            if(hasil <0){
               document.getElementById("d").value = 'kurang Rp' + (hasil)
            }else if (hasil >0) {
               document.getElementById("d").value = 'terbeli! kembalian: Rp'+ hasil
            }else if (hasil===0){
                document.getElementById("d").value = 'Terimakasih  telah membeli dengan uang pas'
            }
        }        
    }

    if (document.getElementById("d").value !=='Berapa Jumlah uang Mu?' && val !== "=" && val !=='del'){
        document.getElementById("d").value+=val
    }
    
    if(val ==='del'){
        document.getElementById("d").value = document.getElementById("d").value.substr(0,document.getElementById("d").value.length-1) 
    }  
}


function l (){
    document.getElementById("d").value = document.getElementById("d").value.match(/[0-9, -]/g).join('')
}

function g (){
    var diskon = document.getElementById("d").value - document.getElementById("d").value*0.1
    document.getElementById("d").value = 'yey! kamu hanya perlu membayar Rp'+ diskon
}
