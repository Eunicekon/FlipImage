function getImage(input) {
  if (input.files && input.files[0]){
    let display = new  DisplayImage();

    display.onload = function (e) {
      $('#image')
      .attr('src', e.target.result)
      .width(150)
      .height(200);
    };

    display.readAsDataURL(input.files[0]);
  }
}