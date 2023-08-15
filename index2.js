// let hafta=Number(prompt('1 dan 7 gacha son kiriting '));
// let dushanba,seshanba,chorshanba,payshanba,juma,shanba,yakshanba;
// if(hafta==1){
//     console.log('dushanba haftaning birinchi kuni');
// }else if(hafta==2){
//     console.log('seshanba haftaning ikkinchi kuni');
// }else if(hafta==3){
//     console.log('chorshanba haftaning uchinchi kuni');
// }else if(hafta==4){
//     console.log('payshanba haftaning to`rtinch kuni');
// }else if(hafta==5){
//     console.log('juma kunilarni eng ulug`i');
// }else if(hafta==6){
//     console.log('shanba haftaning oltinchi kuni.Ayrim kishilar uchun dam olish kuni');
// }else if(hafta==7){
//     console.log('yakshanba haftaning yettinch kuni.O`zbekistoda dam olish kuni');
// }else if(hafta==8,100){
//     console.log('1 dan 7 gacha son kiriting ');
// }





let yosh=Number(prompt('son kiriting'));
if(yosh%3==0 && yosh%5==0){
    console.log('success');
}else{
    console.log('failed');
}
if(yosh<0){
    console.log('siz xali tug`ilmagansiz');

}else if(yosh>=99){
    console.log('siz Dunyodagi eng yoshi ulug`kishilarni birisiz');


}else if(yosh>=60){
    console.log('1.pensionersiz [erkaklar uchun] ');
    console.log('2.pensionersiz [ayollar uchun] ');


}else if(yosh>=55){
    console.log('1.pensionersiz yoshiga yaqinlashdingiz [erkaklar uchun] ');
    console.log('2.pensionersiz [ayollar uchun] ');


}else if(yosh>=40){
    console.log('siz bobo yoki buvi bo`lgansiz');


}else if(yosh>=22){
    console.log('1.siz yaqinda farzandli bo`lasiz [bo`lgansizlar]');


}else if(yosh>=20){
    console.log('siz yigirma yoshga kirgansiz[oliy o`quv yurtiga kirasiz yoki kirgansiz]');
    console.log('1.siz yaqinda uylanasiz [uylangansiz]');
    console.log('2.siz yaqinda turmushga chiqasiz [turmushga chiqqansiz]');


}else if(yosh>=19){
    console.log('siz o`n to`qiz yoshga kirgansiz[kollejni bitirasiz.oliy o`quv yurtiga kirasiz]');
    console.log('1.siz o`zingiz yoqtirgan kasp hunar organasiz');
    console.log('2.siz yaqinda uylanasi [yigitlar]');
    console.log('3.siz yaqinda turmushga chiqasiz [qizlar]');

    
}else if(yosh>=18){
    console.log('siz o`n sakiz yoshga kirgansiz');
    console.log('siz maktabga umbirinchi sinifga [yoki kollejga] borasiz');
    console.log('1.siz voyaga yetgan yigitsiz');
    console.log('2.siz voyaga yetgan qissiz');

}else if(yosh>=17){
    console.log('siz o`n yetti yoshga kirgansiz');
    console.log('siz maktabga o`ninch sinifga [yoki kollejga] borasiz');
    console.log('1.siz voyaga yetgan yigitsiz');
    console.log('2.siz voyaga yetgan qissiz');

}else if(yosh>=16){
    console.log('siz o`n olti yoshga kirgansiz');
    console.log('siz maktabga o`ngchi sinifga borasiz');
    console.log('1.siz voyaga yetgan yigitsiz');
    console.log('2.siz voyaga yetgan qissiz');


}else if(yosh>=15){
    console.log('siz o`n besh yoshga kirgansiz.');
    console.log('siz maktabga to`qizinchi sinifga borasiz');
    console.log('siz o`smir yoshiga yetgan [yigit yoki qiz]');


}else if(yosh>=14){
    console.log('siz o`n to`rtga yoshga kirgansiz.');
    console.log('siz maktabga sakkizinch sinifga borasiz');
    console.log('siz o`smir yoshiga yetgan [yigit yoki qiz]');


}else if(yosh>=13){
    console.log('siz o`n uch yoshga kirgansiz.');
    console.log('siz maktabga yetinchi sinifga borasiz');
    console.log('siz o`smir yoshiga yetgan [yigit yoki qiz]');


}else if(yosh>=12){
    console.log('siz o`n ikki yoshga kirgansiz.');
    console.log('siz maktabga oltinchi sinifga borasiz');
    console.log('siz o`smir yoshiga yetgan [yigit yoki qiz]');

    
}else if(yosh>=11){
    console.log('siz maktabga beshinch sinifga borasiz');


}else if(yosh>=10){
    console.log('siz o`n  yoshga kirgansiz.');
    console.log('siz maktabga to`rtinch sinifga borasiz');
}else if(yosh>=9){
    console.log('siz to`qiz yoshga kirgansiz.');
    console.log('siz maktabga uchinch sinifga borasiz');


}else if(yosh>=8){
    console.log('siz sakiz yoshga kirgansiz.');
    console.log('siz maktabga ikkinch sinifga borasiz');


}else if(yosh>=7){
    console.log('siz yetti yoshga kirgansiz.');
    console.log('siz maktabga birinchi sinifga borasiz');


}else if(yosh>=3){
    console.log('siz bog`chaga borasiz');
}else if(yosh>=1){
        console.log('siz chaqaloqsiz');
}else{
    console.log('siz xali tug`ilmagansiz');
}
