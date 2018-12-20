$(function(){

  $("#user_avatar").change(function(e){
   var file = e.target.files[0];
   var reader = new FileReader();
   // FileReaderが非同期処理をしてくれる

   if(file.type.indexOf("image") < 0 ){
     alert("画像を指定して")
     return false;
   }

   reader.onload = (function(file){
      return function(e){
        $(".avatar").attr("src", e.target.result);
        $(".avatar").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  })

})
// for(value of FormData.entries()){
//     console.log(value);
// }
