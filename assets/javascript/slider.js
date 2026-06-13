// That's an upgrade from Mayk Brito's idea for carousel at https://youtu.be/SGwHpzgqzgk and mixed with my css for slider with click

let prevBtn = document.querySelector(".slider__btn--prev"),
	nextBtn = document.querySelector(".slider__btn--next"),
	target = document.querySelector(".slider__items");

target.addEventListener("wheel", (e) => 
{
	if (e.deltaY > 0) {
		target.scrollBy(216, 0);
	} else {
		target.scrollBy(-216, 0);
	}
});
// target.addEventListener("drag", (e) => 
// {
// 	console.log(e,target.drastart,target.dragend);
// });
prevBtn.onclick = (e) => target.scrollBy(-216, 0);
nextBtn.onclick = (e) => target.scrollBy(216, 0);
